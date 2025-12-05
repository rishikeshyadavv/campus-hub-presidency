import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, studentId, password } = await request.json()

    // Validate input
    if (!name || !email || !studentId || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    if (!email.includes("@") || !email.endsWith(".edu")) {
      return NextResponse.json({ error: "Please use a valid student email (.edu)" }, { status: 400 })
    }

    const mockToken = Buffer.from(`${email}:${Date.now()}`).toString("base64")

    return NextResponse.json(
      {
        success: true,
        message: "Account created successfully",
        token: mockToken,
        user: {
          id: Math.random().toString(36).substr(2, 9),
          email,
          name,
          studentId,
        },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Signup error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
