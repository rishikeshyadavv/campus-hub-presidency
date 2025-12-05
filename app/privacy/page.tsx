"use client"

import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect information you provide directly to us, such as when you create an account, post listings, or
                participate in clubs. This includes your name, email address, profile information, and communication
                content.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to provide, maintain, and improve our services. This includes
                facilitating trades, managing club activities, sending communications, and preventing fraud.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">4. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at privacy@campushub.edu
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
