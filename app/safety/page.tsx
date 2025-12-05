"use client"

import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
        <h1 className="text-4xl font-bold mb-8">Safety Guidelines</h1>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Trading Safety</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Always meet in public, well-lit places</li>
                <li>Verify the condition of items before trading</li>
                <li>Trust your instincts about other users</li>
                <li>Never share personal financial information</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Account Security</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Use a strong, unique password</li>
                <li>Enable two-factor authentication</li>
                <li>Don't share your login credentials</li>
                <li>Report suspicious activity immediately</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Reporting Issues</h2>
              <p className="text-muted-foreground mb-4">
                If you encounter any safety concerns or suspicious behavior, please report it to our safety team
                immediately at safety@campushub.edu
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
