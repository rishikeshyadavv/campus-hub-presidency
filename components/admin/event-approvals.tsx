"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle } from "lucide-react"

const mockEvents = [
  { id: 1, title: "Tech Talk: AI in Education", club: "Tech Club", budget: 500, status: "pending" },
  { id: 2, title: "Coding Workshop", club: "Dev Club", budget: 300, status: "pending" },
  { id: 3, title: "Career Fair", club: "Career Services", budget: 2000, status: "approved" },
]

export default function EventApprovals() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Event Approvals</CardTitle>
          <CardDescription>Review and approve club events and budgets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockEvents.map((event) => (
              <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <p className="font-medium">{event.title}</p>
                  <p className="text-sm text-muted-foreground">{event.club}</p>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="secondary">${event.budget}</Badge>
                    <Badge variant={event.status === "pending" ? "secondary" : "default"}>{event.status}</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-1 bg-transparent">
                    <CheckCircle className="w-4 h-4" />
                    Approve
                  </Button>
                  <Button variant="destructive" size="sm" className="gap-1">
                    <XCircle className="w-4 h-4" />
                    Reject
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
