import { MainWrapper } from "@/components/layouts"
import { use } from "react"

interface VideoDetailComponentProps {
  params: Promise<{ videoId: string }>
}

// Create a delay function that returns a promise
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Create a promise that resolves after 30 seconds
const delayPromise = delay(30000)

const VideoDetailComponent = ({ params }: VideoDetailComponentProps) => {
  const { videoId } = use(params)
  
  // Use the delay promise to show PageLoader for 30 seconds
  use(delayPromise)
  
  // Mock video data for testing
  const mockVideoData = {
    id: videoId,
    title: "How to Build a Modern Web Application with Next.js",
    description: "In this comprehensive tutorial, we'll walk through the process of building a modern web application using Next.js, React, and Tailwind CSS. Perfect for beginners and intermediate developers looking to enhance their skills.",
    thumbnail: "/assets/images/video-thumbnail.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "15:42",
    views: 12534,
    createdAt: "2024-10-15",
    author: {
      name: "John Developer",
      avatar: "/assets/images/avatar.jpg",
      email: "john@example.com"
    },
    tags: ["Next.js", "React", "Web Development", "Tutorial"],
    isPublic: true,
    transcript: [
      { timestamp: "00:00", text: "Welcome to this comprehensive Next.js tutorial!" },
      { timestamp: "00:30", text: "First, let's set up our development environment." },
      { timestamp: "01:15", text: "Now we'll create our first component..." },
      { timestamp: "02:45", text: "Let's add some styling with Tailwind CSS." },
      { timestamp: "05:20", text: "Time to implement the routing system." }
    ]
  }

  return (
    <MainWrapper>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Video Player Section */}
        <div className="mb-8">
          <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={mockVideoData.videoUrl}
              title={mockVideoData.title}
              className="w-full h-full"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>

        {/* Video Info Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Title and Metadata */}
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {mockVideoData.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                  {mockVideoData.views.toLocaleString()} views
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  {mockVideoData.duration}
                </span>
                <span>
                  {new Date(mockVideoData.createdAt).toLocaleDateString()}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  mockVideoData.isPublic 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {mockVideoData.isPublic ? 'Public' : 'Private'}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  {mockVideoData.author.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {mockVideoData.author.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {mockVideoData.author.email}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {mockVideoData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Description
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {mockVideoData.description}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
                </svg>
                Share
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
                Download
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
                </svg>
                Delete
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Video Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Video Statistics
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Total Views:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {mockVideoData.views.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {mockVideoData.duration}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Uploaded:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {new Date(mockVideoData.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Status:</span>
                  <span className={`font-semibold ${
                    mockVideoData.isPublic ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {mockVideoData.isPublic ? 'Public' : 'Private'}
                  </span>
                </div>
              </div>
            </div>

            {/* Transcript */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Transcript
              </h3>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {mockVideoData.transcript.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="text-sm font-mono text-blue-600 dark:text-blue-400 flex-shrink-0">
                      {item.timestamp}
                    </span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Test Actions */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 border border-yellow-200 dark:border-yellow-800">
              <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-4">
                🧪 Test Mode
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-yellow-700 dark:text-yellow-300">
                  <strong>Video ID:</strong> {videoId}
                </p>
                <p className="text-yellow-700 dark:text-yellow-300">
                  <strong>Route:</strong> /video/{videoId}
                </p>
                <p className="text-yellow-700 dark:text-yellow-300">
                  <strong>Status:</strong> Test data loaded successfully ✅
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  )
}

export default VideoDetailComponent