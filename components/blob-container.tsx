import React from "react"
import { Blob } from "@/components/blob"

export const BlobContainer = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Overlay di grana/noise per un look premium (rimesso con opacità bassissima) */}
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-[0.03] mix-blend-overlay" />

      <div className="relative h-full w-full">
        {/* Blob Cyan (Primary) - Top Left */}
        <Blob
          color="primary"
          className="top-[-10%] left-[-5%] h-[500px] w-[500px] md:h-[800px] md:w-[800px]"
        />
        
        <Blob
          color="secondary"
          className="top-[-20%] left-[30%] h-[500px] w-[500px] md:h-[800px] md:w-[800px]"
        />

        {/* Blob Purple (Secondary) - Bottom Right */}
        <Blob
          color="secondary"
          className="right-[-10%] bottom-[10%] h-[500px] w-[500px] md:h-[800px] md:w-[800px]"
        />

        {/* Blob centrale soft per profondità */}
        <Blob
          color="primary"
          className="top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 md:h-[600px] md:w-[600px]"
        />

        {/* Piccoli accenti sparsi */}
        <Blob
          color="secondary"
          className="top-[20%] right-[15%] h-[200px] w-[200px] md:h-[300px] md:w-[300px]"
        />
      </div>
    </div>
  )
}
