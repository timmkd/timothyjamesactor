import { content, Video } from "@/lib/content";

const VideoCard = ({ video }: { video: Video }) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
    <div className="aspect-video relative">
      <iframe
        src={`${video.embedUrl}?h=360&w=640&autoplay=0&title=0&byline=0&portrait=0`}
        className="w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title={video.title}
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {video.title}
      </h3>
      <p className="text-gray-600">{video.description}</p>
    </div>
  </div>
);

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Videos & showreels
          </h1>
        </div>

        {/* Showreels Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Showreel</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.videos.showreels.map((showreel) => (
              <VideoCard key={showreel.id} video={showreel} />
            ))}
          </div>
        </div>

        {/* Reels Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Short character reels & scenes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.videos.reels.map((reel) => (
              <VideoCard key={reel.id} video={reel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
