"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AdminNavbar from "@/components/admin/navbar"
import UserManagement from "@/components/admin/user-management"
import ListingModeration from "@/components/admin/listing-moderation"
import EventApprovals from "@/components/admin/event-approvals"
import DisputeResolution from "@/components/admin/dispute-resolution"
import Analytics from "@/components/admin/analytics"

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <AdminNavbar />
      <main className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2">Manage users, content, and platform operations</p>
        </div>

        <Tabs defaultValue="analytics" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="listings">Listings</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="disputes">Disputes</TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="mt-6">
            <Analytics />
          </TabsContent>

          <TabsContent value="users" className="mt-6">
            <UserManagement />
          </TabsContent>

          <TabsContent value="listings" className="mt-6">
            <ListingModeration />
          </TabsContent>

          <TabsContent value="events" className="mt-6">
            <EventApprovals />
          </TabsContent>

          <TabsContent value="disputes" className="mt-6">
            <DisputeResolution />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
