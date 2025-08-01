"use client";

import PhotoSwipeGallery from "@/components/PhotoSwipeGallery";
import { content } from "@/lib/content";

export default function ImagesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Images</h1>
        </div>
        <PhotoSwipeGallery
          images={content.images.headshots}
          title="Headshots"
          galleryID="headshots-gallery"
        />
        <PhotoSwipeGallery
          images={content.images.productionImages}
          title="Production images"
          galleryID="production-images-gallery"
        />
      </div>
    </div>
  );
}
