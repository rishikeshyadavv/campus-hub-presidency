"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

interface SignupFormProps {
  onSuccess?: () => void
}

export default function SignupForm({ onSuccess }: SignupFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    studentId: "",
    password: "",
    confirmPassword: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      })
      return
    }

    setLoading(true)

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          studentId: formData.studentId,
          password: formData.password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "Signup failed")
        toast({
          title: "Signup Failed",
          description: data.error || "Please try again",
          variant: "destructive",
        })
        return
      }

      localStorage.setItem("token", data.token)
      toast({
        title: "Success",
        description: "Account created successfully",
      })
      onSuccess?.()
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred"
      setError(errorMessage)
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSignup} className="space-y-4">
      {error && <div className="text-sm text-red-600 bg-red-50 p-3 rounded">{error}</div>}
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={loading}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Student Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@college.edu"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={loading}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="studentId">Student ID</Label>
        <Input
          id="studentId"
          name="studentId"
          placeholder="123456789"
          value={formData.studentId}
          onChange={handleChange}
          required
          disabled={loading}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          required
          disabled={loading}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          disabled={loading}
        />
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Creating account..." : "Sign Up"}
      </Button>
    </form>
  )
}
