"use client"

import { useState } from "react"
import Navbar from "@/components/layout/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Lock, User, Palette } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    messageNotifications: true,
    eventNotifications: true,
    darkMode: false,
    twoFactorAuth: false,
  })
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()

  const handleToggle = (key: string) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const handleDeleteAccount = async () => {
    setIsDeleting(true)
    try {
      const response = await fetch("/api/auth/delete-account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
      if (response.ok) {
        router.push("/")
      } else {
        alert("Failed to delete account")
      }
    } catch (error) {
      console.error("Delete account error:", error)
      alert("Error deleting account")
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-2">Manage your account preferences and notifications</p>
        </div>

        <Tabs defaultValue="notifications" className="w-full max-w-2xl">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              <span className="hidden sm:inline">Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              <span className="hidden sm:inline">Privacy</span>
            </TabsTrigger>
            <TabsTrigger value="account" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Account</span>
            </TabsTrigger>
            <TabsTrigger value="appearance" className="flex items-center gap-2">
              <Palette className="w-4 h-4" />
              <span className="hidden sm:inline">Appearance</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Control how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive updates about trades and events</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.emailNotifications}
                    onChange={() => handleToggle("emailNotifications")}
                    className="w-4 h-4 cursor-pointer"
                  />
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Message Notifications</p>
                    <p className="text-sm text-muted-foreground">Get alerts for new messages</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.messageNotifications}
                    onChange={() => handleToggle("messageNotifications")}
                    className="w-4 h-4 cursor-pointer"
                  />
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Event Notifications</p>
                    <p className="text-sm text-muted-foreground">Be notified about club events</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.eventNotifications}
                    onChange={() => handleToggle("eventNotifications")}
                    className="w-4 h-4 cursor-pointer"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Privacy & Security</CardTitle>
                <CardDescription>Manage your account security</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.twoFactorAuth}
                    onChange={() => handleToggle("twoFactorAuth")}
                    className="w-4 h-4 cursor-pointer"
                  />
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Change Password
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="account" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Email Address</Label>
                  <Input type="email" placeholder="your.email@college.edu" />
                </div>
                <div className="space-y-2">
                  <Label>Student ID</Label>
                  <Input placeholder="123456789" disabled />
                </div>

                {!showDeleteConfirm ? (
                  <Button variant="destructive" className="w-full mt-6" onClick={() => setShowDeleteConfirm(true)}>
                    Delete Account
                  </Button>
                ) : (
                  <div className="mt-6 p-4 border border-destructive rounded-lg bg-destructive/5">
                    <p className="font-medium text-destructive mb-4">Are you sure? This action cannot be undone.</p>
                    <div className="flex gap-2">
                      <Button
                        variant="destructive"
                        className="flex-1"
                        onClick={handleDeleteAccount}
                        disabled={isDeleting}
                      >
                        {isDeleting ? "Deleting..." : "Yes, Delete My Account"}
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 bg-transparent"
                        onClick={() => setShowDeleteConfirm(false)}
                        disabled={isDeleting}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appearance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>Customize how the app looks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Dark Mode</p>
                    <p className="text-sm text-muted-foreground">Use dark theme for the interface</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.darkMode}
                    onChange={() => handleToggle("darkMode")}
                    className="w-4 h-4 cursor-pointer"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
