import VideoGrid from './VideoGrid';

interface Video {
  take: number;
  label: string;
  youtubeId: string;
  description: string;
}

interface Scene {
  id: string;
  month: string;
  year: number;
  title: string;
  description: string;
  videos: Video[];
  whyThisScene: string;
  technicalExploration: string;
  isPlaceholder?: boolean;
}

interface MonthlySceneCardProps {
  scene: Scene;
}

const MonthlySceneCard = ({ scene }: MonthlySceneCardProps) => {
  return (
    <div className="card p-8 mb-8">
      {/* Month Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 mb-4">
          <span className="text-xl font-bold text-purple-600 dark:text-purple-400">
            {scene.month.slice(0, 3)}
          </span>
        </div>
        <h2 className="text-2xl font-bold text-[--color-foreground] mb-2">
          {scene.month} {scene.year}
        </h2>
        <h3 className="text-xl text-[--color-muted] mb-4">
          {scene.title}
        </h3>
        <p className="text-[--color-foreground] max-w-3xl mx-auto leading-relaxed">
          {scene.description}
        </p>
      </div>

      {/* Video Grid */}
      <VideoGrid 
        videos={scene.videos} 
        isPlaceholder={scene.isPlaceholder}
        month={`${scene.month} ${scene.year}`}
      />

      {/* Additional Content */}
      {(scene.whyThisScene || scene.technicalExploration) && !scene.isPlaceholder && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {scene.whyThisScene && (
            <div className="card p-6 bg-[--color-background]">
              <h4 className="font-bold text-[--color-foreground] mb-3">
                Why this scene
              </h4>
              <p className="text-[--color-muted] text-sm leading-relaxed whitespace-pre-line">
                {scene.whyThisScene}
              </p>
            </div>
          )}

          {scene.technicalExploration && (
            <div className="card p-6 bg-[--color-background]">
              <h4 className="font-bold text-[--color-foreground] mb-3">
                Technical exploration
              </h4>
              <p className="text-[--color-muted] text-sm leading-relaxed whitespace-pre-line">
                {scene.technicalExploration}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MonthlySceneCard;