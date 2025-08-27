'use client';

import { trackTripleTakeEvent } from '@/components/AnalyticsTracker';

interface Video {
  take: number;
  label: string;
  youtubeId: string;
  description: string;
}

interface VideoGridProps {
  videos: Video[];
  isPlaceholder?: boolean;
  month?: string;
}

const VideoGrid = ({ videos, isPlaceholder = false, month }: VideoGridProps) => {
  const colors = [
    "text-purple-600 dark:text-purple-400",
    "text-blue-600 dark:text-blue-400", 
    "text-[--color-accent]"
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {videos.map((video, index) => (
        <div key={video.take} className="card p-4">
          <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 relative overflow-hidden">
            {!isPlaceholder && video.youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.label}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => {
                  if (month) {
                    // Track when iframe loads (proxy for video view)
                    trackTripleTakeEvent.videoPlay(month, video.take);
                  }
                }}
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎬</div>
                  <p className="text-sm text-[--color-muted]">
                    {isPlaceholder ? "Coming Soon" : "Video Loading..."}
                  </p>
                </div>
              </div>
            )}
          </div>
          
          <div className="text-center">
            <h4 className={`font-bold text-lg mb-1 ${colors[index] || colors[0]}`}>
              {video.label}
            </h4>
            {video.description && (
              <p className="text-sm text-[--color-muted]">
                {video.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;