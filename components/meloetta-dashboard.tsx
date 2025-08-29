"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { User, Baby, Brain, AlertTriangle, Heart, Shield, Zap, ArrowLeft } from "lucide-react"

export default function MeloettaDashboard() {
  const [selectedMode, setSelectedMode] = useState<
    "patient" | "caregiver" | "childChatbot" | "adultChatbot" | "mentalWellnessChatbot" | "crisisSupportChatbot" | null
  >(null)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi there! I'm your friendly AI companion. How can I help you learn and play today?", isUser: false },
  ])
  const [inputMessage, setInputMessage] = useState("")

  if (selectedMode === "adultChatbot") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-emerald-200 flex items-center justify-center p-2">
        <div className="w-full max-w-7xl h-screen max-h-[95vh] bg-gradient-to-b from-green-500 to-green-700 rounded-t-3xl rounded-b-xl shadow-2xl border-8 border-green-900 relative overflow-hidden">
          {/* Top Section - Classic Pokedex Design */}
          <div className="h-1/6 bg-gradient-to-b from-green-400 to-green-600 relative border-b-4 border-green-800">
            {/* LED Indicators */}
            <div className="absolute top-6 left-8 flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-400 rounded-full shadow-inner border-4 border-blue-600 animate-pulse relative">
                <div className="absolute inset-3 bg-blue-200 rounded-full"></div>
              </div>
              <div className="w-8 h-8 bg-red-400 rounded-full shadow-inner border-3 border-red-600 relative">
                <div className="absolute inset-1 bg-red-200 rounded-full"></div>
              </div>
              <div className="w-8 h-8 bg-yellow-400 rounded-full shadow-inner border-3 border-yellow-600 relative">
                <div className="absolute inset-1 bg-yellow-200 rounded-full"></div>
              </div>
            </div>

            {/* Speaker Grille */}
            <div className="absolute top-6 right-8">
              <div className="grid grid-cols-8 gap-1">
                {[...Array(32)].map((_, i) => (
                  <div key={i} className="w-3 h-2 bg-green-800 rounded-full"></div>
                ))}
              </div>
            </div>

            {/* Hinge Line */}
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-green-800 shadow-inner"></div>
          </div>

          {/* Main Screen Section */}
          <div className="h-5/6 bg-gradient-to-b from-green-600 to-green-800 p-8 flex">
            {/* Left Control Panel */}
            <div className="w-1/6 pr-6 space-y-6">
              {/* Directional Pad */}
              <div className="bg-green-900 rounded-xl p-6 shadow-inner">
                <div className="text-green-300 text-sm font-mono mb-3 text-center">D-PAD</div>
                <div className="relative w-20 h-20 mx-auto">
                  <div className="absolute inset-x-1/3 inset-y-0 bg-green-700 rounded"></div>
                  <div className="absolute inset-y-1/3 inset-x-0 bg-green-700 rounded"></div>
                  <div className="absolute inset-3 bg-green-600 rounded-full shadow-lg"></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-green-500 hover:bg-green-400 text-green-900 py-3 px-4 rounded-lg text-sm font-bold border-2 border-green-400 shadow-lg">
                  SELECT
                </button>
                <button className="w-full bg-green-500 hover:bg-green-400 text-green-900 py-3 px-4 rounded-lg text-sm font-bold border-2 border-green-400 shadow-lg">
                  START
                </button>
              </div>

              {/* Volume Controls */}
              <div className="bg-green-900 rounded-xl p-4 shadow-inner">
                <div className="text-green-300 text-sm font-mono mb-3">VOL</div>
                <div className="flex space-x-2">
                  <div className="w-3 h-8 bg-green-600 rounded"></div>
                  <div className="w-3 h-8 bg-green-600 rounded"></div>
                  <div className="w-3 h-8 bg-green-700 rounded"></div>
                  <div className="w-3 h-8 bg-green-700 rounded"></div>
                </div>
              </div>
            </div>

            {/* Main Display Screen - Much Larger */}
            <div className="flex-1 bg-gradient-to-b from-green-100 to-green-200 rounded-2xl border-6 border-green-900 p-6 shadow-inner relative mx-4">
              {/* Screen Border Effect */}
              <div className="absolute inset-3 border-2 border-green-300 rounded-xl"></div>

              {/* Screen Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Screen Header */}
                <div className="bg-green-800 text-green-100 px-6 py-3 rounded-lg text-lg font-mono mb-4 flex items-center justify-between">
                  <span>ADULT LEARNING MODE v2.1</span>
                  <Button
                    onClick={() => setSelectedMode("patient")}
                    className="bg-green-700 hover:bg-green-600 text-green-100 px-4 py-2 text-sm rounded"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                </div>

                {/* Chat Display - Much Larger */}
                <div className="flex-1 overflow-y-auto space-y-3 bg-black/10 rounded-lg p-6 border-2 border-green-300 font-mono text-base">
                  <div className="flex justify-start">
                    <div className="max-w-[80%] px-4 py-3 rounded-lg bg-white border-2 border-green-400 text-green-800 shadow-sm">
                      <p className="text-base leading-relaxed">
                        Welcome to Adult Learning Mode! I'm here to help you develop professional skills and achieve
                        your learning goals. What would you like to work on today?
                      </p>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="mt-4 flex space-x-3">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Enter command..."
                    className="flex-1 px-4 py-3 rounded-lg border-2 border-green-600 focus:border-green-400 focus:outline-none text-green-800 bg-green-50 text-base font-mono shadow-inner"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        if (inputMessage.trim()) {
                          setMessages([
                            ...messages,
                            { text: inputMessage, isUser: true },
                            {
                              text: "I understand your professional development needs. Let me create a structured learning path for you. What specific skills would you like to focus on?",
                              isUser: false,
                            },
                          ])
                          setInputMessage("")
                        }
                      }
                    }}
                  />
                  <button
                    onClick={() => {
                      if (inputMessage.trim()) {
                        setMessages([
                          ...messages,
                          { text: inputMessage, isUser: true },
                          {
                            text: "I understand your professional development needs. Let me create a structured learning path for you. What specific skills would you like to focus on?",
                            isUser: false,
                          },
                        ])
                        setInputMessage("")
                      }
                    }}
                    className="bg-green-500 hover:bg-green-400 text-green-900 px-6 py-3 rounded-lg shadow-lg border-2 border-green-400 font-bold text-base"
                  >
                    SEND
                  </button>
                </div>
              </div>
            </div>

            {/* Right Control Panel */}
            <div className="w-1/6 pl-6 space-y-6">
              {/* Function Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-red-500 hover:bg-red-400 text-white py-4 px-4 rounded-lg text-sm font-bold border-2 border-red-400 shadow-lg">
                  A
                </button>
                <button className="w-full bg-blue-500 hover:bg-blue-400 text-white py-4 px-4 rounded-lg text-sm font-bold border-2 border-blue-400 shadow-lg">
                  B
                </button>
              </div>

              {/* Menu Buttons */}
              <div className="bg-green-900 rounded-xl p-4 shadow-inner space-y-3">
                <div className="text-green-300 text-sm font-mono mb-3">MENU</div>
                <button className="w-full bg-green-500 hover:bg-green-400 text-green-900 py-3 px-3 rounded text-sm font-bold border border-green-400">
                  SKILLS
                </button>
                <button className="w-full bg-green-500 hover:bg-green-400 text-green-900 py-3 px-3 rounded text-sm font-bold border border-green-400">
                  GOALS
                </button>
                <button className="w-full bg-green-500 hover:bg-green-400 text-green-900 py-3 px-3 rounded text-sm font-bold border border-green-400">
                  PROGRESS
                </button>
              </div>

              {/* Status Indicators */}
              <div className="bg-green-900 rounded-xl p-4 shadow-inner">
                <div className="text-green-300 text-sm font-mono mb-3">STATUS</div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-300 text-sm">ONLINE</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-green-300 text-sm">READY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Decorative Strip */}
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-green-900 flex items-center justify-center space-x-3">
            <div className="w-3 h-2 bg-green-400 rounded-full"></div>
            <div className="w-3 h-2 bg-green-400 rounded-full"></div>
            <div className="w-3 h-2 bg-green-400 rounded-full"></div>
          </div>
        </div>
      </div>
    )
  }

  if (selectedMode === "childChatbot") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-emerald-200 flex items-center justify-center p-2">
        <div className="w-full max-w-7xl h-screen max-h-[95vh] bg-gradient-to-b from-green-500 to-green-700 rounded-t-3xl rounded-b-xl shadow-2xl border-8 border-green-900 relative overflow-hidden">
          {/* Top Section - Classic Pokedex Design */}
          <div className="h-1/6 bg-gradient-to-b from-green-400 to-green-600 relative border-b-4 border-green-800">
            {/* LED Indicators */}
            <div className="absolute top-6 left-8 flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-400 rounded-full shadow-inner border-4 border-blue-600 animate-pulse relative">
                <div className="absolute inset-3 bg-blue-200 rounded-full"></div>
              </div>
              <div className="w-8 h-8 bg-red-400 rounded-full shadow-inner border-3 border-red-600 relative">
                <div className="absolute inset-1 bg-red-200 rounded-full"></div>
              </div>
              <div className="w-8 h-8 bg-yellow-400 rounded-full shadow-inner border-3 border-yellow-600 relative">
                <div className="absolute inset-1 bg-yellow-200 rounded-full"></div>
              </div>
            </div>

            {/* Speaker Grille */}
            <div className="absolute top-6 right-8">
              <div className="grid grid-cols-8 gap-1">
                {[...Array(32)].map((_, i) => (
                  <div key={i} className="w-3 h-2 bg-green-800 rounded-full"></div>
                ))}
              </div>
            </div>

            {/* Hinge Line */}
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-green-800 shadow-inner"></div>
          </div>

          {/* Main Screen Section */}
          <div className="h-5/6 bg-gradient-to-b from-green-600 to-green-800 p-8 flex">
            {/* Left Control Panel */}
            <div className="w-1/6 pr-6 space-y-6">
              {/* Directional Pad */}
              <div className="bg-green-900 rounded-xl p-6 shadow-inner">
                <div className="text-green-300 text-sm font-mono mb-3 text-center">D-PAD</div>
                <div className="relative w-20 h-20 mx-auto">
                  <div className="absolute inset-x-1/3 inset-y-0 bg-green-700 rounded"></div>
                  <div className="absolute inset-y-1/3 inset-x-0 bg-green-700 rounded"></div>
                  <div className="absolute inset-3 bg-green-600 rounded-full shadow-lg"></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-green-500 hover:bg-green-400 text-green-900 py-3 px-4 rounded-lg text-sm font-bold border-2 border-green-400 shadow-lg">
                  SELECT
                </button>
                <button className="w-full bg-green-500 hover:bg-green-400 text-green-900 py-3 px-4 rounded-lg text-sm font-bold border-2 border-green-400 shadow-lg">
                  START
                </button>
              </div>

              {/* Volume Controls */}
              <div className="bg-green-900 rounded-xl p-4 shadow-inner">
                <div className="text-green-300 text-sm font-mono mb-3">VOL</div>
                <div className="flex space-x-2">
                  <div className="w-3 h-8 bg-green-600 rounded"></div>
                  <div className="w-3 h-8 bg-green-600 rounded"></div>
                  <div className="w-3 h-8 bg-green-700 rounded"></div>
                  <div className="w-3 h-8 bg-green-700 rounded"></div>
                </div>
              </div>
            </div>

            {/* Main Display Screen - Much Larger */}
            <div className="flex-1 bg-gradient-to-b from-green-100 to-green-200 rounded-2xl border-6 border-green-900 p-6 shadow-inner relative mx-4">
              {/* Screen Border Effect */}
              <div className="absolute inset-3 border-2 border-green-300 rounded-xl"></div>

              {/* Screen Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Screen Header */}
                <div className="bg-green-800 text-green-100 px-6 py-3 rounded-lg text-lg font-mono mb-4 flex items-center justify-between">
                  <span>CHILD LEARNING MODE v2.1</span>
                  <Button
                    onClick={() => setSelectedMode("patient")}
                    className="bg-green-700 hover:bg-green-600 text-green-100 px-4 py-2 text-sm rounded"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                </div>

                {/* Chat Display - Much Larger */}
                <div className="flex-1 overflow-y-auto space-y-3 bg-black/10 rounded-lg p-6 border-2 border-green-300 font-mono text-base">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] px-4 py-3 rounded-lg shadow-sm ${
                          message.isUser
                            ? "bg-green-600 text-white border-2 border-green-500"
                            : "bg-white border-2 border-green-400 text-green-800"
                        }`}
                      >
                        <p className="text-base leading-relaxed">{message.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input Area */}
                <div className="mt-4 flex space-x-3">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Let's play and learn!"
                    className="flex-1 px-4 py-3 rounded-lg border-2 border-green-600 focus:border-green-400 focus:outline-none text-green-800 bg-green-50 text-base font-mono shadow-inner"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        if (inputMessage.trim()) {
                          setMessages([
                            ...messages,
                            { text: inputMessage, isUser: true },
                            {
                              text: "That's awesome! I love learning new things with you. What would you like to explore next? We could play a game, learn about animals, or practice counting!",
                              isUser: false,
                            },
                          ])
                          setInputMessage("")
                        }
                      }
                    }}
                  />
                  <button
                    onClick={() => {
                      if (inputMessage.trim()) {
                        setMessages([
                          ...messages,
                          { text: inputMessage, isUser: true },
                          {
                            text: "That's awesome! I love learning new things with you. What would you like to explore next? We could play a game, learn about animals, or practice counting!",
                            isUser: false,
                          },
                        ])
                        setInputMessage("")
                      }
                    }}
                    className="bg-green-500 hover:bg-green-400 text-green-900 px-6 py-3 rounded-lg shadow-lg border-2 border-green-400 font-bold text-base"
                  >
                    SEND
                  </button>
                </div>
              </div>
            </div>

            {/* Right Control Panel */}
            <div className="w-1/6 pl-6 space-y-6">
              {/* Function Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-red-500 hover:bg-red-400 text-white py-4 px-4 rounded-lg text-sm font-bold border-2 border-red-400 shadow-lg">
                  A
                </button>
                <button className="w-full bg-blue-500 hover:bg-blue-400 text-white py-4 px-4 rounded-lg text-sm font-bold border-2 border-blue-400 shadow-lg">
                  B
                </button>
              </div>

              {/* Menu Buttons */}
              <div className="bg-green-900 rounded-xl p-4 shadow-inner space-y-3">
                <div className="text-green-300 text-sm font-mono mb-3">MENU</div>
                <button className="w-full bg-green-500 hover:bg-green-400 text-green-900 py-3 px-3 rounded text-sm font-bold border border-green-400">
                  PLAY
                </button>
                <button className="w-full bg-green-500 hover:bg-green-400 text-green-900 py-3 px-3 rounded text-sm font-bold border border-green-400">
                  LEARN
                </button>
                <button className="w-full bg-green-500 hover:bg-green-400 text-green-900 py-3 px-3 rounded text-sm font-bold border border-green-400">
                  GAMES
                </button>
              </div>

              {/* Status Indicators */}
              <div className="bg-green-900 rounded-xl p-4 shadow-inner">
                <div className="text-green-300 text-sm font-mono mb-3">STATUS</div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-300 text-sm">HAPPY</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-green-300 text-sm">READY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Decorative Strip */}
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-green-900 flex items-center justify-center space-x-3">
            <div className="w-3 h-2 bg-green-400 rounded-full"></div>
            <div className="w-3 h-2 bg-green-400 rounded-full"></div>
            <div className="w-3 h-2 bg-green-400 rounded-full"></div>
          </div>
        </div>
      </div>
    )
  }

  if (selectedMode === "mentalWellnessChatbot") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-100 via-teal-200 to-cyan-200 flex items-center justify-center p-2">
        <div className="w-full max-w-7xl h-screen max-h-[95vh] bg-gradient-to-b from-teal-500 to-teal-700 rounded-t-3xl rounded-b-xl shadow-2xl border-8 border-teal-900 relative overflow-hidden">
          {/* Top Section - Classic Pokedex Design */}
          <div className="h-1/6 bg-gradient-to-b from-teal-400 to-teal-600 relative border-b-4 border-teal-800">
            {/* LED Indicators */}
            <div className="absolute top-6 left-8 flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-400 rounded-full shadow-inner border-4 border-blue-600 animate-pulse relative">
                <div className="absolute inset-3 bg-blue-200 rounded-full"></div>
              </div>
              <div className="w-8 h-8 bg-purple-400 rounded-full shadow-inner border-3 border-purple-600 relative">
                <div className="absolute inset-1 bg-purple-200 rounded-full"></div>
              </div>
              <div className="w-8 h-8 bg-cyan-400 rounded-full shadow-inner border-3 border-cyan-600 relative">
                <div className="absolute inset-1 bg-cyan-200 rounded-full"></div>
              </div>
            </div>

            {/* Speaker Grille */}
            <div className="absolute top-6 right-8">
              <div className="grid grid-cols-8 gap-1">
                {[...Array(32)].map((_, i) => (
                  <div key={i} className="w-3 h-2 bg-teal-800 rounded-full"></div>
                ))}
              </div>
            </div>

            {/* Hinge Line */}
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-teal-800 shadow-inner"></div>
          </div>

          {/* Main Screen Section */}
          <div className="h-5/6 bg-gradient-to-b from-teal-600 to-teal-800 p-8 flex">
            {/* Left Control Panel */}
            <div className="w-1/6 pr-6 space-y-6">
              {/* Directional Pad */}
              <div className="bg-teal-900 rounded-xl p-6 shadow-inner">
                <div className="text-teal-300 text-sm font-mono mb-3 text-center">D-PAD</div>
                <div className="relative w-20 h-20 mx-auto">
                  <div className="absolute inset-x-1/3 inset-y-0 bg-teal-700 rounded"></div>
                  <div className="absolute inset-y-1/3 inset-x-0 bg-teal-700 rounded"></div>
                  <div className="absolute inset-3 bg-teal-600 rounded-full shadow-lg"></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-teal-500 hover:bg-teal-400 text-teal-900 py-3 px-4 rounded-lg text-sm font-bold border-2 border-teal-400 shadow-lg">
                  SELECT
                </button>
                <button className="w-full bg-teal-500 hover:bg-teal-400 text-teal-900 py-3 px-4 rounded-lg text-sm font-bold border-2 border-teal-400 shadow-lg">
                  START
                </button>
              </div>

              {/* Volume Controls */}
              <div className="bg-teal-900 rounded-xl p-4 shadow-inner">
                <div className="text-teal-300 text-sm font-mono mb-3">VOL</div>
                <div className="flex space-x-2">
                  <div className="w-3 h-8 bg-teal-600 rounded"></div>
                  <div className="w-3 h-8 bg-teal-600 rounded"></div>
                  <div className="w-3 h-8 bg-teal-700 rounded"></div>
                  <div className="w-3 h-8 bg-teal-700 rounded"></div>
                </div>
              </div>
            </div>

            {/* Main Display Screen - Much Larger */}
            <div className="flex-1 bg-gradient-to-b from-teal-100 to-teal-200 rounded-2xl border-6 border-teal-900 p-6 shadow-inner relative mx-4">
              {/* Screen Border Effect */}
              <div className="absolute inset-3 border-2 border-teal-300 rounded-xl"></div>

              {/* Screen Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Screen Header */}
                <div className="bg-teal-800 text-teal-100 px-6 py-3 rounded-lg text-lg font-mono mb-4 flex items-center justify-between">
                  <span>MENTAL WELLNESS MODE v2.1</span>
                  <Button
                    onClick={() => setSelectedMode("caregiver")}
                    className="bg-teal-700 hover:bg-teal-600 text-teal-100 px-4 py-2 text-sm rounded"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                </div>

                {/* Chat Display - Much Larger */}
                <div className="flex-1 overflow-y-auto space-y-3 bg-black/10 rounded-lg p-6 border-2 border-teal-300 font-mono text-base">
                  <div className="flex justify-start">
                    <div className="max-w-[80%] px-4 py-3 rounded-lg bg-white border-2 border-teal-400 text-teal-800 shadow-sm">
                      <p className="text-base leading-relaxed">
                        Welcome to your Mental Wellness space. I'm here to provide emotional support, stress management
                        techniques, and well-being guidance. Take a deep breath - you're in a safe space. How are you
                        feeling today?
                      </p>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="mt-4 flex space-x-3">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Share your thoughts..."
                    className="flex-1 px-4 py-3 rounded-lg border-2 border-teal-600 focus:border-teal-400 focus:outline-none text-teal-800 bg-teal-50 text-base font-mono shadow-inner"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        if (inputMessage.trim()) {
                          setMessages([
                            ...messages,
                            { text: inputMessage, isUser: true },
                            {
                              text: "Thank you for sharing. Your feelings are valid and important. Let's work through this together. Would you like to try a breathing exercise or talk about what's on your mind?",
                              isUser: false,
                            },
                          ])
                          setInputMessage("")
                        }
                      }
                    }}
                  />
                  <button
                    onClick={() => {
                      if (inputMessage.trim()) {
                        setMessages([
                          ...messages,
                          { text: inputMessage, isUser: true },
                          {
                            text: "Thank you for sharing. Your feelings are valid and important. Let's work through this together. Would you like to try a breathing exercise or talk about what's on your mind?",
                            isUser: false,
                          },
                        ])
                        setInputMessage("")
                      }
                    }}
                    className="bg-teal-500 hover:bg-teal-400 text-teal-900 px-6 py-3 rounded-lg shadow-lg border-2 border-teal-400 font-bold text-base"
                  >
                    SEND
                  </button>
                </div>
              </div>
            </div>

            {/* Right Control Panel */}
            <div className="w-1/6 pl-6 space-y-6">
              {/* Function Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-purple-500 hover:bg-purple-400 text-white py-4 px-4 rounded-lg text-sm font-bold border-2 border-purple-400 shadow-lg">
                  A
                </button>
                <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-white py-4 px-4 rounded-lg text-sm font-bold border-2 border-cyan-400 shadow-lg">
                  B
                </button>
              </div>

              {/* Menu Buttons */}
              <div className="bg-teal-900 rounded-xl p-4 shadow-inner space-y-3">
                <div className="text-teal-300 text-sm font-mono mb-3">MENU</div>
                <button className="w-full bg-teal-500 hover:bg-teal-400 text-teal-900 py-3 px-3 rounded text-sm font-bold border border-teal-400">
                  BREATHE
                </button>
                <button className="w-full bg-teal-500 hover:bg-teal-400 text-teal-900 py-3 px-3 rounded text-sm font-bold border border-teal-400">
                  MEDITATE
                </button>
                <button className="w-full bg-teal-500 hover:bg-teal-400 text-teal-900 py-3 px-3 rounded text-sm font-bold border border-teal-400">
                  JOURNAL
                </button>
              </div>

              {/* Status Indicators */}
              <div className="bg-teal-900 rounded-xl p-4 shadow-inner">
                <div className="text-teal-300 text-sm font-mono mb-3">STATUS</div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
                    <span className="text-teal-300 text-sm">CALM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-teal-300 text-sm">SAFE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Decorative Strip */}
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-teal-900 flex items-center justify-center space-x-3">
            <div className="w-3 h-2 bg-teal-400 rounded-full"></div>
            <div className="w-3 h-2 bg-teal-400 rounded-full"></div>
            <div className="w-3 h-2 bg-teal-400 rounded-full"></div>
          </div>
        </div>
      </div>
    )
  }

  if (selectedMode === "crisisSupportChatbot") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-100 via-teal-200 to-cyan-200 flex items-center justify-center p-2">
        <div className="w-full max-w-7xl h-screen max-h-[95vh] bg-gradient-to-b from-teal-500 to-teal-700 rounded-t-3xl rounded-b-xl shadow-2xl border-8 border-teal-900 relative overflow-hidden">
          {/* Top Section - Classic Pokedex Design */}
          <div className="h-1/6 bg-gradient-to-b from-teal-400 to-teal-600 relative border-b-4 border-teal-800">
            {/* LED Indicators */}
            <div className="absolute top-6 left-8 flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-400 rounded-full shadow-inner border-4 border-red-600 animate-pulse relative">
                <div className="absolute inset-3 bg-red-200 rounded-full"></div>
              </div>
              <div className="w-8 h-8 bg-orange-400 rounded-full shadow-inner border-3 border-orange-600 relative">
                <div className="absolute inset-1 bg-orange-200 rounded-full"></div>
              </div>
              <div className="w-8 h-8 bg-yellow-400 rounded-full shadow-inner border-3 border-yellow-600 relative">
                <div className="absolute inset-1 bg-yellow-200 rounded-full"></div>
              </div>
            </div>

            {/* Speaker Grille */}
            <div className="absolute top-6 right-8">
              <div className="grid grid-cols-8 gap-1">
                {[...Array(32)].map((_, i) => (
                  <div key={i} className="w-3 h-2 bg-teal-800 rounded-full"></div>
                ))}
              </div>
            </div>

            {/* Hinge Line */}
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-teal-800 shadow-inner"></div>
          </div>

          {/* Main Screen Section */}
          <div className="h-5/6 bg-gradient-to-b from-teal-600 to-teal-800 p-8 flex">
            {/* Left Control Panel */}
            <div className="w-1/6 pr-6 space-y-6">
              {/* Directional Pad */}
              <div className="bg-teal-900 rounded-xl p-6 shadow-inner">
                <div className="text-teal-300 text-sm font-mono mb-3 text-center">D-PAD</div>
                <div className="relative w-20 h-20 mx-auto">
                  <div className="absolute inset-x-1/3 inset-y-0 bg-teal-700 rounded"></div>
                  <div className="absolute inset-y-1/3 inset-x-0 bg-teal-700 rounded"></div>
                  <div className="absolute inset-3 bg-teal-600 rounded-full shadow-lg"></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-teal-500 hover:bg-teal-400 text-teal-900 py-3 px-4 rounded-lg text-sm font-bold border-2 border-teal-400 shadow-lg">
                  SELECT
                </button>
                <button className="w-full bg-teal-500 hover:bg-teal-400 text-teal-900 py-3 px-4 rounded-lg text-sm font-bold border-2 border-teal-400 shadow-lg">
                  START
                </button>
              </div>

              {/* Volume Controls */}
              <div className="bg-teal-900 rounded-xl p-4 shadow-inner">
                <div className="text-teal-300 text-sm font-mono mb-3">VOL</div>
                <div className="flex space-x-2">
                  <div className="w-3 h-8 bg-teal-600 rounded"></div>
                  <div className="w-3 h-8 bg-teal-600 rounded"></div>
                  <div className="w-3 h-8 bg-teal-700 rounded"></div>
                  <div className="w-3 h-8 bg-teal-700 rounded"></div>
                </div>
              </div>
            </div>

            {/* Main Display Screen - Much Larger */}
            <div className="flex-1 bg-gradient-to-b from-teal-100 to-teal-200 rounded-2xl border-6 border-teal-900 p-6 shadow-inner relative mx-4">
              {/* Screen Border Effect */}
              <div className="absolute inset-3 border-2 border-teal-300 rounded-xl"></div>

              {/* Screen Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Screen Header */}
                <div className="bg-teal-800 text-teal-100 px-6 py-3 rounded-lg text-lg font-mono mb-4 flex items-center justify-between">
                  <span>CRISIS SUPPORT MODE v2.1</span>
                  <Button
                    onClick={() => setSelectedMode("caregiver")}
                    className="bg-teal-700 hover:bg-teal-600 text-teal-100 px-4 py-2 text-sm rounded"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                </div>

                {/* Chat Display - Much Larger */}
                <div className="flex-1 overflow-y-auto space-y-3 bg-black/10 rounded-lg p-6 border-2 border-teal-300 font-mono text-base">
                  <div className="flex justify-start">
                    <div className="max-w-[80%] px-4 py-3 rounded-lg bg-white border-2 border-teal-400 text-teal-800 shadow-sm">
                      <p className="text-base leading-relaxed">
                        🚨 Crisis Support is here for you. You are not alone. I'm here to provide immediate assistance
                        and coping strategies during challenging moments. If this is a medical emergency, please call
                        911. How can I help you right now?
                      </p>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="mt-4 flex space-x-3">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="I'm here to help..."
                    className="flex-1 px-4 py-3 rounded-lg border-2 border-teal-600 focus:border-teal-400 focus:outline-none text-teal-800 bg-teal-50 text-base font-mono shadow-inner"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        if (inputMessage.trim()) {
                          setMessages([
                            ...messages,
                            { text: inputMessage, isUser: true },
                            {
                              text: "I hear you and I'm here to support you through this difficult time. You've taken a brave step by reaching out. Let's work through this together. What's the most pressing concern right now?",
                              isUser: false,
                            },
                          ])
                          setInputMessage("")
                        }
                      }
                    }}
                  />
                  <button
                    onClick={() => {
                      if (inputMessage.trim()) {
                        setMessages([
                          ...messages,
                          { text: inputMessage, isUser: true },
                          {
                            text: "I hear you and I'm here to support you through this difficult time. You've taken a brave step by reaching out. Let's work through this together. What's the most pressing concern right now?",
                            isUser: false,
                          },
                        ])
                        setInputMessage("")
                      }
                    }}
                    className="bg-teal-500 hover:bg-teal-400 text-teal-900 px-6 py-3 rounded-lg shadow-lg border-2 border-teal-400 font-bold text-base"
                  >
                    SEND
                  </button>
                </div>
              </div>
            </div>

            {/* Right Control Panel */}
            <div className="w-1/6 pl-6 space-y-6">
              {/* Function Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-red-500 hover:bg-red-400 text-white py-4 px-4 rounded-lg text-sm font-bold border-2 border-red-400 shadow-lg">
                  A
                </button>
                <button className="w-full bg-orange-500 hover:bg-orange-400 text-white py-4 px-4 rounded-lg text-sm font-bold border-2 border-orange-400 shadow-lg">
                  B
                </button>
              </div>

              {/* Menu Buttons */}
              <div className="bg-teal-900 rounded-xl p-4 shadow-inner space-y-3">
                <div className="text-teal-300 text-sm font-mono mb-3">MENU</div>
                <button className="w-full bg-teal-500 hover:bg-teal-400 text-teal-900 py-3 px-3 rounded text-sm font-bold border border-teal-400">
                  HELP
                </button>
                <button className="w-full bg-teal-500 hover:bg-teal-400 text-teal-900 py-3 px-3 rounded text-sm font-bold border border-teal-400">
                  RESOURCES
                </button>
                <button className="w-full bg-teal-500 hover:bg-teal-400 text-teal-900 py-3 px-3 rounded text-sm font-bold border border-teal-400">
                  CONTACT
                </button>
              </div>

              {/* Status Indicators */}
              <div className="bg-teal-900 rounded-xl p-4 shadow-inner">
                <div className="text-teal-300 text-sm font-mono mb-3">STATUS</div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <span className="text-teal-300 text-sm">URGENT</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <span className="text-teal-300 text-sm">SUPPORT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Decorative Strip */}
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-teal-900 flex items-center justify-center space-x-3">
            <div className="w-3 h-2 bg-teal-400 rounded-full"></div>
            <div className="w-3 h-2 bg-teal-400 rounded-full"></div>
            <div className="w-3 h-2 bg-teal-400 rounded-full"></div>
          </div>
        </div>
      </div>
    )
  }

  if (selectedMode === "patient") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-emerald-200 flex flex-col relative">
        <div className="absolute top-10 right-10 w-32 h-32 bg-green-300/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-emerald-300/30 rounded-full blur-lg"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-400/10 rounded-full blur-md"></div>

        <div className="flex-1 flex flex-col relative z-10">
          {/* Header Section */}
          <div className="text-center py-6 px-8">
            <h1 className="text-4xl font-light text-green-800 mb-4 leading-tight">Meloetta is in action mode</h1>
            <div className="text-xl text-green-700 font-medium mb-3">
              Strike the Perfect Note—Play, Train, or Master Your Abilities!
            </div>
            <p className="text-green-700 text-base max-w-4xl mx-auto leading-relaxed">
              Inspired by Pokémon Meloetta's action-ready form, our platform empowers disabled individuals through
              personalized AI agents that adapt to your unique learning style and pace.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="px-8 mb-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center text-green-800 group">
                  <div className="bg-white/50 rounded-2xl p-4 group-hover:bg-white/70 transition-all duration-300">
                    <Zap className="w-8 h-8 mx-auto mb-2 text-green-600" />
                    <div className="font-semibold text-base">Interactive Learning</div>
                    <div className="text-xs text-green-700 mt-1">Engaging activities</div>
                  </div>
                </div>
                <div className="text-center text-green-800 group">
                  <div className="bg-white/50 rounded-2xl p-4 group-hover:bg-white/70 transition-all duration-300">
                    <Heart className="w-8 h-8 mx-auto mb-2 text-green-600" />
                    <div className="font-semibold text-base">Emotional Support</div>
                    <div className="text-xs text-green-700 mt-1">Caring guidance</div>
                  </div>
                </div>
                <div className="text-center text-green-800 group">
                  <div className="bg-white/50 rounded-2xl p-4 group-hover:bg-white/70 transition-all duration-300">
                    <User className="w-8 h-8 mx-auto mb-2 text-green-600" />
                    <div className="font-semibold text-base">Skill Development</div>
                    <div className="text-xs text-green-700 mt-1">Personal growth</div>
                  </div>
                </div>
                <div className="text-center text-green-800 group">
                  <div className="bg-white/50 rounded-2xl p-4 group-hover:bg-white/70 transition-all duration-300">
                    <Shield className="w-8 h-8 mx-auto mb-2 text-green-600" />
                    <div className="font-semibold text-base">Child Growth</div>
                    <div className="text-xs text-green-700 mt-1">Milestone tracking</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex items-center justify-center px-8 py-4">
            <div className="max-w-3xl w-full space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-light text-green-800 mb-2">Choose Your Learning Path</h2>
                <p className="text-green-700">Select the mode that best fits your needs and preferences</p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <button
                  onClick={() => setSelectedMode("childChatbot")}
                  className="bg-gradient-to-r from-white to-green-50 hover:from-green-50 hover:to-white border-2 border-green-200 hover:border-green-300 rounded-3xl p-8 flex items-center space-x-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg">
                    <Baby className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Child Mode</h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      Engagement Agent - Interactive learning through play, exploration, and age-appropriate activities
                      designed to spark curiosity and joy
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedMode("adultChatbot")}
                  className="bg-gradient-to-r from-white to-green-50 hover:from-green-50 hover:to-white border-2 border-green-200 hover:border-green-300 rounded-3xl p-8 flex items-center space-x-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Adult Mode</h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      Skill Tutor Agent - Personalized skill development and mastery with professional guidance and
                      structured learning paths
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center py-4">
            <Button
              onClick={() => setSelectedMode(null)}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl text-base font-medium transition-all duration-300"
            >
              ← Back to Main Dashboard
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (selectedMode === "caregiver") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-200 via-teal-300 to-cyan-300 flex flex-col relative">
        <div className="absolute top-10 left-10 w-32 h-32 bg-teal-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-cyan-400/30 rounded-full blur-lg"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-teal-500/10 rounded-full blur-md"></div>

        <div className="flex-1 flex flex-col relative z-10">
          {/* Header Section */}
          <div className="text-center py-6 px-8">
            <h1 className="text-4xl font-light text-teal-800 mb-4 leading-tight">Meloetta is in calm mode</h1>
            <div className="text-xl text-teal-700 font-medium mb-3">Ease your load—Keep Hopes afloat!</div>
            <p className="text-teal-700 text-base max-w-4xl mx-auto leading-relaxed">
              Inspired by Pokémon Meloetta's calm form, providing essential support tools and resources for caregivers
              and families navigating their journey with compassion and strength.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="px-8 mb-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center text-teal-800 group">
                  <div className="bg-white/50 rounded-2xl p-4 group-hover:bg-white/70 transition-all duration-300">
                    <Shield className="w-8 h-8 mx-auto mb-2 text-teal-600" />
                    <div className="font-semibold text-base">24/7 Support</div>
                    <div className="text-xs text-teal-700 mt-1">Always available</div>
                  </div>
                </div>
                <div className="text-center text-teal-800 group">
                  <div className="bg-white/50 rounded-2xl p-4 group-hover:bg-white/70 transition-all duration-300">
                    <Brain className="w-8 h-8 mx-auto mb-2 text-teal-600" />
                    <div className="font-semibold text-base">Expert Guidance</div>
                    <div className="text-xs text-teal-700 mt-1">Professional insights</div>
                  </div>
                </div>
                <div className="text-center text-teal-800 group">
                  <div className="bg-white/50 rounded-2xl p-4 group-hover:bg-white/70 transition-all duration-300">
                    <Heart className="w-8 h-8 mx-auto mb-2 text-teal-600" />
                    <div className="font-semibold text-base">Emotional Care</div>
                    <div className="text-xs text-teal-700 mt-1">Compassionate support</div>
                  </div>
                </div>
                <div className="text-center text-teal-800 group">
                  <div className="bg-white/50 rounded-2xl p-4 group-hover:bg-white/70 transition-all duration-300">
                    <User className="w-8 h-8 mx-auto mb-2 text-teal-600" />
                    <div className="font-semibold text-base">Family Support</div>
                    <div className="text-xs text-teal-700 mt-1">Whole family care</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex items-center justify-center px-8 py-4">
            <div className="max-w-3xl w-full space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-light text-teal-800 mb-2">Your Support Toolkit</h2>
                <p className="text-teal-700">
                  Access specialized resources designed to support you and your loved ones
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <button
                  onClick={() => setSelectedMode("mentalWellnessChatbot")}
                  className="bg-gradient-to-r from-white to-teal-50 hover:from-teal-50 hover:to-white border-2 border-teal-200 hover:border-teal-300 rounded-3xl p-8 flex items-center space-x-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center shadow-lg">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Mental Wellness</h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      Mental Wellness Agent - Emotional support, stress management techniques, and well-being guidance
                      tailored for caregivers
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedMode("crisisSupportChatbot")}
                  className="bg-gradient-to-r from-white to-teal-50 hover:from-teal-50 hover:to-white border-2 border-teal-200 hover:border-teal-300 rounded-3xl p-8 flex items-center space-x-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center shadow-lg">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Crisis Support</h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      Crisis Support Agent - Immediate assistance, coping strategies, and guidance during challenging
                      moments when you need help most
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center py-4">
            <Button
              onClick={() => setSelectedMode(null)}
              className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl text-base font-medium transition-all duration-300"
            >
              ← Back to Main Dashboard
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col p-8">
      <div className="bg-white rounded-3xl p-16 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-8xl font-light text-gray-900 mb-4">Meloetta AI</h1>
              <p className="text-2xl text-gray-600 mb-8">
                AI-powered support platform inspired by Pokémon Meloetta's dual forms
              </p>
            </div>

            <div className="space-y-6">
              <Button
                onClick={() => setSelectedMode("patient")}
                className="w-full h-28 bg-green-200 hover:bg-green-300 text-gray-700 text-4xl font-medium rounded-2xl shadow-lg hover:shadow-xl"
              >
                Patient Mode
              </Button>

              <Button
                onClick={() => setSelectedMode("caregiver")}
                className="w-full h-28 bg-teal-500 hover:bg-teal-600 text-white text-4xl font-medium rounded-2xl shadow-lg hover:shadow-xl"
              >
                Caregiver Mode
              </Button>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <p className="text-gray-700 text-xl">
                Empowering disabled individuals and their caregivers through specialized AI agents built on qRaptor and
                Agentic AI principles.
              </p>
            </div>
          </div>

          {/* Right Side - Character */}
          <div className="text-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/29d74551d51cfb2408cd738bdd8d9e7a3f0ed517_hq-1083037526.jpg-ngPp5tNwWRMbYn2X4QcAUSsHk0eZyx.jpeg"
              alt="Meloetta AI Character"
              className="w-96 h-96 mx-auto mb-6 object-contain animate-bounce"
              style={{ animationDuration: "3s" }}
            />
            <p className="text-3xl text-gray-700 font-medium">Meloetta is ready to help!</p>
            <p className="text-xl text-gray-600 mt-2">Switch between calm and action modes for personalized support</p>
          </div>
        </div>
      </div>
    </div>
  )
}
