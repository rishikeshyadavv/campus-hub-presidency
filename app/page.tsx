"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  TrendingUp,
  Users,
  Calendar,
  MessageSquare,
  Star,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react"
import Link from "next/link"
import LoginForm from "@/components/auth/login-form"
import SignupForm from "@/components/auth/signup-form"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)
  const [currentListingIndex, setCurrentListingIndex] = useState(0)
  const [currentEventIndex, setCurrentEventIndex] = useState(0)
  const [selectedListing, setSelectedListing] = useState(null)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [stats, setStats] = useState([
    { label: "Active Traders", value: 0, target: 2340, icon: Users },
    { label: "Items Listed", value: 0, target: 1205, icon: TrendingUp },
    { label: "Clubs", value: 0, target: 87, icon: Users },
    { label: "Events This Month", value: 0, target: 156, icon: Calendar },
  ])
  const [expandedFeature, setExpandedFeature] = useState(null)

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      if (stat.value < stat.target) {
        return setInterval(() => {
          setStats((prev) => {
            const newStats = [...prev]
            const increment = Math.ceil(stat.target / 50)
            newStats[index].value = Math.min(newStats[index].value + increment, stat.target)
            return newStats
          })
        }, 30)
      }
    })

    return () => intervals.forEach((interval) => clearInterval(interval))
  }, [])

  const handleLoginSuccess = () => {
    setIsLoggedIn(true)
    setShowLoginModal(false)
    router.push("/dashboard")
  }

  const handleSignupSuccess = () => {
    setIsLoggedIn(true)
    setShowSignupModal(false)
    router.push("/dashboard")
  }

  // Mock data for featured items
  const featuredListings = [
    {
      id: 1,
      title: "Organic Chemistry Textbook",
      category: "Books",
      price: "Trade for Physics book",
      rating: 4.8,
      image: "📚",
      description: "Barely used, all notes included. Perfect condition.",
    },
    {
      id: 2,
      title: "Laptop Stand",
      category: "Electronics",
      price: "Trade for desk lamp",
      rating: 4.5,
      image: "💻",
      description: "Adjustable aluminum stand, great for ergonomics.",
    },
    {
      id: 3,
      title: "Bicycle",
      category: "Sports",
      price: "Trade for skateboard",
      rating: 5,
      image: "🚴",
      description: "Mountain bike, excellent condition, recently serviced.",
    },
    {
      id: 4,
      title: "Gaming Console",
      category: "Electronics",
      price: "Trade for headphones",
      rating: 4.9,
      image: "🎮",
      description: "Latest model with 2 controllers and games.",
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      name: "Tech Club Hackathon",
      date: "Nov 15",
      members: 45,
      image: "💻",
      description: "24-hour coding competition with prizes",
    },
    {
      id: 2,
      name: "Photography Walk",
      date: "Nov 18",
      members: 23,
      image: "📸",
      description: "Explore campus and capture beautiful moments",
    },
    {
      id: 3,
      name: "Debate Competition",
      date: "Nov 22",
      members: 32,
      image: "🎤",
      description: "Friendly debate tournament for all skill levels",
    },
    {
      id: 4,
      name: "Art Exhibition",
      date: "Nov 25",
      members: 18,
      image: "🎨",
      description: "Showcase student artwork and creative projects",
    },
  ]

  const features = [
    {
      id: 1,
      icon: TrendingUp,
      title: "Smart Trading",
      description: "Find exactly what you need with intelligent matching and recommendations",
      details: "Our AI-powered system learns your preferences and suggests perfect trades.",
    },
    {
      id: 2,
      icon: MessageSquare,
      title: "Direct Messaging",
      description: "Communicate securely with traders and club members in real-time",
      details: "End-to-end encrypted messaging keeps your conversations private and secure.",
    },
    {
      id: 3,
      icon: Star,
      title: "Trust & Safety",
      description: "Build your reputation with verified ratings and secure transactions",
      details: "Community-driven ratings and verified profiles ensure safe interactions.",
    },
  ]

  const nextListing = () => {
    setCurrentListingIndex((prev) => (prev + 1) % featuredListings.length)
  }

  const prevListing = () => {
    setCurrentListingIndex((prev) => (prev - 1 + featuredListings.length) % featuredListings.length)
  }

  const nextEvent = () => {
    setCurrentEventIndex((prev) => (prev + 1) % upcomingEvents.length)
  }

  const prevEvent = () => {
    setCurrentEventIndex((prev) => (prev - 1 + upcomingEvents.length) % upcomingEvents.length)
  }

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
        {/* Navigation */}
        <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                C
              </div>
              <span className="font-bold text-lg">CampusHub</span>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="hover:bg-secondary transition-colors bg-transparent"
                onClick={() => setShowLoginModal(true)}
              >
                Login
              </Button>
              <Button
                className="bg-blue-600 hover:bg-blue-700 transition-colors"
                onClick={() => setShowSignupModal(true)}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold text-foreground mb-6 text-balance">Trade, Connect, Organize</h1>
              <p className="text-xl text-muted-foreground mb-8 text-balance">
                Your all-in-one platform for student trading, club management, and campus community building.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 transition-all hover:shadow-lg hover:scale-105"
                  onClick={() => setShowSignupModal(true)}
                >
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:bg-secondary transition-all hover:scale-105 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: "📚", title: "BarterTrade", desc: "Exchange textbooks, electronics & more" },
                { emoji: "🎯", title: "Club Hub", desc: "Manage events & budgets" },
                { emoji: "💬", title: "Messaging", desc: "Connect with traders & members" },
                { emoji: "⭐", title: "Ratings", desc: "Build trust & reputation" },
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="p-6 text-center hover:shadow-lg hover:scale-105 transition-all cursor-pointer duration-300"
                >
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-secondary/30 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Growing Community</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="text-center hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-center mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.value.toLocaleString()}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Featured Listings - Carousel */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Listings</h2>
            <Link href="/marketplace">
              <Button variant="outline" className="hover:bg-secondary transition-colors bg-transparent">
                View All <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-3 gap-6">
              {[0, 1, 2].map((offset) => {
                const index = (currentListingIndex + offset) % featuredListings.length
                const listing = featuredListings[index]
                return (
                  <Card
                    key={listing.id}
                    className="overflow-hidden hover:shadow-lg transition-all cursor-pointer hover:scale-105 duration-300"
                    onClick={() => setSelectedListing(listing)}
                  >
                    <div className="bg-secondary/50 h-40 flex items-center justify-center text-5xl hover:scale-110 transition-transform">
                      {listing.image}
                    </div>
                    <CardContent className="p-4">
                      <Badge className="mb-3 bg-blue-100 text-blue-700 hover:bg-blue-100">{listing.category}</Badge>
                      <h3 className="font-semibold mb-2">{listing.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{listing.price}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{listing.rating}</span>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="hover:bg-blue-50 transition-colors bg-transparent"
                        >
                          View
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevListing}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextListing}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-all hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {featuredListings.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentListingIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentListingIndex ? "bg-blue-600 w-8" : "bg-gray-300 w-2 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events - Carousel */}
        <section className="bg-secondary/30 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Upcoming Events</h2>
              <Link href="/clubs">
                <Button variant="outline" className="hover:bg-background transition-colors bg-transparent">
                  View All <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="grid md:grid-cols-3 gap-6">
                {[0, 1, 2].map((offset) => {
                  const index = (currentEventIndex + offset) % upcomingEvents.length
                  const event = upcomingEvents[index]
                  return (
                    <Card
                      key={event.id}
                      className="overflow-hidden hover:shadow-lg transition-all cursor-pointer hover:scale-105 duration-300"
                      onClick={() => setSelectedEvent(event)}
                    >
                      <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 h-32 flex items-center justify-center text-5xl hover:scale-110 transition-transform">
                        {event.image}
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-3">{event.name}</h3>
                        <div className="space-y-2 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            {event.members} members
                          </div>
                        </div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors">Join Event</Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Carousel Controls */}
              <button
                onClick={prevEvent}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-all hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextEvent}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-all hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {upcomingEvents.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentEventIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentEventIndex ? "bg-blue-600 w-8" : "bg-gray-300 w-2 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Expandable */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose CampusHub?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.id}
                  className="text-center cursor-pointer group"
                  onClick={() => setExpandedFeature(expandedFeature === feature.id ? null : feature.id)}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 group-hover:scale-110 transition-all">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                  {expandedFeature === feature.id && (
                    <p className="text-sm text-muted-foreground mt-4 pt-4 border-t animate-fade-in">
                      {feature.details}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join CampusHub?</h2>
            <p className="text-lg mb-8 text-blue-100">
              Start trading, connecting, and organizing with your campus community today.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 transition-all hover:scale-105"
              onClick={() => setShowSignupModal(true)}
            >
              Sign Up Now <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-secondary/50 border-t py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {[
                {
                  title: "Product",
                  links: ["BarterTrade", "Club Hub", "Messaging"],
                },
                {
                  title: "Company",
                  links: ["About", "Blog", "Contact"],
                },
                {
                  title: "Legal",
                  links: ["Privacy", "Terms", "Safety"],
                },
                {
                  title: "Connect",
                  links: ["Twitter", "Instagram", "Discord"],
                },
              ].map((section, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold mb-4">{section.title}</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link
                          href="#"
                          className="hover:text-foreground hover:translate-x-1 transition-all inline-block"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="border-t pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; 2025 CampusHub. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Login Modal */}
        {showLoginModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
            <Card className="max-w-md w-full animate-scale-in">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-bold">Login to CampusHub</h2>
                <button
                  onClick={() => setShowLoginModal(false)}
                  className="hover:bg-secondary p-1 rounded transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <CardContent className="p-6">
                <LoginForm onSuccess={handleLoginSuccess} />
                <div className="mt-4 text-center text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <button
                    onClick={() => {
                      setShowLoginModal(false)
                      setShowSignupModal(true)
                    }}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Sign up
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Signup Modal */}
        {showSignupModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in overflow-y-auto">
            <Card className="max-w-md w-full animate-scale-in my-8">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-bold">Create Account</h2>
                <button
                  onClick={() => setShowSignupModal(false)}
                  className="hover:bg-secondary p-1 rounded transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <CardContent className="p-6">
                <SignupForm onSuccess={handleSignupSuccess} />
                <div className="mt-4 text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <button
                    onClick={() => {
                      setShowSignupModal(false)
                      setShowLoginModal(true)
                    }}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Login
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Listing Modal */}
        {selectedListing && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
            <Card className="max-w-md w-full animate-scale-in">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-bold">{selectedListing.title}</h2>
                <button
                  onClick={() => setSelectedListing(null)}
                  className="hover:bg-secondary p-1 rounded transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <CardContent className="p-6">
                <div className="text-6xl text-center mb-4">{selectedListing.image}</div>
                <Badge className="mb-3 bg-blue-100 text-blue-700">{selectedListing.category}</Badge>
                <p className="text-muted-foreground mb-4">{selectedListing.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{selectedListing.rating}</span>
                </div>
                <p className="font-semibold text-blue-600 mb-4">{selectedListing.price}</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Message Seller</Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Event Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
            <Card className="max-w-md w-full animate-scale-in">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-bold">{selectedEvent.name}</h2>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="hover:bg-secondary p-1 rounded transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <CardContent className="p-6">
                <div className="text-6xl text-center mb-4">{selectedEvent.image}</div>
                <p className="text-muted-foreground mb-4">{selectedEvent.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{selectedEvent.members} members attending</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Join Event</Button>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    )
  }
}
