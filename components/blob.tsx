import Image from "next/image"
import { cn } from "@/lib/utils"

interface BlobProps {
  color: "primary" | "secondary"
  className?: string
}

export function Blob({ color, className }: BlobProps) {
  const src =
    color === "primary" ? "/blobs/primary.webp" : "/blobs/secondary.webp"

  return (
    <div
      className={cn("pointer-events-none absolute z-10 select-none", className)}
    >
      <Image
        src={src}
        alt=""
        fill
        className="object-contain opacity-30"
        sizes="(max-width: 768px) 100vw, 50vw"
        unoptimized
      />
    </div>
  )
}
