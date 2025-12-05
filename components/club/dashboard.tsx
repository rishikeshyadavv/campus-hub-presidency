"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Calendar, DollarSign, Users } from "lucide-react"
import EventCard from "./event-card"
import BudgetTracker from "./budget-tracker"
import CreateEventModal from "./create-event-modal"

const mockEvents = [
  {
    id: 1,
    title: "Tech Talk: AI in Education",
    date: "2025-11-15",
    time: "18:00",
    venue: "Auditorium A",
    budget: 500,
    status: "approved",
    volunteers: 12,
  },
  {
    id: 2,
    title: "Coding Workshop",
    date: "2025-11-22",
    time: "14:00",
    venue: "Lab 201",
    budget: 300,
    status: "pending",
    volunteers: 8,
  },
]

export default function ClubDashboard() {
  const [showCreateEvent, setShowCreateEvent] = useState(false)
  const [events, setEvents] = useState(mockEvents)

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Club Hub</h2>
          <p className="text-muted-foreground mt-1">Manage events, budgets, and volunteers</p>
        </div>
        <Button onClick={() => setShowCreateEvent(true)} className="gap-2">
          <Plus className="w-4 h-4" />
          Create Event
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{events.length}</div>
            <p className="text-xs text-muted-foreground mt-1">This semester</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Total Budget
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${events.reduce((sum, e) => sum + e.budget, 0)}</div>
            <p className="text-xs text-muted-foreground mt-1">Allocated</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="w-4 h-4" />
              Total Volunteers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{events.reduce((sum, e) => sum + e.volunteers, 0)}</div>
            <p className="text-xs text-muted-foreground mt-1">Signed up</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="events" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="budget">Budget</TabsTrigger>
          <TabsTrigger value="volunteers">Volunteers</TabsTrigger>
        </TabsList>

        <TabsContent value="events" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="budget">
          <BudgetTracker events={events} />
        </TabsContent>

        <TabsContent value="volunteers">
          <Card>
            <CardHeader>
              <CardTitle>Volunteer Management</CardTitle>
              <CardDescription>Track and manage event volunteers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{event.title}</p>
                      <p className="text-sm text-muted-foreground">{event.volunteers} volunteers</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <CreateEventModal open={showCreateEvent} onOpenChange={setShowCreateEvent} />
    </div>
  )
}
