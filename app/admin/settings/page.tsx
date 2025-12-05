"use client"

import { useState } from "react"
import AdminNavbar from "@/components/admin/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Bell, SettingsIcon } from "lucide-react"

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    autoApproveListings: false,
    requireEventApproval: true,
    suspiciousActivityAlerts: true,
    dailyReports: true,
  })

  const handleToggle = (key: string) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminNavbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Admin Settings</h1>
          <p className="text-muted-foreground mt-2">Configure platform-wide settings and policies</p>
        </div>

        <Tabs defaultValue="moderation" className="w-full max-w-2xl">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="moderation" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">Moderation</span>
            </TabsTrigger>
            <TabsTrigger value="alerts" className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              <span className="hidden sm:inline">Alerts</span>
            </TabsTrigger>
            <TabsTrigger value="system" className="flex items-center gap-2">
              <SettingsIcon className="w-4 h-4" />
              <span className="hidden sm:inline">System</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="moderation" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Moderation Settings</CardTitle>
                <CardDescription>Control content moderation policies</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Auto-Approve Listings</p>
                    <p className="text-sm text-muted-foreground">Automatically approve new listings</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.autoApproveListings}
                    onChange={() => handleToggle("autoApproveListings")}
                    className="w-4 h-4 cursor-pointer"
                  />
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Require Event Approval</p>
                    <p className="text-sm text-muted-foreground">Require admin approval for events</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.requireEventApproval}
                    onChange={() => handleToggle("requireEventApproval")}
                    className="w-4 h-4 cursor-pointer"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Alert Settings</CardTitle>
                <CardDescription>Configure admin notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Suspicious Activity Alerts</p>
                    <p className="text-sm text-muted-foreground">Get notified of suspicious behavior</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.suspiciousActivityAlerts}
                    onChange={() => handleToggle("suspiciousActivityAlerts")}
                    className="w-4 h-4 cursor-pointer"
                  />
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Daily Reports</p>
                    <p className="text-sm text-muted-foreground">Receive daily platform reports</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.dailyReports}
                    onChange={() => handleToggle("dailyReports")}
                    className="w-4 h-4 cursor-pointer"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>Platform configuration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Platform Name</Label>
                  <Input defaultValue="CampusHub" />
                </div>
                <div className="space-y-2">
                  <Label>Support Email</Label>
                  <Input type="email" defaultValue="support@campushub.edu" />
                </div>
                <Button className="w-full mt-6">Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
