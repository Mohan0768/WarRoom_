'use client'

import { cn } from '@/lib/utils'

const sparks = Array.from({ length: 18 }, (_, index) => ({
  left: `${8 + ((index * 47) % 84)}%`,
  bottom: `${8 + ((index * 19) % 34)}%`,
  delay: `${(index % 7) * 0.35}s`,
  duration: `${2.4 + (index % 5) * 0.45}s`,
  size: `${3 + (index % 3)}px`,
}))

export function WarRoomAtmosphere({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,10,5,0.16),rgba(20,10,5,0.5))]" />
      <div className="warroom-fire-glow absolute inset-x-1/2 bottom-[-10%] h-2/3 w-[42rem] -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-1/2 w-1/3 origin-bottom -skew-x-6 bg-gradient-to-t from-orange-500/20 to-transparent blur-2xl motion-safe:animate-[warroom-flicker_2.6s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 right-0 h-1/2 w-1/3 origin-bottom skew-x-6 bg-gradient-to-t from-orange-500/20 to-transparent blur-2xl motion-safe:animate-[warroom-flicker_3.1s_ease-in-out_infinite_0.4s]" />
      {sparks.map((spark, index) => (
        <span
          key={index}
          className="warroom-spark absolute rounded-full bg-orange-300 shadow-[0_0_10px_3px_rgba(249,115,22,0.75)]"
          style={{ left: spark.left, bottom: spark.bottom, width: spark.size, height: spark.size, animationDelay: spark.delay, animationDuration: spark.duration }}
        />
      ))}
      <div className="absolute left-0 top-0 h-40 w-32 origin-top-left -rotate-6 bg-orange-950/20 blur-xl motion-safe:animate-[warroom-flag_4s_ease-in-out_infinite]" />
      <div className="absolute right-0 top-0 h-40 w-32 origin-top-right rotate-6 bg-orange-950/20 blur-xl motion-safe:animate-[warroom-flag_4.6s_ease-in-out_infinite_reverse]" />
    </div>
  )
}
