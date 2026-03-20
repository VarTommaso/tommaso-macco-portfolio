import { Lenis } from "lenis/react"

import React from "react"

const SmoothScroll = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <Lenis
      root
      className={className}
      options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}
    >
      {children}
    </Lenis>
  )
}

export default SmoothScroll
