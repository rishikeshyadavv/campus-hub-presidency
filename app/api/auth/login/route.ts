import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    if (!email.includes("@")) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const mockToken = Buffer.from(`${email}:${Date.now()}`).toString("base64")

    return NextResponse.json({
      success: true,
      message: "Login successful",
      token: mockToken,
      user: {
        id: Math.random().toString(36).substr(2, 9),
        email,
        name: email.split("@")[0],
      },
    })
  } catch (error) {
    console.error("[v0] Login error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
