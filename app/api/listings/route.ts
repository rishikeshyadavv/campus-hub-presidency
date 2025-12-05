import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const listings = [
      {
        id: 1,
        title: "Organic Chemistry Textbook",
        category: "Books",
        condition: "Like New",
        price: "Trade for Physics book",
        seller: "John Doe",
        rating: 4.8,
        description: "Barely used, all notes included.",
      },
      {
        id: 2,
        title: "Laptop Stand",
        category: "Electronics",
        condition: "Excellent",
        price: "Trade for desk lamp",
        seller: "Jane Smith",
        rating: 4.5,
        description: "Adjustable aluminum stand.",
      },
      {
        id: 3,
        title: "Bicycle",
        category: "Sports",
        condition: "Excellent",
        price: "Trade for skateboard",
        seller: "Mike Johnson",
        rating: 5,
        description: "Mountain bike, recently serviced.",
      },
    ]

    return NextResponse.json({ success: true, data: listings })
  } catch (error) {
    console.error("[v0] Listings GET error:", error)
    return NextResponse.json({ error: "Failed to fetch listings" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, category, condition, description } = await request.json()

    if (!title || !category || !condition) {
      return NextResponse.json({ error: "Title, category, and condition are required" }, { status: 400 })
    }

    const newListing = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      category,
      condition,
      description,
      seller: "Current User",
      rating: 5,
      price: "Open to trades",
      createdAt: new Date().toISOString(),
    }

    return NextResponse.json(
      {
        success: true,
        message: "Listing created successfully",
        listing: newListing,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Listings POST error:", error)
    return NextResponse.json({ error: "Failed to create listing" }, { status: 500 })
  }
}
