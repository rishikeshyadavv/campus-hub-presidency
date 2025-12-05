"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/layout/navbar"
import BarterMarketplace from "@/components/barter/marketplace"
import ClubDashboard from "@/components/club/dashboard"
import UserProfile from "@/components/user/profile"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("marketplace")

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="marketplace">BarterTrade</TabsTrigger>
            <TabsTrigger value="clubs">Club Hub</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="marketplace">
            <BarterMarketplace />
          </TabsContent>

          <TabsContent value="clubs">
            <ClubDashboard />
          </TabsContent>

          <TabsContent value="profile">
            <UserProfile />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
