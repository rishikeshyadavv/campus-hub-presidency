"use client"

import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "How to Start Trading on CampusHub",
      excerpt: "Learn the basics of listing items and finding great trades on our platform.",
      category: "Tutorial",
      date: "Nov 20, 2025",
    },
    {
      id: 2,
      title: "Best Practices for Club Management",
      excerpt: "Tips and tricks for organizing events, managing budgets, and engaging club members.",
      category: "Guide",
      date: "Nov 18, 2025",
    },
    {
      id: 3,
      title: "Community Spotlight: Tech Club Hackathon",
      excerpt: "Celebrating the success of our largest hackathon event this semester.",
      category: "News",
      date: "Nov 15, 2025",
    },
    {
      id: 4,
      title: "Safety Tips for Trading Online",
      excerpt: "Important guidelines to ensure safe and secure transactions on CampusHub.",
      category: "Safety",
      date: "Nov 12, 2025",
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-12 w-full">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">CampusHub Blog</h1>
          <p className="text-lg text-muted-foreground">Latest news, tips, and stories from our community.</p>
        </div>

        <div className="grid gap-6">
          {posts.map((post) => (
            <Link key={post.id} href="#" className="group">
              <Card className="hover:shadow-lg hover:border-primary transition-all cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
