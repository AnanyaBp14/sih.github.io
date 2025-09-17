import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Play, 
  CheckCircle, 
  Clock, 
  Star, 
  Trophy, 
  ArrowRight,
  Flame,
  Waves,
  Zap,
  Shield,
  Users,
  Target
} from 'lucide-react'

const StudySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [completedLessons, setCompletedLessons] = useState(new Set([1, 3, 5]))

  const categories = [
    { id: 'all', label: 'All Lessons', icon: BookOpen, color: 'bg-blue-500' },
    { id: 'fire', label: 'Fire Safety', icon: Flame, color: 'bg-red-500' },
    { id: 'natural', label: 'Natural Disasters', icon: Waves, color: 'bg-cyan-500' },
    { id: 'emergency', label: 'Emergency Prep', icon: Shield, color: 'bg-green-500' },
    { id: 'pandemic', label: 'Health Safety', icon: Users, color: 'bg-purple-500' }
  ]

  const lessons = [
    {
      id: 1,
      title: "Earthquake Safety Basics",
      description: "Learn the Drop, Cover, and Hold On technique",
      category: 'natural',
      duration: "15 min",
      difficulty: "Beginner",
      points: 50,
      icon: "🏔️",
      topics: ["Drop technique", "Finding safe spots", "After earthquake safety"],
      completed: true
    },
    {
      id: 2,
      title: "Fire Evacuation Plan",
      description: "How to safely exit during a fire emergency",
      category: 'fire',
      duration: "20 min",
      difficulty: "Beginner",
      points: 75,
      icon: "🔥",
      topics: ["Exit routes", "Smoke safety", "Meeting points"],
      completed: false
    },
    {
      id: 3,
      title: "Flood Safety Measures",
      description: "Understanding flood risks and safety procedures",
      category: 'natural',
      duration: "18 min",
      difficulty: "Intermediate",
      points: 60,
      icon: "🌊",
      topics: ["Flood warnings", "Safe locations", "Emergency supplies"],
      completed: true
    },
    {
      id: 4,
      title: "Home Emergency Kit",
      description: "Building and maintaining your emergency supplies",
      category: 'emergency',
      duration: "25 min",
      difficulty: "Beginner",
      points: 80,
      icon: "🎒",
      topics: ["Essential supplies", "Food & water", "Communication tools"],
      completed: false
    },
    {
      id: 5,
      title: "Pandemic Safety Protocols",
      description: "Health and hygiene during health emergencies",
      category: 'pandemic',
      duration: "22 min",
      difficulty: "Intermediate",
      points: 70,
      icon: "🦠",
      topics: ["Hygiene practices", "Social distancing", "Mental health"],
      completed: true
    },
    {
      id: 6,
      title: "Severe Weather Safety",
      description: "Staying safe during storms and extreme weather",
      category: 'natural',
      duration: "20 min",
      difficulty: "Intermediate",
      points: 65,
      icon: "⛈️",
      topics: ["Storm warnings", "Safe shelter", "Lightning safety"],
      completed: false
    },
    {
      id: 7,
      title: "Workplace Emergency Procedures",
      description: "Safety protocols for schools and workplaces",
      category: 'emergency',
      duration: "30 min",
      difficulty: "Advanced",
      points: 100,
      icon: "🏢",
      topics: ["Evacuation procedures", "Emergency roles", "Communication"],
      completed: false
    },
    {
      id: 8,
      title: "First Aid Fundamentals",
      description: "Basic first aid skills everyone should know",
      category: 'emergency',
      duration: "35 min",
      difficulty: "Intermediate",
      points: 90,
      icon: "🩹",
      topics: ["CPR basics", "Wound care", "Emergency calls"],
      completed: false
    }
  ]

  const filteredLessons = selectedCategory === 'all' 
    ? lessons 
    : lessons.filter(lesson => lesson.category === selectedCategory)

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100'
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100'
      case 'Advanced': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const startLesson = (lessonId) => {
    // Simulate starting a lesson
    alert(`🎯 Starting lesson ${lessonId}! In a real app, this would open the interactive lesson content.`)
  }

  const totalCompleted = completedLessons.size
  const totalLessons = lessons.length
  const progressPercentage = (totalCompleted / totalLessons) * 100

  return (
    <div className="space-y-8">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Progress</p>
              <p className="text-2xl font-bold">{totalCompleted}/{totalLessons}</p>
            </div>
            <Target className="w-8 h-8 text-blue-200" />
          </div>
          <div className="mt-3 bg-blue-400 rounded-full h-2">
            <div 
              className="bg-white rounded-full h-2 transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
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
              <p className="text-green-100 text-sm">Points Earned</p>
              <p className="text-2xl font-bold">
                {lessons.filter(l => completedLessons.has(l.id)).reduce((sum, l) => sum + l.points, 0)}
              </p>
            </div>
            <Star className="w-8 h-8 text-green-200" />
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Study Time</p>
              <p className="text-2xl font-bold">2.5 hrs</p>
            </div>
            <Clock className="w-8 h-8 text-purple-200" />
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Streak</p>
              <p className="text-2xl font-bold">7 days</p>
            </div>
            <Trophy className="w-8 h-8 text-orange-200" />
          </div>
        </motion.div>
      </div>

      {/* Category Filter */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Learning Categories</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                selectedCategory === category.id
                  ? `${category.color} text-white shadow-lg scale-105`
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: selectedCategory === category.id ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <category.icon className="w-4 h-4" />
              <span className="font-medium">{category.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">
            {selectedCategory === 'all' ? 'All Lessons' : categories.find(c => c.id === selectedCategory)?.label}
          </h2>
          <p className="text-gray-600">
            {filteredLessons.length} lesson{filteredLessons.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Lesson Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{lesson.icon}</div>
                  {completedLessons.has(lesson.id) && (
                    <div className="bg-green-100 text-green-800 p-1 rounded-full">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                  )}
                </div>
                
                <h3 className="font-bold text-lg text-gray-800 mb-2">{lesson.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{lesson.description}</p>

                {/* Lesson Metadata */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${getDifficultyColor(lesson.difficulty)}`}>
                    {lesson.difficulty}
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded-full font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {lesson.duration}
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 text-xs rounded-full font-medium flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {lesson.points} pts
                  </span>
                </div>

                {/* Topics */}
                <div className="space-y-2">
                  <p className="text-xs font-medium text-gray-700">What you'll learn:</p>
                  <ul className="space-y-1">
                    {lesson.topics.map((topic, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                        <div className="w-1 h-1 bg-gray-400 rounded-full" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6">
                <button
                  onClick={() => startLesson(lesson.id)}
                  disabled={completedLessons.has(lesson.id)}
                  className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
                    completedLessons.has(lesson.id)
                      ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  {completedLessons.has(lesson.id) ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Completed
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      Start Lesson
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Learning Path Suggestion */}
      <motion.div
        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
            🎯
          </div>
          <div>
            <h3 className="text-xl font-bold">Recommended Learning Path</h3>
            <p className="text-indigo-100">Continue your safety education journey</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-semibold mb-2">🏠 Next: Home Safety</h4>
            <p className="text-sm text-indigo-100">Learn about creating a safe home environment</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-semibold mb-2">🚗 Then: Travel Safety</h4>
            <p className="text-sm text-indigo-100">Safety tips for transportation and travel</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-semibold mb-2">👥 Finally: Community Response</h4>
            <p className="text-sm text-indigo-100">How communities respond to emergencies</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default StudySection