"use client"

import { Button } from "@/components/ui/button"
import { Settings, LogOut, Shield } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function AdminNavbar() {
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
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-destructive rounded-lg flex items-center justify-center text-destructive-foreground font-bold">
            <Shield className="w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold text-foreground">CampusHub Admin</h1>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/admin/settings">
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="text-destructive" onClick={handleLogout}>
            <LogOut className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
