"use client"

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { cn } from "@/lib/utils"

export interface HorizontalNavItem {
  title: string
  id?: string
  icon?: React.ReactNode
  isGroupHeader?: boolean
}

interface HorizontalNavProps {
  items: HorizontalNavItem[]
  className?: string
  /** Offset in px from the top of the viewport when calculating which section is active */
  scrollOffset?: number
}

export default function HorizontalNav({
  items,
  className,
  scrollOffset = 160,
}: HorizontalNavProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isSticky, setIsSticky] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([])

  // Clickable items only (skip group headers)
  const clickableItems = useMemo(
    () => items.filter((item) => !item.isGroupHeader),
    [items]
  )

  const clickableSectionIds = useMemo(
    () => clickableItems.map((t) => t.id).filter(Boolean) as string[],
    [clickableItems]
  )

  // Scroll the active tab into view within the horizontal scroller
  const scrollActiveIntoView = useCallback((index: number) => {
    const btn = itemRefs.current[index]
    const nav = navRef.current
    if (btn && nav) {
      const navRect = nav.getBoundingClientRect()
      const btnRect = btn.getBoundingClientRect()
      // If the button is outside the visible area, scroll it in
      if (btnRect.left < navRect.left || btnRect.right > navRect.right) {
        btn.scrollIntoView({ inline: "center", behavior: "smooth", block: "nearest" })
      }
    }
  }, [])

  // Sticky detection via IntersectionObserver on a sentinel div
  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting)
      },
      { threshold: 0 }
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  // Scroll-spy
  useEffect(() => {
    if (clickableSectionIds.length === 0) return

    const handleScroll = () => {
      let currentIndex = 0

      for (let i = clickableSectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(clickableSectionIds[i])
        if (el) {
          const absoluteTop = el.getBoundingClientRect().top + window.scrollY
          if (window.scrollY + scrollOffset >= absoluteTop) {
            currentIndex = i
            break
          }
        }
      }

      setActiveIndex(currentIndex)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [clickableSectionIds, scrollOffset])

  // Auto-scroll the nav when active tab changes
  useEffect(() => {
    scrollActiveIntoView(activeIndex)
  }, [activeIndex, scrollActiveIntoView])

  const handleClick = (clickableIndex: number) => {
    setActiveIndex(clickableIndex)

    const sectionId = clickableSectionIds[clickableIndex]
    if (sectionId) {
      const el = document.getElementById(sectionId)
      if (el) {
        const absoluteTop = el.getBoundingClientRect().top + window.scrollY
        window.scrollTo({ top: absoluteTop - scrollOffset + 2, behavior: "smooth" })
      }
    }
  }

  // Group items by category for rendering
  const groups = useMemo(() => {
    const result: { header: HorizontalNavItem | null; children: { item: HorizontalNavItem; clickableIndex: number }[] }[] = []
    let currentGroup: typeof result[number] = { header: null, children: [] }
    let ci = 0

    for (const item of items) {
      if (item.isGroupHeader) {
        if (currentGroup.header || currentGroup.children.length > 0) {
          result.push(currentGroup)
        }
        currentGroup = { header: item, children: [] }
      } else {
        currentGroup.children.push({ item, clickableIndex: ci })
        ci++
      }
    }
    if (currentGroup.header || currentGroup.children.length > 0) {
      result.push(currentGroup)
    }
    return result
  }, [items])

  return (
    <>
      {/* Sentinel — when this scrolls out of view the nav becomes sticky */}
      <div ref={sentinelRef} className="h-0 w-full" />

      <div
        className={cn(
          "z-30 transition-all duration-300 bg-white/95 backdrop-blur-md border-b",
          isSticky
            ? "sticky top-16 sm:top-20 shadow-md border-gray-200/80"
            : "relative shadow-sm border-gray-100",
          className
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            ref={navRef}
            className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-2 -mx-1"
          >
            {groups.map((group, gi) => {
              return (
                <React.Fragment key={gi}>
                  {/* Group separator (not before first group) */}
                  {gi > 0 && (
                    <div className="flex-shrink-0 w-px h-8 bg-gray-200 mx-1" />
                  )}

                  {/* Group label */}
                  {group.header && (
                    <div className="flex-shrink-0 flex items-center gap-1.5 px-2 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 select-none">
                      {group.header.icon && (
                        <span className="flex-shrink-0 w-3.5 h-3.5 text-gray-400">
                          {group.header.icon}
                        </span>
                      )}
                      <span className="whitespace-nowrap hidden sm:inline">{group.header.title}</span>
                    </div>
                  )}

                  {/* Clickable items */}
                  {group.children.map(({ item, clickableIndex }) => {
                    const isActive = clickableIndex === activeIndex
                    return (
                      <button
                        key={item.id ?? clickableIndex}
                        ref={(el) => {
                          itemRefs.current[clickableIndex] = el
                        }}
                        onClick={() => handleClick(clickableIndex)}
                        className={cn(
                          "flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap",
                          isActive
                            ? "bg-mercury-blue-50 text-mercury-blue-700 shadow-sm"
                            : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                        )}
                      >
                        {item.icon && (
                          <span
                            className={cn(
                              "flex-shrink-0 w-4 h-4 transition-colors",
                              isActive ? "text-mercury-blue-600" : "text-gray-400"
                            )}
                          >
                            {item.icon}
                          </span>
                        )}
                        <span>{item.title}</span>
                      </button>
                    )
                  })}
                </React.Fragment>
              )
            })}
          </nav>
        </div>
      </div>
    </>
  )
}
