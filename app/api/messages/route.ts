import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const messages = [
      {
        id: 1,
        sender: "John Doe",
        recipient: "Current User",
        content: "Hi, are you still interested in trading?",
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        read: true,
      },
      {
        id: 2,
        sender: "Current User",
        recipient: "John Doe",
        content: "Yes, I am! When can we meet?",
        timestamp: new Date(Date.now() - 1800000).toISOString(),
        read: true,
      },
      {
        id: 3,
        sender: "Jane Smith",
        recipient: "Current User",
        content: "Is the laptop stand still available?",
        timestamp: new Date(Date.now() - 600000).toISOString(),
        read: false,
      },
    ]

    return NextResponse.json({ success: true, data: messages })
  } catch (error) {
    console.error("[v0] Messages GET error:", error)
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { recipientId, content } = await request.json()

    if (!recipientId || !content) {
      return NextResponse.json({ error: "Recipient ID and content are required" }, { status: 400 })
    }

    const newMessage = {
      id: Math.random().toString(36).substr(2, 9),
      sender: "Current User",
      recipient: recipientId,
      content,
      timestamp: new Date().toISOString(),
      read: false,
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
        data: newMessage,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Messages POST error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
