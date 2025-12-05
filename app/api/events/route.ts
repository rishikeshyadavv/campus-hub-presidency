import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const events = [
      {
        id: 1,
        title: "Tech Club Hackathon",
        date: "2025-11-15",
        time: "09:00 AM",
        venue: "Engineering Building",
        budget: 500,
        members: 45,
        status: "approved",
        description: "24-hour coding competition with prizes",
      },
      {
        id: 2,
        title: "Photography Walk",
        date: "2025-11-18",
        time: "02:00 PM",
        venue: "Campus Grounds",
        budget: 100,
        members: 23,
        status: "approved",
        description: "Explore campus and capture beautiful moments",
      },
      {
        id: 3,
        title: "Debate Competition",
        date: "2025-11-22",
        time: "06:00 PM",
        venue: "Auditorium",
        budget: 300,
        members: 32,
        status: "pending",
        description: "Friendly debate tournament for all skill levels",
      },
    ]

    return NextResponse.json({ success: true, data: events })
  } catch (error) {
    console.error("[v0] Events GET error:", error)
    return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, date, time, venue, budget, description } = await request.json()

    if (!title || !date || !venue) {
      return NextResponse.json({ error: "Title, date, and venue are required" }, { status: 400 })
    }

    const newEvent = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      date,
      time,
      venue,
      budget,
      description,
      status: "pending",
      members: 1,
      createdAt: new Date().toISOString(),
    }

    return NextResponse.json(
      {
        success: true,
        message: "Event created successfully and sent for approval",
        event: newEvent,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Events POST error:", error)
    return NextResponse.json({ error: "Failed to create event" }, { status: 500 })
  }
}
