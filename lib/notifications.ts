// Notification service for handling real-time notifications
export interface NotificationPayload {
  type: "trade" | "message" | "event" | "approval"
  title: string
  message: string
  userId: number
  relatedId?: number
}

export async function sendNotification(payload: NotificationPayload) {
  try {
    const response = await fetch("/api/notifications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error("Failed to send notification")
    }

    return await response.json()
  } catch (error) {
    console.error("Notification error:", error)
  }
}

export async function markNotificationAsRead(notificationId: number) {
  try {
    const response = await fetch("/api/notifications", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ notificationId, read: true }),
    })

    if (!response.ok) {
      throw new Error("Failed to mark notification as read")
    }

    return await response.json()
  } catch (error) {
    console.error("Error marking notification as read:", error)
  }
}
