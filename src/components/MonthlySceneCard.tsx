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
  isFinal?: boolean;
}

interface MonthlySceneCardProps {
  scene: Scene;
}

const MonthlySceneCard = ({ scene }: MonthlySceneCardProps) => {
  return (
    <div className={`card p-8 mb-8${scene.isFinal ? " ring-2 ring-purple-500/60 dark:ring-purple-400/50" : ""}`}>
      {/* Finale Banner */}
      {scene.isFinal && (
        <div className="mb-8 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-center text-white shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-100 mb-1">
            🎉 The Finale
          </p>
          <p className="text-lg md:text-xl font-bold">
            That&rsquo;s a wrap on the 12-month project
          </p>
          <p className="mt-1 text-sm text-purple-100">
            12 scenes · 36 takes · one year of character, contrast, and versatility on camera
          </p>
        </div>
      )}

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