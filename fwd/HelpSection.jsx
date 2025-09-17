import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  AlertTriangle,
  Shield,
  Users,
  Mail,
  ExternalLink,
  Search,
  ChevronRight,
  HelpCircle,
  FileText,
  Video,
  Headphones,
  Globe,
  Calendar
} from 'lucide-react'

const HelpSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('emergency')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'emergency', label: 'Emergency Contacts', icon: Phone, color: 'bg-red-500' },
    { id: 'support', label: 'Help & Support', icon: HelpCircle, color: 'bg-blue-500' },
    { id: 'resources', label: 'Resources', icon: FileText, color: 'bg-green-500' },
    { id: 'community', label: 'Community', icon: Users, color: 'bg-purple-500' }
  ]

  const emergencyContacts = [
    {
      id: 1,
      name: "Emergency Services",
      number: "911",
      description: "Fire, Police, Medical Emergency",
      icon: "🚨",
      availability: "24/7",
      type: "Emergency",
      priority: "critical"
    },
    {
      id: 2,
      name: "Fire Department",
      number: "911",
      description: "Fire emergencies and safety",
      icon: "🚒",
      availability: "24/7",
      type: "Fire",
      priority: "critical"
    },
    {
      id: 3,
      name: "Police Department",
      number: "911", 
      description: "Security and law enforcement",
      icon: "👮",
      availability: "24/7",
      type: "Security",
      priority: "critical"
    },
    {
      id: 4,
      name: "Ambulance/EMS",
      number: "911",
      description: "Medical emergencies",
      icon: "🚑",
      availability: "24/7",
      type: "Medical",
      priority: "critical"
    },
    {
      id: 5,
      name: "School Principal",
      number: "(555) 123-4567",
      description: "Lincoln Elementary School",
      icon: "🏫",
      availability: "7:30 AM - 4:00 PM",
      type: "School",
      priority: "high"
    },
    {
      id: 6,
      name: "School Nurse",
      number: "(555) 123-4568",
      description: "Health office and medical needs",
      icon: "🩺",
      availability: "8:00 AM - 3:30 PM",
      type: "Medical",
      priority: "high"
    },
    {
      id: 7,
      name: "Poison Control",
      number: "1-800-222-1222",
      description: "Poison emergencies and information",
      icon: "☢️",
      availability: "24/7",
      type: "Medical",
      priority: "high"
    },
    {
      id: 8,
      name: "Crisis Helpline",
      number: "988",
      description: "Mental health crisis support",
      icon: "🧠",
      availability: "24/7",
      type: "Mental Health",
      priority: "high"
    }
  ]

  const supportResources = [
    {
      id: 1,
      title: "How to Use SafeSchools",
      description: "Complete guide to navigating the platform",
      type: "Tutorial",
      icon: "📚",
      link: "#tutorial",
      time: "10 min read"
    },
    {
      id: 2,
      title: "Troubleshooting Guide",
      description: "Common issues and solutions",
      type: "Guide",
      icon: "🔧",
      link: "#troubleshooting",
      time: "5 min read"
    },
    {
      id: 3,
      title: "Safety Learning Tips",
      description: "How to get the most from your safety education",
      type: "Tips",
      icon: "💡",
      link: "#tips",
      time: "8 min read"
    },
    {
      id: 4,
      title: "Parent's Guide",
      description: "How parents can support their child's learning",
      type: "Parent Guide",
      icon: "👨‍👩‍👧‍👦",
      link: "#parents",
      time: "12 min read"
    },
    {
      id: 5,
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      type: "Video",
      icon: "🎥",
      link: "#videos",
      time: "Various"
    },
    {
      id: 6,
      title: "FAQ",
      description: "Frequently asked questions",
      type: "FAQ",
      icon: "❓",
      link: "#faq",
      time: "Quick answers"
    }
  ]

  const communityResources = [
    {
      id: 1,
      title: "Safety Discussion Forum",
      description: "Connect with other students and share experiences",
      icon: "💬",
      members: "2.3k",
      activity: "Very Active"
    },
    {
      id: 2,
      title: "Parent Community",
      description: "Parents sharing safety tips and experiences",
      icon: "👪",
      members: "1.8k",
      activity: "Active"
    },
    {
      id: 3,
      title: "Teacher Resources",
      description: "Educators sharing classroom safety strategies",
      icon: "👨‍🏫",
      members: "450",
      activity: "Moderate"
    },
    {
      id: 4,
      title: "Emergency Preparedness Group",
      description: "Community emergency planning and preparation",
      icon: "🎒",
      members: "890",
      activity: "Active"
    }
  ]

  const quickActions = [
    {
      title: "Report an Issue",
      description: "Report technical problems or content issues",
      icon: "⚠️",
      action: () => alert("Issue reporting form would open here")
    },
    {
      title: "Contact Support",
      description: "Get help from our support team",
      icon: "📞",
      action: () => alert("Support contact form would open here")
    },
    {
      title: "Schedule Training",
      description: "Book a safety training session",
      icon: "📅",
      action: () => alert("Training scheduler would open here")
    },
    {
      title: "Safety Assessment",
      description: "Take a safety knowledge assessment",
      icon: "📝",
      action: () => alert("Safety assessment would open here")
    }
  ]

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'border-red-500 bg-red-50'
      case 'high': return 'border-orange-500 bg-orange-50'
      case 'medium': return 'border-yellow-500 bg-yellow-50'
      default: return 'border-gray-300 bg-gray-50'
    }
  }

  const makeCall = (number) => {
    if (typeof window !== 'undefined' && window.location.protocol === 'tel:') {
      window.location.href = `tel:${number}`
    } else {
      alert(`📞 Calling ${number}\n\nIn a real app, this would initiate the phone call.`)
    }
  }

  return (
    <div className="space-y-8">
      {/* Quick Emergency Strip */}
      <motion.div
        className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 rounded-full p-2">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Emergency? Call 911 Immediately</h3>
              <p className="text-red-100 text-sm">For life-threatening emergencies, always call 911 first</p>
            </div>
          </div>
          <button
            onClick={() => makeCall('911')}
            className="bg-white text-red-600 px-6 py-2 rounded-lg font-bold hover:bg-red-50 transition-colors"
          >
            CALL 911
          </button>
        </div>
      </motion.div>

      {/* Category Tabs */}
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

      {/* Emergency Contacts */}
      {selectedCategory === 'emergency' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">Emergency Contacts</h2>
            <div className="text-sm text-gray-600">
              <Clock className="w-4 h-4 inline mr-1" />
              Always available when you need help
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {emergencyContacts.map((contact, index) => (
              <motion.div
                key={contact.id}
                className={`border-2 rounded-xl p-4 hover:shadow-lg transition-all duration-200 ${getPriorityColor(contact.priority)}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-3xl">{contact.icon}</div>
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                    contact.priority === 'critical' ? 'bg-red-100 text-red-800' :
                    contact.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {contact.type}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-gray-800 mb-1">{contact.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{contact.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="font-medium text-gray-700">{contact.number}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{contact.availability}</span>
                  </div>
                </div>

                <button
                  onClick={() => makeCall(contact.number)}
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                    contact.priority === 'critical' 
                      ? 'bg-red-500 hover:bg-red-600 text-white' 
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  Call Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Help & Support */}
      {selectedCategory === 'support' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">Help & Support</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search help topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {quickActions.map((action, index) => (
              <motion.button
                key={index}
                onClick={action.action}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg hover:border-blue-300 transition-all duration-200 text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <div className="text-2xl mb-2">{action.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{action.title}</h3>
                <p className="text-sm text-gray-600">{action.description}</p>
              </motion.button>
            ))}
          </div>

          {/* Support Resources */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Help Documentation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {supportResources.map((resource, index) => (
                <motion.a
                  key={resource.id}
                  href={resource.link}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg hover:border-blue-300 transition-all duration-200 block group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{resource.icon}</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded font-medium">
                          {resource.type}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-1">{resource.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {resource.time}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Resources */}
      {selectedCategory === 'resources' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Educational Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Resource Cards */}
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-8 h-8" />
                <h3 className="text-xl font-bold">Safety Handbooks</h3>
              </div>
              <p className="text-blue-100 mb-4">Comprehensive safety guides and manuals</p>
              <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                Download PDFs
              </button>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Video className="w-8 h-8" />
                <h3 className="text-xl font-bold">Video Library</h3>
              </div>
              <p className="text-purple-100 mb-4">Educational videos and training materials</p>
              <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                Browse Videos
              </button>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-8 h-8" />
                <h3 className="text-xl font-bold">External Links</h3>
              </div>
              <p className="text-green-100 mb-4">Links to official safety organizations</p>
              <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                View Links
              </button>
            </motion.div>
          </div>

          {/* External Resources */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Official Safety Organizations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "FEMA for Kids", url: "https://www.fema.gov/kids", icon: "🏛️" },
                { name: "Red Cross Safety Tips", url: "https://www.redcross.org", icon: "❤️" },
                { name: "Ready.gov", url: "https://www.ready.gov", icon: "🛡️" },
                { name: "CDC Emergency Preparedness", url: "https://www.cdc.gov", icon: "🏥" }
              ].map((org, index) => (
                <motion.a
                  key={index}
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg hover:border-blue-300 transition-all duration-200 flex items-center gap-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-2xl">{org.icon}</span>
                  <span className="font-medium text-gray-800 flex-1">{org.name}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Community */}
      {selectedCategory === 'community' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Community & Forums</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityResources.map((community, index) => (
              <motion.div
                key={community.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{community.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800 mb-2">{community.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{community.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {community.members} members
                      </div>
                      <div className="flex items-center gap-1">
                        <div className={`w-2 h-2 rounded-full ${
                          community.activity === 'Very Active' ? 'bg-green-500' :
                          community.activity === 'Active' ? 'bg-yellow-500' :
                          'bg-gray-400'
                        }`} />
                        {community.activity}
                      </div>
                    </div>

                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                      Join Community
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Contact Support */}
      <motion.div
        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Headphones className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Need More Help?</h3>
            <p className="text-indigo-100">Our support team is here to help you</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Mail className="w-6 h-6 mb-2" />
            <h4 className="font-semibold mb-1">Email Support</h4>
            <p className="text-sm text-indigo-100">help@safeschools.edu</p>
            <p className="text-xs text-indigo-200">Response within 24 hours</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <MessageCircle className="w-6 h-6 mb-2" />
            <h4 className="font-semibold mb-1">Live Chat</h4>
            <p className="text-sm text-indigo-100">Available 9 AM - 5 PM EST</p>
            <p className="text-xs text-indigo-200">Monday through Friday</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Calendar className="w-6 h-6 mb-2" />
            <h4 className="font-semibold mb-1">Schedule Call</h4>
            <p className="text-sm text-indigo-100">Book a support session</p>
            <p className="text-xs text-indigo-200">Free consultations available</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default HelpSection