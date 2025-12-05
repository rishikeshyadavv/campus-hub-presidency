"use client"

import Navbar from "@/components/layout/navbar"
import NotificationCenter from "@/components/notifications/notification-center"

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <NotificationCenter />
      </main>
    </div>
  )
}
