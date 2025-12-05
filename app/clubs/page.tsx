"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Users, MapPin, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/layout/navbar"

export default function ClubsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const clubs = [
    {
      id: 1,
      name: "Tech Club",
      members: 145,
      image: "💻",
      description: "For all tech enthusiasts and developers",
      events: 8,
      nextEvent: "Hackathon - Nov 15",
    },
    {
      id: 2,
      name: "Photography Club",
      members: 67,
      image: "📸",
      description: "Capture moments and share your perspective",
      events: 5,
      nextEvent: "Photo Walk - Nov 18",
    },
    {
      id: 3,
      name: "Debate Club",
      members: 89,
      image: "🎤",
      description: "Sharpen your speaking and argumentation skills",
      events: 6,
      nextEvent: "Competition - Nov 22",
    },
    {
      id: 4,
      name: "Art Club",
      members: 52,
      image: "🎨",
      description: "Express yourself through various art forms",
      events: 4,
      nextEvent: "Exhibition - Nov 25",
    },
    {
      id: 5,
      name: "Music Club",
      members: 98,
      image: "🎵",
      description: "For musicians and music lovers",
      events: 7,
      nextEvent: "Concert - Nov 20",
    },
    {
      id: 6,
      name: "Sports Club",
      members: 156,
      image: "⚽",
      description: "Stay active and have fun with sports",
      events: 10,
      nextEvent: "Tournament - Nov 17",
    },
  ]

  const filteredClubs = clubs.filter(
    (club) =>
      club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      club.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-6">Student Clubs</h1>

          {/* Search */}
          <div className="flex gap-4 mb-6 flex-col md:flex-row">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search clubs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">Create Club</Button>
          </div>
        </div>

        {/* Clubs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClubs.map((club) => (
            <Card
              key={club.id}
              className="overflow-hidden hover:shadow-lg transition-all hover:scale-105 duration-300 cursor-pointer"
            >
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 h-40 flex items-center justify-center text-5xl">
                {club.image}
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 text-lg">{club.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{club.description}</p>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    {club.members} members
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {club.events} events
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 font-medium">
                    <MapPin className="w-4 h-4" />
                    {club.nextEvent}
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">Join Club</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredClubs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No clubs found. Try a different search.</p>
          </div>
        )}
      </main>
    </div>
  )
}
