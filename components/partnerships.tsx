"use client"

import { Card } from "@/components/ui/card"

interface Partner {
  id: number
  name: string
  logo: string
}

const partners: Partner[] = [
  {
    id: 1,
    name: "Ibn Zohr University",
    logo: "/images/partners/ibn-zohr-logo.png",
  },
  {
    id: 2,
    name: "ENSA Agadir",
    logo: "/images/partners/ensa-logo.png",
  },
  {
    id: 3,
    name: "Code 212",
    logo: "/images/partners/code212-logo.png",
  },
  {
    id: 4,
    name: "ADE",
    logo: "/images/partners/ade-logo.png",
  },
  {
    id: 5,
    name: "DataCamp",
    logo: "/images/partners/datacamp-logo.png",
  },
]

export default function Partnerships() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Partners</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Collaborating with leading organizations to enhance our impact
          </p>
          <p className="text-sm text-gray-500 lg:hidden">← Scroll horizontally to see all partners →</p>
        </div>

        <div className="partnership-scroll-container">
          <div className="flex gap-6 w-max lg:w-full lg:justify-center px-2 py-2">
            {partners.map((partner) => (
              <Card
                key={partner.id}
                className="flex-shrink-0 w-48 h-64 bg-white/10 backdrop-blur-sm border-gray-700 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center p-6"
              >
                <div className="w-32 h-32 mb-4 flex items-center justify-center">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="w-full h-full object-contain mix-blend-normal"
                    style={{ filter: "drop-shadow(0 0 10px rgba(0,0,0,0.3))" }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `/placeholder.svg?height=200&width=200&text=${encodeURIComponent(partner.name.replace(/\s+/g, "+"))}`
                    }}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-white font-semibold text-sm leading-tight">{partner.name}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
