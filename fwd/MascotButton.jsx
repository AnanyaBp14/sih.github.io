import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Lightbulb, Phone, Shield } from 'lucide-react'

const MascotButton = () => {
  const [showChat, setShowChat] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! I'm Safety Fox 🦊 Your safety learning companion!",
      isBot: true,
      timestamp: new Date()
    },
    {
      id: 2,
      text: "How can I help you stay safe today?",
      isBot: true,
      timestamp: new Date()
    }
  ])

  const quickActions = [
    {
      icon: Phone,
      label: "Emergency Contacts",
      action: () => window.location.hash = '#help'
    },
    {
      icon: Shield,
      label: "Safety Tips",
      action: () => window.location.hash = '#lessons'
    },
    {
      icon: Lightbulb,
      label: "Quick Quiz",
      action: () => alert("🎯 Pop Quiz: What should you do during an earthquake?\nA) Run outside\nB) Hide under a desk\nC) Stay in doorway\n\nAnswer: B) Drop, Cover, and Hold On under a sturdy desk!")
    }
  ]

  const safetyTips = [
    "🔥 Remember: Stop, Drop, and Roll for fire safety!",
    "🌊 During floods, never walk or drive through moving water!",
    "⚡ In storms, stay away from windows and avoid tall objects!",
    "🏠 Have a family emergency plan and practice it regularly!",
    "📱 Keep emergency contacts easily accessible on your phone!"
  ]

  const handleQuickAction = (action) => {
    action()
    setShowChat(false)
  }

  const sendRandomTip = () => {
    const randomTip = safetyTips[Math.floor(Math.random() * safetyTips.length)]
    const newMessage = {
      id: messages.length + 1,
      text: randomTip,
      isBot: true,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }

  return (
    <>
      {/* Floating Mascot Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-orange-500 to-pink-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowChat(!showChat)}
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="relative">
          {showChat ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="text-2xl">🦊</div>
          )}
          
          {/* Notification Badge */}
          <motion.div
            className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 3 }}
          >
            !
          </motion.div>
        </div>
      </motion.button>

      {/* Chat Interface */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-40 w-80 max-w-[calc(100vw-3rem)]"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg">
                    🦊
                  </div>
                  <div>
                    <h3 className="font-bold">Safety Fox</h3>
                    <p className="text-xs opacity-90">Your Safety Assistant</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-4 h-64 overflow-y-auto space-y-3">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        message.isBot
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-blue-500 text-white'
                      }`}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="p-4 border-t bg-gray-50">
                <p className="text-xs text-gray-600 mb-3 font-medium">Quick Actions:</p>
                <div className="grid grid-cols-1 gap-2">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickAction(action.action)}
                      className="flex items-center gap-3 p-2 bg-white hover:bg-gray-100 rounded-lg transition-colors text-left text-sm border"
                    >
                      <action.icon className="w-4 h-4 text-gray-600" />
                      <span className="text-gray-700">{action.label}</span>
                    </button>
                  ))}
                  
                  <button
                    onClick={sendRandomTip}
                    className="flex items-center gap-3 p-2 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 rounded-lg transition-colors text-left text-sm text-white"
                  >
                    <Lightbulb className="w-4 h-4" />
                    <span>Get Safety Tip!</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MascotButton