import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";

interface OptimizedImageProps
  extends Omit<ImageProps, "onLoad" | "onLoadingComplete"> {
  fallback?: string;
}

export default function OptimizedImage({
  src,
  alt,
  className = "",
  fallback = "/placeholder.png",
  ...rest
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <div className={`relative ${isLoading ? "bg-gray-200 animate-pulse" : ""}`}>
      <Image
        src={imgSrc}
        alt={alt}
        className={`transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${className}`}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          setImgSrc(fallback);
        }}
        {...rest}
      />
    </div>
  );
}
