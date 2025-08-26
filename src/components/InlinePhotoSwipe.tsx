"use client";

import { useCallback } from "react";
import Image from "next/image";
import PhotoSwipe from "photoswipe";
import "photoswipe/dist/photoswipe.css";

type InlinePhotoSwipeProps = {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
  ring?: boolean;
};

export default function InlinePhotoSwipe({
  src,
  alt,
  className,
  width,
  height,
  ring = true,
}: InlinePhotoSwipeProps) {
  const open = useCallback(async () => {
    // Ensure we know the natural size
    const img = new window.Image();
    img.src = src;
    await new Promise<void>((resolve) => {
      img.onload = () => resolve();
      img.onerror = () => resolve();
    });
    const w = img.naturalWidth || width;
    const h = img.naturalHeight || height;

    const lightbox = new PhotoSwipe({
      dataSource: [
        {
          src,
          w,
          h,
          alt,
          title: "",
        },
      ],
      index: 0,
    });
    lightbox.init();
  }, [src, alt, width, height]);

  return (
    <button
      type="button"
      onClick={open}
      aria-label={`Open ${alt}`}
      className={className}
    >
      <div
        className={`relative overflow-hidden rounded-lg cursor-pointer ${
          ring ? "ring-2 ring-[--color-border]/60" : ""
        }`}
        style={{ width, height }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={`${width}px`}
          priority
        />
      </div>
    </button>
  );
}
