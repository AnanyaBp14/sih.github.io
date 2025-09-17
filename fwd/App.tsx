import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Progress } from "./components/ui/progress";
import { Badge } from "./components/ui/badge";

import { LoginScreen } from "./components/LoginScreen";
import { TeacherDashboard } from "./components/TeacherDashboard";
import { DashboardOverview } from "./components/DashboardOverview";
import { StudySection } from "./components/TrainingSection"; // lessons
import { VideosSection } from "./components/ResourcesSection"; // videos
import { GamesSection } from "./components/SimulationsSection"; // simulations
import { HelpSection } from "./components/EmergencySection"; // help
import { ParentalControls } from "./components/ParentalControls";
import { GamificationPanel } from "./components/GamificationPanel";
import { Mascot } from "./components/Mascot";

import {
  BookOpen,
  Play,
  Gamepad2,
  HelpCircle,
  Shield,
  Trophy,
  Settings,
  Volume2,
  VolumeX,
  Phone,
  AlertTriangle,
  User,
  Star,
  Clock,
  Award,
  Zap,
  LogOut,
} from "lucide-react";

export default function App() {
  // Authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'student' | 'teacher' | null>(null);
  const [userData, setUserData] = useState<any>(null);

  // App state
  const [activeSection, setActiveSection] = useState("dashboard");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [showGamification, setShowGamification] = useState(false);

  // Student progress data (would come from userData in real app)
  const studentProgress = {
    completedLessons: userData?.completedLessons || 12,
    totalLessons: userData?.totalLessons || 25,
    watchedVideos: userData?.watchedVideos || 8,
    completedDrills: userData?.completedDrills || 5,
    studyTime: userData?.studyTime || 45,
    level: userData?.level || 8,
    points: userData?.points || 1250,
    badges: userData?.badges || []
  };

  // Login handler
  const handleLogin = (role: 'student' | 'teacher', data: any) => {
    setIsLoggedIn(true);
    setUserRole(role);
    setUserData(data);
  };

  // Logout handler
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    setUserData(null);
    setActiveSection("dashboard");
    setShowSettings(false);
    setShowGamification(false);
  };

  // SafeSchools navigation sections
  const sections = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: Trophy,
      color: "bg-yellow-500 hover:bg-yellow-600",
      description: "Your progress overview",
      emoji: "🏠"
    },
    {
      id: "lessons",
      label: "Lessons",
      icon: BookOpen,
      color: "bg-blue-500 hover:bg-blue-600",
      description: "Learn about safety",
      emoji: "📚"
    },
    {
      id: "videos",
      label: "Videos",
      icon: Play,
      color: "bg-purple-500 hover:bg-purple-600",
      description: "Watch safety videos",
      emoji: "🎥"
    },
    {
      id: "simulations",
      label: "Simulations",
      icon: Gamepad2,
      color: "bg-green-500 hover:bg-green-600",
      description: "Practice drills",
      emoji: "🎮"
    },
    {
      id: "help",
      label: "Help",
      icon: HelpCircle,
      color: "bg-orange-500 hover:bg-orange-600",
      description: "Get help & contacts",
      emoji: "🆘"
    },
  ];

  const emergencyContacts = [
    { name: "Fire Department", number: "911", icon: "🚒" },
    { name: "Ambulance", number: "911", icon: "🚑" },
    { name: "Police", number: "911", icon: "👮" },
    { name: "School Principal", number: "(555) 123-4567", icon: "🏫" },
  ];

  // Show login screen if not authenticated
  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  // Show teacher dashboard if user is a teacher
  if (userRole === 'teacher') {
    return <TeacherDashboard userData={userData} onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-blue-50 font-sans">
      {/* Top Navbar */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg h-16">
        <div className="flex items-center justify-between h-full px-6">
          {/* Logo & Title */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            <div className="bg-white rounded-lg p-2 shadow-lg">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold">SafeSchools</h1>
              <p className="text-xs text-blue-100">Disaster Preparedness & Response Education</p>
            </div>
          </motion.div>

          {/* Center Motto */}
          <div className="hidden md:block text-center">
            <p className="text-lg font-bold text-white">Prepared. Protected. Ready.</p>
          </div>

          {/* User Profile & Progress */}
          <div className="flex items-center gap-4">
            {/* Gamification Stats */}
            <div className="flex items-center gap-3 text-sm">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowGamification(true)}
                className="text-white hover:bg-white/20 flex items-center gap-2"
              >
                <Trophy className="w-4 h-4 text-yellow-300" />
                <span className="hidden sm:inline">Level {studentProgress.level}</span>
              </Button>
              
              <div className="flex items-center gap-1">
                <Zap className="w-4 h-4 text-yellow-300" />
                <span>{studentProgress.points}</span>
              </div>
              
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                {studentProgress.badges.length} badges
              </Badge>
            </div>
            
            {/* Controls */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="text-white hover:bg-white/20"
              >
                {soundEnabled ? (
                  <Volume2 className="w-4 h-4" />
                ) : (
                  <VolumeX className="w-4 h-4" />
                )}
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSettings(true)}
                className="text-white hover:bg-white/20"
              >
                <Settings className="w-4 h-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-white hover:bg-white/20"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>



      {/* Main Layout */}
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Left Sidebar */}
        <aside className="w-64 bg-white shadow-lg border-r">
          {/* Mascot Section */}
          <div className="p-6 border-b bg-gradient-to-r from-orange-100 to-pink-100">
            <motion.div
              className="flex flex-col items-center gap-3"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center text-4xl shadow-lg">
                🦊
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-800">Safety Fox</h3>
                <p className="text-xs text-gray-600">Your Learning Buddy</p>
              </div>
            </motion.div>
          </div>

          {/* Navigation Menu */}
          <nav className="p-4">
            <div className="space-y-2">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                    activeSection === section.id
                      ? `${section.color} text-white shadow-lg scale-105`
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <section.icon className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-medium flex items-center gap-2">
                      {section.emoji} {section.label}
                    </div>
                    <div className="text-xs opacity-75">{section.description}</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto bg-gray-50">
          <div className="flex">
            {/* Content */}
            <div className="flex-1 p-6">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {activeSection === "dashboard" && (
                  <DashboardOverview 
                    userData={userData} 
                    onSectionSelect={setActiveSection}
                  />
                )}
                {activeSection === "lessons" && <StudySection />}
                {activeSection === "videos" && <VideosSection />}
                {activeSection === "simulations" && <GamesSection />}
                {activeSection === "help" && <HelpSection />}
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <aside className="w-80 bg-white shadow-lg border-l p-6 space-y-6">
              {/* Progress Tracker */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    Your Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Lessons Completed</span>
                      <span>{studentProgress.completedLessons}/{studentProgress.totalLessons}</span>
                    </div>
                    <Progress value={(studentProgress.completedLessons / studentProgress.totalLessons) * 100} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-blue-600">{studentProgress.watchedVideos}</div>
                      <div className="text-xs text-gray-600">Videos Watched</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-green-600">{studentProgress.completedDrills}</div>
                      <div className="text-xs text-gray-600">Drills Done</div>
                    </div>
                  </div>

                  <div className="text-center p-3 bg-yellow-50 rounded-lg">
                    <div className="text-sm font-medium text-yellow-800">Study Time Today</div>
                    <div className="text-xl font-bold text-yellow-600">{studentProgress.studyTime} minutes</div>
                  </div>

                  {/* Gamification Button */}
                  <Button
                    onClick={() => setShowGamification(true)}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  >
                    <Trophy className="w-4 h-4 mr-2" />
                    View Achievements
                  </Button>
                </CardContent>
              </Card>

              {/* Emergency Contacts */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Phone className="w-5 h-5 text-red-500" />
                    Emergency Contacts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{contact.icon}</span>
                        <div>
                          <div className="font-medium text-sm">{contact.name}</div>
                          <div className="text-xs text-gray-500">{contact.number}</div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="text-xs">
                        Call
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Mock Alert */}
              <Card className="border-orange-200 bg-orange-50">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                    <div>
                      <div className="font-medium text-orange-800 text-sm">Safety Reminder</div>
                      <div className="text-xs text-orange-700 mt-1">
                        Remember to practice your earthquake drill this week!
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </main>
      </div>

      {/* Floating Mascot */}
      <Mascot />

      {/* Settings Modal */}
      {showSettings && (
        <ParentalControls
          onClose={() => setShowSettings(false)}
        />
      )}

      {/* Gamification Panel */}
      {showGamification && (
        <GamificationPanel
          userData={userData}
          onClose={() => setShowGamification(false)}
        />
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2">
            <Shield className="w-5 h-5 text-yellow-300" />
            <span className="font-bold">Be Prepared, Stay Safe!</span>
            <span className="text-yellow-300">⚡</span>
          </div>
          <div className="text-xs text-blue-100 mt-2">
            © 2025 SafeSchools - Making Safety Learning Fun and Interactive
          </div>
        </div>
      </footer>
    </div>
  );
}