"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Mail } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "RISHIKESH YADAV",
      role: "Head",
      description: "Project Lead & Architecture",
      email: "rishikesh@campushub.com",
    },
    {
      name: "MOHAMMED FARHAN AHMED",
      role: "Developer",
      description: "Full Stack Development",
      email: "farhan@campushub.com",
    },
    {
      name: "M.KUNAL KOTHARI",
      role: "Developer",
      description: "Frontend & UI/UX",
      email: "kunal@campushub.com",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/dashboard">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Button>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">About CampusHub</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            CampusHub is a comprehensive digital platform designed to enhance student life through seamless marketplace
            trading and efficient club management. Our mission is to connect students and streamline campus activities.
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">BarterTrade Marketplace</h3>
              <p className="text-muted-foreground">
                Buy, sell, and trade items with fellow students. Connect with the community and find great deals on
                campus.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Club Management</h3>
              <p className="text-muted-foreground">
                Organize events, manage budgets, and coordinate club activities with an intuitive low-code management
                system.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Messaging System</h3>
              <p className="text-muted-foreground">
                Communicate directly with other students through our integrated messaging platform.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Admin Dashboard</h3>
              <p className="text-muted-foreground">
                Comprehensive moderation and analytics tools for platform administrators.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-8">Development Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mb-4">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm font-semibold text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.description}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="text-primary hover:underline text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Contact
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Technology Stack</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="font-semibold text-foreground mb-2">Frontend</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Next.js 16</li>
                  <li>React 19</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">UI Components</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>shadcn/ui</li>
                  <li>Lucide Icons</li>
                  <li>Recharts</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Backend</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Next.js API Routes</li>
                  <li>TypeScript</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Deployment</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Vercel</li>
                  <li>Edge Functions</li>
                  <li>Serverless</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground mb-4">
            Designed and developed by RISHIKESH YADAV (Head), MOHAMMED FARHAN AHMED, M.KUNAL KOTHARI
          </p>
          <p className="text-sm text-muted-foreground">© 2025 CampusHub. All rights reserved.</p>
        </div>
      </div>
    </main>
  )
}
