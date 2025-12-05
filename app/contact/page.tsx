"use client"

import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">We'd love to hear from you. Reach out to us anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">support@campushub.edu</p>
              <Button variant="outline" className="w-full bg-transparent">
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <CardTitle>Chat</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Live chat available 24/7</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Chat</Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <CardTitle>Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">+1 (555) 123-4567</p>
              <Button variant="outline" className="w-full bg-transparent">
                Call Now
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <textarea
                  placeholder="Your message"
                  rows={5}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}
