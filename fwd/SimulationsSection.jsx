import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Gamepad2, 
  Play, 
  Trophy, 
  Clock, 
  Users, 
  Target,
  CheckCircle,
  Star,
  Zap,
  RotateCcw,
  Award,
  TrendingUp,
  Timer,
  MapPin
} from 'lucide-react'

const SimulationsSection = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [completedDrills, setCompletedDrills] = useState(new Set([1, 3, 5]))

  const difficulties = [
    { id: 'all', label: 'All Levels', color: 'bg-blue-500' },
    { id: 'beginner', label: 'Beginner', color: 'bg-green-500' },
    { id: 'intermediate', label: 'Intermediate', color: 'bg-yellow-500' },
    { id: 'advanced', label: 'Advanced', color: 'bg-red-500' },
    { id: 'expert', label: 'Expert', color: 'bg-purple-500' }
  ]

  const simulations = [
    {
      id: 1,
      title: "Earthquake Drill Simulation",
      description: "Practice the Drop, Cover, and Hold On technique in a virtual classroom",
      type: "Natural Disaster",
      difficulty: "beginner",
      duration: "5-10 min",
      players: "1-30",
      points: 100,
      icon: "🏫",
      scenario: "School Classroom",
      objectives: ["React quickly to earthquake alert", "Find safe cover", "Maintain position until all-clear"],
      features: ["3D Environment", "Real-time feedback", "Performance scoring"],
      isPopular: true,
      completionRate: 89
    },
    {
      id: 2,
      title: "Fire Evacuation Challenge",
      description: "Navigate through a building with multiple fire exit routes",
      type: "Fire Safety",
      difficulty: "intermediate",
      duration: "8-15 min",
      players: "1-20",
      points: 150,
      icon: "🔥",
      scenario: "Office Building",
      objectives: ["Identify fire hazards", "Choose optimal exit route", "Help others evacuate safely"],
      features: ["Multiple scenarios", "Team coordination", "Smoke simulation"],
      isTrending: true,
      completionRate: 76
    },
    {
      id: 3,
      title: "Flood Response Training",
      description: "Learn flood safety procedures and evacuation protocols",
      type: "Natural Disaster",
      difficulty: "beginner",
      duration: "6-12 min",
      players: "1-25",
      points: 120,
      icon: "🌊",
      scenario: "Residential Area",
      objectives: ["Recognize flood warnings", "Pack emergency supplies", "Navigate to higher ground"],
      features: ["Weather simulation", "Resource management", "Time pressure"],
      isNew: true,
      completionRate: 82
    },
    {
      id: 4,
      title: "CPR Emergency Response",
      description: "Virtual CPR training with realistic scenarios and feedback",
      type: "First Aid",
      difficulty: "intermediate",
      duration: "10-20 min",
      players: "1-15",
      points: 200,
      icon: "🩺",
      scenario: "Various Locations",
      objectives: ["Assess victim condition", "Perform proper CPR technique", "Call for emergency help"],
      features: ["Motion tracking", "Technique analysis", "Medical accuracy"],
      completionRate: 71
    },
    {
      id: 5,
      title: "Pandemic Protocol Simulator",
      description: "Practice health safety measures during a pandemic scenario",
      type: "Health Safety",
      difficulty: "beginner",
      duration: "7-14 min",
      players: "1-40",
      points: 110,
      icon: "🦠",
      scenario: "School Campus",
      objectives: ["Follow hygiene protocols", "Maintain social distance", "Handle contaminated areas"],
      features: ["Hygiene tracking", "Social interaction", "Protocol compliance"],
      completionRate: 85
    },
    {
      id: 6,
      title: "Severe Weather Response",
      description: "Multi-scenario training for various severe weather events",
      type: "Natural Disaster",
      difficulty: "advanced",
      duration: "15-25 min",
      players: "1-20",
      points: 250,
      icon: "⛈️",
      scenario: "Community Center",
      objectives: ["Monitor weather alerts", "Coordinate shelter response", "Manage emergency resources"],
      features: ["Dynamic weather", "Leadership roles", "Community coordination"],
      completionRate: 63
    },
    {
      id: 7,
      title: "Chemical Spill Response",
      description: "Handle hazardous material incidents safely and effectively",
      type: "Hazmat Safety",
      difficulty: "expert",
      duration: "20-30 min",
      players: "1-10",
      points: 300,
      icon: "☢️",
      scenario: "Laboratory",
      objectives: ["Identify chemical hazards", "Implement containment", "Coordinate evacuation"],
      features: ["Chemical database", "Safety equipment", "Expert consultation"],
      completionRate: 45
    },
    {
      id: 8,
      title: "Active Shooter Drill",
      description: "Critical safety training for active threat situations",
      type: "Security",
      difficulty: "advanced",
      duration: "12-18 min",
      players: "1-50",
      points: 220,
      icon: "🚨",
      scenario: "Educational Campus",
      objectives: ["Recognize threat indicators", "Execute Run-Hide-Fight", "Coordinate with authorities"],
      features: ["Realistic scenarios", "Decision making", "Stress simulation"],
      completionRate: 58
    }
  ]

  const filteredSimulations = selectedDifficulty === 'all' 
    ? simulations 
    : simulations.filter(sim => sim.difficulty === selectedDifficulty)

  const startSimulation = (simId) => {
    alert(`🎮 Starting simulation ${simId}! In a real app, this would launch the interactive 3D simulation environment.`)
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600 bg-green-100'
      case 'intermediate': return 'text-yellow-600 bg-yellow-100'
      case 'advanced': return 'text-red-600 bg-red-100'
      case 'expert': return 'text-purple-600 bg-purple-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getCompletionColor = (rate) => {
    if (rate >= 80) return 'text-green-600'
    if (rate >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const totalCompleted = completedDrills.size
  const totalPoints = simulations.filter(s => completedDrills.has(s.id)).reduce((sum, s) => sum + s.points, 0)

  return (
    <div className="space-y-8">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Drills Completed</p>
              <p className="text-2xl font-bold">{totalCompleted}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-200" />
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Points Earned</p>
              <p className="text-2xl font-bold">{totalPoints}</p>
            </div>
            <Zap className="w-8 h-8 text-blue-200" />
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
              <p className="text-purple-100 text-sm">Best Score</p>
              <p className="text-2xl font-bold">95%</p>
            </div>
            <Trophy className="w-8 h-8 text-purple-200" />
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
              <p className="text-orange-100 text-sm">Practice Time</p>
              <p className="text-2xl font-bold">3.2 hrs</p>
            </div>
            <Timer className="w-8 h-8 text-orange-200" />
          </div>
        </motion.div>
      </div>

      {/* Difficulty Filter */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Difficulty Levels</h2>
        <div className="flex flex-wrap gap-3">
          {difficulties.map((difficulty, index) => (
            <motion.button
              key={difficulty.id}
              onClick={() => setSelectedDifficulty(difficulty.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                selectedDifficulty === difficulty.id
                  ? `${difficulty.color} text-white shadow-lg scale-105`
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: selectedDifficulty === difficulty.id ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Target className="w-4 h-4" />
              <span className="font-medium">{difficulty.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Simulations Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">
            {selectedDifficulty === 'all' ? 'All Simulations' : `${selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)} Level`}
          </h2>
          <p className="text-gray-600">
            {filteredSimulations.length} simulation{filteredSimulations.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSimulations.map((simulation, index) => (
            <motion.div
              key={simulation.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Simulation Header */}
              <div className="relative bg-gradient-to-br from-blue-400 to-purple-500 text-white p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{simulation.icon}</div>
                  <div className="flex gap-1">
                    {completedDrills.has(simulation.id) && (
                      <div className="bg-green-500 text-white p-1 rounded-full">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                    )}
                    {simulation.isPopular && (
                      <span className="bg-red-500 text-white px-2 py-1 text-xs rounded-full font-medium">
                        Popular
                      </span>
                    )}
                    {simulation.isTrending && (
                      <span className="bg-orange-500 text-white px-2 py-1 text-xs rounded-full font-medium flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Hot
                      </span>
                    )}
                    {simulation.isNew && (
                      <span className="bg-blue-500 text-white px-2 py-1 text-xs rounded-full font-medium">
                        New
                      </span>
                    )}
                  </div>
                </div>
                
                <h3 className="font-bold text-lg mb-2">{simulation.title}</h3>
                <p className="text-blue-100 text-sm">{simulation.description}</p>
              </div>

              {/* Simulation Details */}
              <div className="p-6">
                {/* Metadata */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${getDifficultyColor(simulation.difficulty)}`}>
                    {simulation.difficulty.charAt(0).toUpperCase() + simulation.difficulty.slice(1)}
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded-full font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {simulation.duration}
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 text-xs rounded-full font-medium flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {simulation.players}
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 text-xs rounded-full font-medium flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {simulation.points} pts
                  </span>
                </div>

                {/* Scenario */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="font-medium text-gray-700">Scenario: {simulation.scenario}</span>
                  </div>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded font-medium">
                    {simulation.type}
                  </span>
                </div>

                {/* Objectives */}
                <div className="mb-4">
                  <p className="font-medium text-gray-700 mb-2">Learning Objectives:</p>
                  <ul className="space-y-1">
                    {simulation.objectives.slice(0, 2).map((objective, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                        {objective}
                      </li>
                    ))}
                    {simulation.objectives.length > 2 && (
                      <li className="text-xs text-gray-500">
                        +{simulation.objectives.length - 2} more objectives
                      </li>
                    )}
                  </ul>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <p className="font-medium text-gray-700 mb-2">Features:</p>
                  <div className="flex flex-wrap gap-1">
                    {simulation.features.map((feature, idx) => (
                      <span key={idx} className="bg-indigo-50 text-indigo-700 px-2 py-1 text-xs rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Completion Rate */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Success Rate</span>
                    <span className={`text-sm font-bold ${getCompletionColor(simulation.completionRate)}`}>
                      {simulation.completionRate}%
                    </span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        simulation.completionRate >= 80 ? 'bg-green-500' :
                        simulation.completionRate >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${simulation.completionRate}%` }}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => startSimulation(simulation.id)}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    {completedDrills.has(simulation.id) ? 'Practice Again' : 'Start Drill'}
                  </button>
                  
                  {completedDrills.has(simulation.id) && (
                    <button className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Leaderboard Section */}
      <motion.div
        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
            🏆
          </div>
          <div>
            <h3 className="text-xl font-bold">Weekly Leaderboard</h3>
            <p className="text-indigo-100">Top performers in simulation drills</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">🥇</div>
            <h4 className="font-semibold">Alex Chen</h4>
            <p className="text-sm text-indigo-100">2,850 points</p>
            <p className="text-xs text-indigo-200">15 drills completed</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">🥈</div>
            <h4 className="font-semibold">Maria Rodriguez</h4>
            <p className="text-sm text-indigo-100">2,720 points</p>
            <p className="text-xs text-indigo-200">14 drills completed</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">🥉</div>
            <h4 className="font-semibold">David Park</h4>
            <p className="text-sm text-indigo-100">2,590 points</p>
            <p className="text-xs text-indigo-200">13 drills completed</p>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-indigo-100 mb-2">Your current rank: <span className="font-bold text-white">#7</span></p>
          <p className="text-sm text-indigo-200">Keep practicing to climb the leaderboard! 🚀</p>
        </div>
      </motion.div>
    </div>
  )
}

export default SimulationsSection