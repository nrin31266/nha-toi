"use client";

import Image from "next/image";
import { useState } from "react";

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
};

export default function SmartImage({
  src,
  alt,
  className = "",
  sizes,
  priority = false,
  fill = false,
  width,
  height,
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-linear-to-br from-[#c6ddcf] via-[#e8f0e4] to-[#d1e5dd]" />
      )}
      <Image
        src={src}
        alt={alt}
        unoptimized
        fill={fill}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        sizes={sizes}
        priority={priority}
        onLoad={() => setLoaded(true)}
        className={`transition duration-700 ${loaded ? "opacity-100" : "opacity-0"} ${className}`.trim()}
      />
    </>
  );
}
