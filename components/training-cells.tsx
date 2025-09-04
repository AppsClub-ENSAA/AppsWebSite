"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { GraduationCap, Trophy, Code, Database, Shield, Target, Calendar } from "lucide-react"

interface TrainingCell {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  gradient: string
  yearPlan: string
  goal?: string
  keyActivities?: string
}

const trainingCells: TrainingCell[] = [
  {
    id: "preparatory",
    title: "Preparatory Cycle",
    description: "Foundation building for first-year students",
    icon: <GraduationCap className="h-8 w-8" />,
    gradient: "from-green-500 to-emerald-600",
    goal: "To support first-year students in mastering the essentials of C programming and web development, while gaining hands-on experience through projects and solving coding challenges. This cell is designed to help students succeed in their exams, while also focusing on general programming skills as beginners and giving them an early entry into the IT experience.",
    keyActivities:
      "**Intro to CS**: A five-session track covering C programming fundamentals, from coding basics and control flow to pointers, memory management, and preparation for data structures.\n\n**Intro to Web Development**: A seven-session journey through HTML, CSS, JavaScript, and SQL, applied directly in practical projects.",
  },
  {
    id: "competitive",
    title: "Competitive Programming",
    description: "Algorithmic problem solving and contest preparation",
    icon: <Trophy className="h-8 w-8" />,
    gradient: "from-yellow-500 to-orange-600",
    yearPlan:
      "Master advanced algorithms, participate in ICPC and online contests, and develop problem-solving skills for technical interviews.",
  },
  {
    id: "development",
    title: "Development",
    description: "Full-stack development and modern technologies",
    icon: <Code className="h-8 w-8" />,
    gradient: "from-blue-500 to-cyan-600",
    yearPlan:
      "Learn modern frameworks, build real-world applications, and master both frontend and backend development with industry best practices.",
  },
  {
    id: "datascience",
    title: "Data Science",
    description: "Data analysis, machine learning, and AI",
    icon: <Database className="h-8 w-8" />,
    gradient: "from-purple-500 to-pink-600",
    yearPlan:
      "Explore data analysis, machine learning algorithms, and AI applications with hands-on projects using Python and modern ML frameworks.",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Information security and ethical hacking",
    icon: <Shield className="h-8 w-8" />,
    gradient: "from-red-500 to-rose-600",
    yearPlan:
      "Learn network security, penetration testing, and ethical hacking techniques while preparing for industry certifications.",
  },
]

export default function TrainingCells() {
  const [selectedCell, setSelectedCell] = useState<TrainingCell | null>(null)

  const formatText = (text: string) => {
    return text.split("\n").map((line, index) => {
      // Replace **text** with bold formatting
      const formattedLine = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      return (
        <span key={index}>
          <span dangerouslySetInnerHTML={{ __html: formattedLine }} />
          {index < text.split("\n").length - 1 && <br />}
        </span>
      )
    })
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Training Cells</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Specialized learning paths designed to master different aspects of IT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {trainingCells.map((cell) => (
            <Dialog key={cell.id}>
              <DialogTrigger asChild>
                <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer group h-full flex flex-col">
                  <CardHeader className="text-center pb-4 flex-shrink-0">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${cell.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-white">{cell.icon}</div>
                    </div>
                    <CardTitle className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors duration-300 min-h-[3.5rem] flex items-center justify-center">
                      {cell.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex items-center justify-center">
                    <p className="text-gray-400 text-sm text-center leading-relaxed w-full">{cell.description}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${cell.gradient} rounded-full flex items-center justify-center`}
                    >
                      <div className="text-white">{cell.icon}</div>
                    </div>
                    <DialogTitle className="text-2xl font-bold text-white">{cell.title}</DialogTitle>
                  </div>
                </DialogHeader>
                <div className="space-y-6">
                  {cell.goal && (
                    <div>
                      <h4 className="text-lg font-semibold text-purple-400 mb-3 flex items-center gap-2">
                        <Target className="h-5 w-5" />
                        Goal
                      </h4>
                      <p className="text-gray-300 leading-relaxed">{cell.goal}</p>
                    </div>
                  )}
                  {cell.keyActivities && (
                    <div>
                      <h4 className="text-lg font-semibold text-purple-400 mb-3 flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Key Activities
                      </h4>
                      <div className="text-gray-300 leading-relaxed">{formatText(cell.keyActivities)}</div>
                    </div>
                  )}
                  {!cell.goal && !cell.keyActivities && (
                    <div>
                      <h4 className="text-lg font-semibold text-purple-400 mb-3">Year Plan</h4>
                      <p className="text-gray-300 leading-relaxed">{cell.yearPlan}</p>
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
