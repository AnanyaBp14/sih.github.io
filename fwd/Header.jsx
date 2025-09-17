import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Menu, X, Trophy, Star, Zap } from 'lucide-react'

const Header = ({ userStats, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">SafeSchools 🚨</h1>
              <p className="text-xs text-blue-100 hidden sm:block">
                Disaster Preparedness & Response Education
              </p>
            </div>
          </motion.div>

          {/* Center Motto - Desktop */}
          <div className="hidden md:block text-center">
            <motion.p 
              className="text-lg font-bold text-white"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Be Prepared, Stay Safe! ⚡
            </motion.p>
          </div>

          {/* User Stats & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Desktop Stats */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                <Trophy className="w-4 h-4 text-yellow-300" />
                <span className="font-medium">Level {userStats.level}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                <Zap className="w-4 h-4 text-yellow-300" />
                <span className="font-medium">{userStats.points}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                <Star className="w-4 h-4 text-yellow-300" />
                <span className="font-medium">{userStats.badges}</span>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header