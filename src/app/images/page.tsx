"use client";

import PhotoSwipeGallery from "@/components/PhotoSwipeGallery";
import { content } from "@/lib/content";

export default function ImagesPage() {
  return (
    <div className="min-h-screen bg-[--color-background] text-[--color-foreground]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[--color-foreground]">
            Images
          </h1>
        </div>
        {/* Headshots: keep grid layout (non-masonry) */}
        <PhotoSwipeGallery
          images={content.images.headshots}
          title="Headshots"
          galleryID="headshots-gallery"
          // hint to gallery to use grid mode
        />
        {/* Production stills: use masonry layout */}
        <PhotoSwipeGallery
          images={content.images.productionImages}
          title="Production stills"
          galleryID="production-images-gallery"
          layout="masonry"
        />
      </div>
    </div>
  );
}
