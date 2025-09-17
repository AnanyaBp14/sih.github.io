import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Heart, Github, ExternalLink } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <motion.div
              className="flex items-center justify-center md:justify-start gap-2 mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Shield className="w-6 h-6 text-yellow-300" />
              <span className="text-xl font-bold">SafeSchools 🚨</span>
            </motion.div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Empowering students, teachers, and families with interactive disaster preparedness education.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-3 text-yellow-300">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#lessons" className="block hover:text-yellow-300 transition-colors">
                📚 Safety Lessons
              </a>
              <a href="#videos" className="block hover:text-yellow-300 transition-colors">
                🎥 Educational Videos
              </a>
              <a href="#simulations" className="block hover:text-yellow-300 transition-colors">
                🎮 Emergency Drills
              </a>
              <a href="#help" className="block hover:text-yellow-300 transition-colors">
                🆘 Emergency Help
              </a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-3 text-yellow-300">Connect With Us</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center md:justify-end gap-2">
                <span>📧</span>
                <span>safety@safeschools.edu</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <span>📞</span>
                <span>1-800-SAFE-EDU</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-3 mt-4">
                <a 
                  href="https://github.com/ananyabp14/sih.github.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                  aria-label="View on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                  aria-label="External link"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Slogan */}
        <motion.div
          className="text-center py-6 border-t border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <Shield className="w-6 h-6 text-yellow-300" />
            <span className="text-2xl font-bold">Be Prepared, Stay Safe!</span>
            <span className="text-2xl">⚡</span>
          </div>
          <p className="text-blue-100 text-sm">
            Making Safety Learning Fun and Interactive
          </p>
        </motion.div>

        {/* Copyright */}
        <div className="text-center pt-4 border-t border-white/20">
          <div className="flex items-center justify-center gap-2 text-xs text-blue-100">
            <span>© {currentYear} SafeSchools Platform</span>
            <Heart className="w-3 h-3 text-red-300" />
            <span>Built for Hackathon SIH 2024</span>
          </div>
          <p className="text-xs text-blue-200 mt-1">
            Disaster Preparedness & Response Education • Powered by React + Vite
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer