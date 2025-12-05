"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, Trash2, CheckCircle } from "lucide-react"

interface Notification {
  id: number
  type: "trade" | "message" | "event" | "approval"
  title: string
  message: string
  timestamp: string
  read: boolean
}

const mockNotifications: Notification[] = [
  {
    id: 1,
    type: "trade",
    title: "Trade Completed",
    message: "Your trade with Sarah M. has been completed successfully",
    timestamp: "5 min ago",
    read: false,
  },
  {
    id: 2,
    type: "message",
    title: "New Message",
    message: "John D. sent you a message about the textbook",
    timestamp: "15 min ago",
    read: false,
  },
  {
    id: 3,
    type: "event",
    title: "Event Reminder",
    message: "Tech Talk: AI in Education starts in 2 hours",
    timestamp: "2 hours ago",
    read: true,
  },
  {
    id: 4,
    type: "approval",
    title: "Event Approved",
    message: "Your event 'Coding Workshop' has been approved",
    timestamp: "1 day ago",
    read: true,
  },
]

export default function NotificationCenter() {
  const [notifications, setNotifications] = useState(mockNotifications)
  const [filter, setFilter] = useState<"all" | "unread">("all")

  const filteredNotifications = filter === "unread" ? notifications.filter((n) => !n.read) : notifications

  const unreadCount = notifications.filter((n) => !n.read).length

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "trade":
        return "🔄"
      case "message":
        return "💬"
      case "event":
        return "📅"
      case "approval":
        return "✅"
      default:
        return "🔔"
    }
  }

  const markAsRead = (id: number) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5" />
          <h2 className="text-2xl font-bold">Notifications</h2>
          {unreadCount > 0 && (
            <Badge variant="destructive" className="ml-2">
              {unreadCount}
            </Badge>
          )}
        </div>
        <div className="flex gap-2">
          <Button variant={filter === "all" ? "default" : "outline"} size="sm" onClick={() => setFilter("all")}>
            All
          </Button>
          <Button variant={filter === "unread" ? "default" : "outline"} size="sm" onClick={() => setFilter("unread")}>
            Unread
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        {filteredNotifications.length === 0 ? (
          <Card>
            <CardContent className="text-center py-8">
              <p className="text-muted-foreground">No notifications</p>
            </CardContent>
          </Card>
        ) : (
          filteredNotifications.map((notification) => (
            <Card key={notification.id} className={notification.read ? "opacity-60" : "border-primary"}>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="text-2xl mt-1">{getNotificationIcon(notification.type)}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{notification.title}</h3>
                      {!notification.read && (
                        <Badge variant="default" className="text-xs">
                          New
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
                    <p className="text-xs text-muted-foreground">{notification.timestamp}</p>
                  </div>
                  <div className="flex gap-2">
                    {!notification.read && (
                      <Button variant="ghost" size="sm" onClick={() => markAsRead(notification.id)} className="gap-1">
                        <CheckCircle className="w-4 h-4" />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteNotification(notification.id)}
                      className="gap-1 text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
