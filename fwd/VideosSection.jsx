import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Play, 
  Clock, 
  Eye, 
  Star, 
  Filter,
  Search,
  Bookmark,
  Share2,
  ThumbsUp,
  Users,
  TrendingUp,
  PlayCircle
} from 'lucide-react'

const VideosSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [savedVideos, setSavedVideos] = useState(new Set([1, 3]))

  const categories = [
    { id: 'all', label: 'All Videos', color: 'bg-blue-500' },
    { id: 'fire', label: 'Fire Safety', color: 'bg-red-500' },
    { id: 'natural', label: 'Natural Disasters', color: 'bg-cyan-500' },
    { id: 'first-aid', label: 'First Aid', color: 'bg-green-500' },
    { id: 'pandemic', label: 'Health Safety', color: 'bg-purple-500' },
    { id: 'kids', label: 'For Kids', color: 'bg-orange-500' }
  ]

  const videos = [
    {
      id: 1,
      title: "Earthquake Safety: Drop, Cover, Hold On",
      description: "Learn the essential earthquake safety technique that can save your life",
      category: 'natural',
      duration: "5:32",
      views: "12.5K",
      rating: 4.9,
      thumbnail: "🏔️",
      instructor: "Dr. Sarah Chen",
      level: "Beginner",
      topics: ["Earthquake basics", "Safety positions", "After-earthquake actions"],
      isPopular: true
    },
    {
      id: 2,
      title: "Fire Safety for Children",
      description: "Fun and engaging fire safety lessons designed specifically for kids",
      category: 'kids',
      duration: "8:15",
      views: "25.3K",
      rating: 4.8,
      thumbnail: "🔥",
      instructor: "Safety Fox Team",
      level: "Kids",
      topics: ["Fire prevention", "Stop, drop, roll", "Emergency numbers"],
      isPopular: true
    },
    {
      id: 3,
      title: "CPR and Basic First Aid",
      description: "Essential life-saving skills everyone should know",
      category: 'first-aid',
      duration: "12:45",
      views: "45.7K",
      rating: 4.9,
      thumbnail: "🩹",
      instructor: "Dr. Michael Torres",
      level: "Intermediate",
      topics: ["CPR technique", "AED usage", "Choking response"],
      isTrending: true
    },
    {
      id: 4,
      title: "Flood Safety and Preparedness",
      description: "How to stay safe before, during, and after floods",
      category: 'natural',
      duration: "7:20",
      views: "18.9K",
      rating: 4.7,
      thumbnail: "🌊",
      instructor: "Emergency Response Team",
      level: "Beginner",
      topics: ["Flood warnings", "Evacuation routes", "Water safety"]
    },
    {
      id: 5,
      title: "Pandemic Safety Protocols",
      description: "Health and hygiene practices during health emergencies",
      category: 'pandemic',
      duration: "10:30",
      views: "32.1K",
      rating: 4.6,
      thumbnail: "🦠",
      instructor: "Dr. Lisa Park",
      level: "All Ages",
      topics: ["Hand hygiene", "Mask wearing", "Social distancing"]
    },
    {
      id: 6,
      title: "Home Fire Escape Planning",
      description: "Creating and practicing your family fire escape plan",
      category: 'fire',
      duration: "6:45",
      views: "22.4K",
      rating: 4.8,
      thumbnail: "🏠",
      instructor: "Fire Chief Johnson",
      level: "Family",
      topics: ["Escape routes", "Meeting points", "Practice drills"]
    },
    {
      id: 7,
      title: "Severe Weather Safety",
      description: "Staying safe during thunderstorms, tornadoes, and extreme weather",
      category: 'natural',
      duration: "9:15",
      views: "16.8K",
      rating: 4.7,
      thumbnail: "⛈️",
      instructor: "Weather Expert Team",
      level: "Intermediate",
      topics: ["Storm warnings", "Shelter locations", "Lightning safety"]
    },
    {
      id: 8,
      title: "Choking First Aid for All Ages",
      description: "How to help someone who is choking - adults, children, and infants",
      category: 'first-aid',
      duration: "8:50",
      views: "28.6K",
      rating: 4.9,
      thumbnail: "🫁",
      instructor: "Paramedic Training",
      level: "Essential",
      topics: ["Heimlich maneuver", "Infant techniques", "When to call 911"]
    }
  ]

  const filteredVideos = videos.filter(video => {
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const playVideo = (videoId) => {
    alert(`🎬 Playing video ${videoId}! In a real app, this would open the video player with interactive features.`)
  }

  const toggleSave = (videoId) => {
    setSavedVideos(prev => {
      const newSet = new Set(prev)
      if (newSet.has(videoId)) {
        newSet.delete(videoId)
      } else {
        newSet.add(videoId)
      }
      return newSet
    })
  }

  const getLevelColor = (level) => {
    switch (level) {
      case 'Kids': return 'text-orange-600 bg-orange-100'
      case 'Beginner': return 'text-green-600 bg-green-100'
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100'
      case 'Advanced': return 'text-red-600 bg-red-100'
      default: return 'text-blue-600 bg-blue-100'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header and Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Videos Watched</p>
              <p className="text-2xl font-bold">24</p>
            </div>
            <Eye className="w-8 h-8 text-purple-200" />
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Watch Time</p>
              <p className="text-2xl font-bold">4.2 hrs</p>
            </div>
            <Clock className="w-8 h-8 text-green-200" />
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Saved Videos</p>
              <p className="text-2xl font-bold">{savedVideos.size}</p>
            </div>
            <Bookmark className="w-8 h-8 text-orange-200" />
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-pink-100 text-sm">Avg. Rating</p>
              <p className="text-2xl font-bold">4.8</p>
            </div>
            <Star className="w-8 h-8 text-pink-200" />
          </div>
        </motion.div>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search videos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          {/* Filter Button */}
          <button className="flex items-center gap-2 px-4 py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? `${category.color} text-white shadow-lg`
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Videos Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">
            {selectedCategory === 'all' ? 'All Videos' : categories.find(c => c.id === selectedCategory)?.label}
          </h2>
          <p className="text-gray-600">
            {filteredVideos.length} video{filteredVideos.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Video Thumbnail */}
              <div className="relative bg-gradient-to-br from-blue-400 to-purple-500 h-40 flex items-center justify-center cursor-pointer group"
                   onClick={() => playVideo(video.id)}>
                <div className="text-6xl">{video.thumbnail}</div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/90 rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-6 h-6 text-gray-800" />
                  </div>
                </div>

                {/* Badges */}
                <div className="absolute top-2 left-2 flex gap-1">
                  {video.isPopular && (
                    <span className="bg-red-500 text-white px-2 py-1 text-xs rounded-full font-medium">
                      Popular
                    </span>
                  )}
                  {video.isTrending && (
                    <span className="bg-orange-500 text-white px-2 py-1 text-xs rounded-full font-medium flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Trending
                    </span>
                  )}
                </div>

                {/* Duration */}
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 text-xs rounded">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg text-gray-800 line-clamp-2 flex-1">
                    {video.title}
                  </h3>
                  <button
                    onClick={() => toggleSave(video.id)}
                    className={`ml-2 p-1 rounded-full transition-colors ${
                      savedVideos.has(video.id)
                        ? 'text-blue-500 bg-blue-100'
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{video.description}</p>

                {/* Video Metadata */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${getLevelColor(video.level)}`}>
                    {video.level}
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-full font-medium flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {video.views}
                  </span>
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 text-xs rounded-full font-medium flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {video.rating}
                  </span>
                </div>

                {/* Instructor */}
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{video.instructor}</span>
                </div>

                {/* Topics */}
                <div className="mb-4">
                  <p className="text-xs font-medium text-gray-700 mb-1">Topics covered:</p>
                  <div className="flex flex-wrap gap-1">
                    {video.topics.slice(0, 2).map((topic, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 text-xs rounded">
                        {topic}
                      </span>
                    ))}
                    {video.topics.length > 2 && (
                      <span className="text-xs text-gray-500">
                        +{video.topics.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => playVideo(video.id)}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <PlayCircle className="w-4 h-4" />
                    Watch Now
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Playlist */}
      <motion.div
        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
            🎬
          </div>
          <div>
            <h3 className="text-xl font-bold">Featured Learning Series</h3>
            <p className="text-indigo-100">Complete safety education program</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-semibold mb-2">🚨 Emergency Basics (5 videos)</h4>
            <p className="text-sm text-indigo-100">Foundation knowledge for emergency preparedness</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-semibold mb-2">👨‍👩‍👧‍👦 Family Safety (7 videos)</h4>
            <p className="text-sm text-indigo-100">Keeping your whole family safe and prepared</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-semibold mb-2">🏫 School Safety (4 videos)</h4>
            <p className="text-sm text-indigo-100">Safety protocols for educational environments</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default VideosSection