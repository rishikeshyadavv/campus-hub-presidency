"use client"

import { Button } from "@/components/ui/button"
import { Bell, MessageSquare, Settings, LogOut, Home, Info } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" })
      router.push("/")
    } catch (error) {
      console.error("[v0] Logout error:", error)
    }
  }

  return (
    <nav className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 border-b-2 border-primary/20 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-white to-blue-100 rounded-xl flex items-center justify-center text-primary font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
            🎓
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-white group-hover:text-blue-50 transition-colors">CampusHub</h1>
            <span className="text-xs text-blue-100">Student Platform</span>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <Link href="/dashboard">
            <Button
              variant="ghost"
              size="icon"
              title="Home"
              className="text-white hover:bg-white/20 hover:scale-110 transition-all duration-200"
            >
              <Home className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/notifications">
            <Button
              variant="ghost"
              size="icon"
              title="Notifications"
              className="text-white hover:bg-white/20 hover:scale-110 transition-all duration-200"
            >
              <Bell className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/messages">
            <Button
              variant="ghost"
              size="icon"
              title="Messages"
              className="text-white hover:bg-white/20 hover:scale-110 transition-all duration-200"
            >
              <MessageSquare className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/settings">
            <Button
              variant="ghost"
              size="icon"
              title="Settings"
              className="text-white hover:bg-white/20 hover:scale-110 transition-all duration-200"
            >
              <Settings className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/about">
            <Button
              variant="ghost"
              size="icon"
              title="About"
              className="text-white hover:bg-white/20 hover:scale-110 transition-all duration-200"
            >
              <Info className="w-5 h-5" />
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-red-500/30 hover:scale-110 transition-all duration-200"
            title="Logout"
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
