import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const notifications = [
      {
        id: 1,
        type: "trade",
        title: "Trade Completed",
        message: "Your trade with John Doe has been completed",
        read: false,
        timestamp: new Date(Date.now() - 3600000).toISOString(),
      },
      {
        id: 2,
        type: "message",
        title: "New Message",
        message: "Jane Smith sent you a message",
        read: false,
        timestamp: new Date(Date.now() - 1800000).toISOString(),
      },
      {
        id: 3,
        type: "event",
        title: "Event Approved",
        message: "Your event 'Tech Meetup' has been approved",
        read: true,
        timestamp: new Date(Date.now() - 86400000).toISOString(),
      },
      {
        id: 4,
        type: "rating",
        title: "New Rating",
        message: "You received a 5-star rating from Mike Johnson",
        read: true,
        timestamp: new Date(Date.now() - 172800000).toISOString(),
      },
    ]

    return NextResponse.json({ success: true, data: notifications })
  } catch (error) {
    console.error("[v0] Notifications GET error:", error)
    return NextResponse.json({ error: "Failed to fetch notifications" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { notificationId, read } = await request.json()

    if (!notificationId || read === undefined) {
      return NextResponse.json({ error: "Notification ID and read status are required" }, { status: 400 })
    }

    return NextResponse.json({
      success: true,
      message: "Notification updated successfully",
      data: {
        id: notificationId,
        read,
      },
    })
  } catch (error) {
    console.error("[v0] Notifications PUT error:", error)
    return NextResponse.json({ error: "Failed to update notification" }, { status: 500 })
  }
}
