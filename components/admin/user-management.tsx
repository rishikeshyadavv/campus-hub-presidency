"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Ban, CheckCircle } from "lucide-react"

const mockUsers = [
  { id: 1, name: "Sarah Mitchell", email: "sarah@college.edu", status: "active", verified: true, trades: 12 },
  { id: 2, name: "John Davis", email: "john@college.edu", status: "active", verified: true, trades: 8 },
  { id: 3, name: "Emma Wilson", email: "emma@college.edu", status: "suspended", verified: true, trades: 5 },
  { id: 4, name: "Mike Chen", email: "mike@college.edu", status: "active", verified: false, trades: 2 },
]

export default function UserManagement() {
  const [searchQuery, setSearchQuery] = useState("")
  const [users, setUsers] = useState(mockUsers)

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search users by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Accounts</CardTitle>
          <CardDescription>Manage and monitor user accounts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                  <div className="flex gap-2 mt-2">
                    <Badge variant={user.status === "active" ? "default" : "destructive"}>{user.status}</Badge>
                    {user.verified && (
                      <Badge variant="outline" className="gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Verified
                      </Badge>
                    )}
                    <Badge variant="secondary">{user.trades} trades</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                  <Button variant={user.status === "active" ? "destructive" : "default"} size="sm" className="gap-1">
                    <Ban className="w-4 h-4" />
                    {user.status === "active" ? "Suspend" : "Restore"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
