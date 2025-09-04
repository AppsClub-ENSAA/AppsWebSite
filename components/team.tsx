"use client"

import { Card } from "@/components/ui/card"
import { Linkedin } from "lucide-react"

interface TeamMember {
  id: number
  name: string
  role: string
  quote: string
  linkedin: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Youssef Taguejgalet",
    role: "President",
    quote: "Leading with purpose, not pressure.",
    linkedin: "https://linkedin.com/in/youssef-taguejgalet",
    image: "/images/youssef-nobg.png",
  },
  {
    id: 2,
    name: "Nassima Charite",
    role: "Vice President",
    quote: "Together, we turn ideas into action.",
    linkedin: "https://linkedin.com/in/nassima-charite",
    image: "/placeholder.svg?height=400&width=250&text=Nassima",
  },
  {
    id: 3,
    name: "Hajar Baais",
    role: "Secretary",
    quote: "Alone we dream, together we achieve.",
    linkedin: "https://linkedin.com/in/hajar-baais",
    image: "/placeholder.svg?height=400&width=250&text=Hajar+B",
  },
  {
    id: 4,
    name: "Reda Erraoui",
    role: "Treasurer",
    quote: "Behind every successful project is a team and a balanced budget.",
    linkedin: "https://linkedin.com/in/reda-erraoui",
    image: "/placeholder.svg?height=400&width=250&text=Reda",
  },
  {
    id: 5,
    name: "Lahoussine El Hossni",
    role: "Logistics Officer",
    quote: "Behind the scenes, ahead of the need.",
    linkedin: "https://linkedin.com/in/lahoussine-elhossni",
    image: "/placeholder.svg?height=400&width=250&text=Lahoussine",
  },
  {
    id: 6,
    name: "Hiba Ait Belmoumene",
    role: "Technical Lead",
    quote: "Tech alone isn't enough. That's why I lead.",
    linkedin: "https://linkedin.com/in/hiba-aitbelmoumene",
    image: "/placeholder.svg?height=400&width=250&text=Hiba",
  },
  {
    id: 7,
    name: "Houcine Gahboub",
    role: "Training Officer",
    quote: "The more you know, the more you realize you don't know.",
    linkedin: "https://linkedin.com/in/houcine-gahboub",
    image: "/placeholder.svg?height=400&width=250&text=Houcine",
  },
  {
    id: 8,
    name: "Zahira Mezzi",
    role: "Training Assistant",
    quote: "Here to help you grow.",
    linkedin: "https://linkedin.com/in/zahira-mezzi",
    image: "/placeholder.svg?height=400&width=250&text=Zahira",
  },
  {
    id: 9,
    name: "Hajar Azaou",
    role: "Training Assistant",
    quote: "Here to guide you as you learn and grow.",
    linkedin: "https://linkedin.com/in/hajar-azaou",
    image: "/placeholder.svg?height=400&width=250&text=Hajar+A",
  },
  {
    id: 10,
    name: "Othmane Elarroussi",
    role: "CP Cell Lead",
    quote: "Code. Compete. Improve.",
    linkedin: "https://linkedin.com/in/othmane-elarroussi",
    image: "/placeholder.svg?height=400&width=250&text=Othmane",
  },
  {
    id: 11,
    name: "Yassine Moutaoikkil Basskar",
    role: "Data Cell Lead",
    quote: "Data is our soldier. Intelligence is our victory.",
    linkedin: "https://linkedin.com/in/yassine-moutaoikkil",
    image: "/placeholder.svg?height=400&width=250&text=Yassine",
  },
  {
    id: 12,
    name: "Ismail Oubella",
    role: "Cybersecurity Cell Lead",
    quote: "Building, guiding, securing. That's mission.",
    linkedin: "https://linkedin.com/in/ismail-oubella",
    image: "/placeholder.svg?height=400&width=250&text=Ismail",
  },
  {
    id: 13,
    name: "Mohamed Amine Bougraou",
    role: "Design Officer",
    quote: "Less noise. More impact.",
    linkedin: "https://linkedin.com/in/mohamed-amine-bougraou",
    image: "/placeholder.svg?height=400&width=250&text=Mohamed+A",
  },
  {
    id: 14,
    name: "Mohamed Essadik El Maghraoui",
    role: "Photographer",
    quote: "Capturing the soul of Apps Club.",
    linkedin: "https://linkedin.com/in/mohamed-essadik-elmaghraoui",
    image: "/placeholder.svg?height=400&width=250&text=Mohamed+E",
  },
]

export default function Team() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Team</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Meet the passionate individuals driving AppsClub's mission forward
          </p>
          <p className="text-sm text-gray-500">← Scroll horizontally to see all team members →</p>
        </div>

        <div className="team-scroll-container">
          <div className="flex gap-6 w-max px-2 py-2">
            {teamMembers.map((member) => (
              <Card
                key={member.id}
                className="team-card-portrait bg-gray-800 border-gray-700 hover:bg-gray-750 relative"
              >
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 left-3 z-10 text-blue-400 hover:text-blue-300 transition-colors duration-200 bg-gray-900/80 p-1.5 rounded-full"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <div className="image-container-portrait">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-md"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `/placeholder.svg?height=400&width=250&text=${encodeURIComponent(member.name.split(" ")[0])}`
                    }}
                  />
                </div>
                <div className="text-content-portrait">
                  <div className="member-name-portrait">{member.name}</div>
                  <div className="member-role-portrait text-purple-400">{member.role}</div>
                  <div className="member-quote-portrait">"{member.quote}"</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
