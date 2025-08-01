
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import PhotoSwipe from "photoswipe";
import "photoswipe/dist/photoswipe.css";

import { ImageItem } from "@/lib/content";

interface PhotoSwipeGalleryProps {
  images: ImageItem[];
  title: string;
  galleryID: string;
}

export default function PhotoSwipeGallery({
  images,
  title,
  galleryID,
}: PhotoSwipeGalleryProps) {
  const lightboxRef = useRef<PhotoSwipe | null>(null);

  useEffect(() => {
    let isMounted = true;
    const gallerySelector = `.photo-swipe-gallery[data-gallery-id="${galleryID}"]`;
    const imageLinks = document.querySelectorAll<HTMLAnchorElement>(
      `${gallerySelector} a.photo-swipe-image`
    );

    const handleClick = async (e: MouseEvent, index: number) => {
      e.preventDefault();
      if (!isMounted) return;

      if (lightboxRef.current) {
        lightboxRef.current.destroy();
        lightboxRef.current = null;
      }

      const dataSource = await Promise.all(
        images.map(async (image) => {
          const img = new window.Image();
          img.src = image.src;
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
          });
          return {
            src: image.src,
            w: img.naturalWidth,
            h: img.naturalHeight,
            alt: image.alt,
            title: image.title || "",
          };
        })
      );

      if (!isMounted) return;

      const lightbox = new PhotoSwipe({
        dataSource: dataSource,
        index: index,
      });

      lightbox.on("uiRegister", function () {
        if (!lightbox.ui) return;
        lightbox.ui.registerElement({
          name: "custom-caption",
          order: 9,
          isButton: false,
          appendTo: "root",
          onInit: (el, pswp) => {
            el.classList.add(
              "bg-black/50",
              "text-white",
              "text-base",
              "p-4",
              "text-center",
              "absolute",
              "bottom-0",
              "w-full"
            );
            pswp.on("change", () => {
              const currSlide = pswp.currSlide;
              let captionHTML = "";
              if (currSlide && currSlide.data.title) {
                captionHTML = currSlide.data.title;
              }
              el.innerHTML = captionHTML;
            });
          },
        });
      });

      lightboxRef.current = lightbox;
      lightboxRef.current.init();
    };

    const clickListeners = new Map<
      HTMLAnchorElement,
      (e: MouseEvent) => void
    >();

    imageLinks.forEach((link, index) => {
      const listener = (e: MouseEvent) => handleClick(e, index);
      clickListeners.set(link, listener);
      link.addEventListener("click", listener);
    });

    return () => {
      isMounted = false;
      clickListeners.forEach((listener, link) => {
        link.removeEventListener("click", listener);
      });
      if (lightboxRef.current) {
        lightboxRef.current.destroy();
        lightboxRef.current = null;
      }
    };
  }, [images, galleryID]);

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div
        className="photo-swipe-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        data-gallery-id={galleryID}
      >
        {images.map((image, index) => (
          <a
            href={image.src}
            key={`${galleryID}-${index}`}
            className="photo-swipe-image block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 group cursor-pointer"
          >
            <div className="aspect-[3/4] relative bg-gray-100">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-200"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 4}
              />
            </div>
            {image.title && (
              <div className="p-3">
                <h3 className="text-sm font-medium text-gray-900 truncate">
                  {image.title}
                </h3>
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
