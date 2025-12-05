"use client"

import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing and using CampusHub, you accept and agree to be bound by the terms and provision of this
                agreement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">2. User Responsibilities</h2>
              <p className="text-muted-foreground mb-4">
                Users are responsible for maintaining the confidentiality of their account and password. You agree to
                accept responsibility for all activities that occur under your account.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">3. Prohibited Activities</h2>
              <p className="text-muted-foreground mb-4">
                You may not use CampusHub to engage in any illegal activities, harassment, discrimination, or any
                activity that violates our community standards.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                CampusHub is provided "as is" without warranties of any kind. We are not liable for any damages arising
                from your use of the platform.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
