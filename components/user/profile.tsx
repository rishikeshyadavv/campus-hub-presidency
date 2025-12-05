"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Shield } from "lucide-react"
import { useRouter } from "next/navigation"

export default function UserProfile() {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "Sarah Mitchell",
    email: "sarah.mitchell@college.edu",
    studentId: "123456789",
    bio: "Computer Science major, love trading books and organizing events",
    reputation: 4.8,
    reviews: 24,
    verified: true,
  })

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" })
      router.push("/")
    } catch (error) {
      console.error("[v0] Logout error:", error)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex gap-4">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
            SM
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">{profile.name}</h2>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{profile.reputation}</span>
                <span className="text-sm text-muted-foreground">({profile.reviews} reviews)</span>
              </div>
              {profile.verified && (
                <Badge className="gap-1">
                  <Shield className="w-3 h-3" />
                  Verified
                </Badge>
              )}
            </div>
          </div>
        </div>
        <Button onClick={() => setIsEditing(!isEditing)}>{isEditing ? "Save" : "Edit Profile"}</Button>
      </div>

      <Tabs defaultValue="info" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="info">Information</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="info">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Full Name</Label>
                <Input value={profile.name} disabled={!isEditing} />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input value={profile.email} disabled={!isEditing} />
              </div>
              <div className="space-y-2">
                <Label>Student ID</Label>
                <Input value={profile.studentId} disabled={!isEditing} />
              </div>
              <div className="space-y-2">
                <Label>Bio</Label>
                <Input value={profile.bio} disabled={!isEditing} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>Your Activity</CardTitle>
              <CardDescription>Trades, listings, and events</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Active Listings</p>
                  <p className="text-sm text-muted-foreground">Items you're trading</p>
                </div>
                <span className="text-2xl font-bold">5</span>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Completed Trades</p>
                  <p className="text-sm text-muted-foreground">Successful exchanges</p>
                </div>
                <span className="text-2xl font-bold">12</span>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Events Organized</p>
                  <p className="text-sm text-muted-foreground">Club events created</p>
                </div>
                <span className="text-2xl font-bold">3</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive updates about trades</p>
                </div>
                <input type="checkbox" defaultChecked className="w-4 h-4" />
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Message Notifications</p>
                  <p className="text-sm text-muted-foreground">Get alerts for new messages</p>
                </div>
                <input type="checkbox" defaultChecked className="w-4 h-4" />
              </div>
              <Button variant="destructive" className="w-full mt-4" onClick={handleLogout}>
                Logout
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
