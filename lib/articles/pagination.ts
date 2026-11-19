export const INSIGHTS_PAGE_SIZE = 10

export function paginate<T>(items: readonly T[], requestedPage: number) {
  const totalPages = Math.max(1, Math.ceil(items.length / INSIGHTS_PAGE_SIZE))
  const page = Math.min(totalPages, Math.max(1, Number.isFinite(requestedPage) ? Math.floor(requestedPage) : 1))
  const start = (page - 1) * INSIGHTS_PAGE_SIZE
  return { page, totalPages, items: items.slice(start, start + INSIGHTS_PAGE_SIZE), from: items.length ? start + 1 : 0, to: Math.min(start + INSIGHTS_PAGE_SIZE, items.length) }
}

export function pageNumbers(page: number, total: number): (number | 'gap')[] {
  const numbers = Array.from({ length: total }, (_, i) => i + 1).filter(n => total <= 7 || n === 1 || n === total || Math.abs(n - page) <= 1)
  return numbers.flatMap((n, i) => i && n - numbers[i - 1] > 1 ? ['gap' as const, n] : [n])
}
