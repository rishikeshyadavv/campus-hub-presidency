import { NextResponse } from "next/server"

export async function POST() {
  try {
    // Clear authentication state (in a real app, this would clear session/cookies)
    const response = NextResponse.json({ success: true })

    // Clear auth cookie if it exists
    response.cookies.set("auth", "", { maxAge: 0 })

    return response
  } catch (error) {
    console.error("[v0] Logout error:", error)
    return NextResponse.json({ error: "Logout failed" }, { status: 500 })
  }
}
