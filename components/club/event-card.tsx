"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, DollarSign, Users } from "lucide-react"
import EventDetailsModal from "./event-details-modal"
import EditEventModal from "./edit-event-modal"

interface EventCardProps {
  event: {
    id: number
    title: string
    date: string
    time: string
    venue: string
    budget: number
    status: "approved" | "pending" | "rejected"
    volunteers: number
  }
}

export default function EventCard({ event }: EventCardProps) {
  const [showDetails, setShowDetails] = useState(false)
  const [showEdit, setShowEdit] = useState(false)

  const statusColors = {
    approved: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    rejected: "bg-red-100 text-red-800",
  }

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <CardTitle className="text-lg">{event.title}</CardTitle>
            <Badge className={statusColors[event.status]}>
              {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span>
              {event.date} at {event.time}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span>{event.venue}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="w-4 h-4 text-muted-foreground" />
            <span>${event.budget}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span>{event.volunteers} volunteers</span>
          </div>
        </CardContent>

        <CardFooter className="gap-2">
          <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setShowEdit(true)}>
            Edit
          </Button>
          <Button className="flex-1" onClick={() => setShowDetails(true)}>
            View Details
          </Button>
        </CardFooter>
      </Card>

      <EventDetailsModal event={event} open={showDetails} onOpenChange={setShowDetails} />
      <EditEventModal event={event} open={showEdit} onOpenChange={setShowEdit} />
    </>
  )
}
