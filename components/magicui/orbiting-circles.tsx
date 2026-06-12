import React from "react"
import { cn } from "@/lib/utils"

export interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
  reverse?: boolean
  duration?: number
  delay?: number
  radius?: number
  path?: boolean
  iconSize?: number
  speed?: number
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 overflow-visible"
          style={{
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
          }}
        >
          <circle
            /* 
              PERBAIKAN ANDROID & TAILWIND v4:
              1. Hilangkan stroke-black/10 karena di-invert otomatis oleh Force Dark Mode Android menjadi transparan/putih.
              2. Gunakan inline style stroke dengan Hex Code (#e4e4e7 / warna border abu-abu seng) agar warnanya dikunci mati.
              3. Tambahkan properti strokeWidth secara eksplisit (tidak hanya mengandalkan stroke-1).
            */
            style={{
              stroke: "#d4d4d8", // Abu-abu solid (Zinc-300), jelas terlihat di Android & tidak hilang saat di-force dark
              strokeWidth: "1px",
            }}
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index
        return (
          <div
            style={
              {
                "--duration": calculatedDuration,
                "--radius": radius,
                "--angle": angle,
                "--icon-size": `${iconSize}px`,
              } as React.CSSProperties
            }
            className={cn(
              `animate-orbit absolute flex size-(--icon-size) transform-gpu items-center justify-center rounded-full z-10`,
              { "[animation-direction:reverse]": reverse },
              className
            )}
            {...props}
          >
            {child}
          </div>
        )
      })}
    </>
  )
}