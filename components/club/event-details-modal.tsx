"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, DollarSign, Users } from "lucide-react"

interface EventDetailsModalProps {
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
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function EventDetailsModal({ event, open, onOpenChange }: EventDetailsModalProps) {
  const statusColors = {
    approved: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    rejected: "bg-red-100 text-red-800",
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{event.title}</DialogTitle>
          <DialogDescription>Event details and information</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Status</span>
            <Badge className={statusColors[event.status]}>
              {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
            </Badge>
          </div>

          <div className="space-y-3 border-t pt-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Date & Time</p>
                <p className="text-sm font-medium">
                  {event.date} at {event.time}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Venue</p>
                <p className="text-sm font-medium">{event.venue}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Budget</p>
                <p className="text-sm font-medium">${event.budget}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Volunteers</p>
                <p className="text-sm font-medium">{event.volunteers} registered</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 pt-4">
            <Button variant="outline" className="flex-1 bg-transparent" onClick={() => onOpenChange(false)}>
              Close
            </Button>
            <Button className="flex-1">Register</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
