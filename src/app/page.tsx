// Simplified homepage for debugging
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Timothy James
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Actor • Dad • Japanese Speaker • Tech Geek
          </p>
          <p className="text-gray-700 mb-8">
            Age range: 30-47 | Based: Melbourne | Available globally
          </p>
          <div className="space-y-4">
            <a href="/about" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors inline-block mr-4">
              About
            </a>
            <a href="/cv" className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-900 transition-colors inline-block">
              CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}