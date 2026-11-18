/* eslint-disable @next/next/no-img-element */
/** Mercury Solution logo (official artwork, original brand blue #2047F4). */
export default function Logo({ className = 'h-10' }: { className?: string; dark?: boolean }) {
  return (
    <img src="/images/logo/mercury-logo.png" alt="Mercury Solution" width={657} height={225} className={`w-auto ${className}`} />
  )
}
