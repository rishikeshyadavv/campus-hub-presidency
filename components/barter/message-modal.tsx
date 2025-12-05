"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

interface MessageModalProps {
  seller: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function MessageModal({ seller, open, onOpenChange }: MessageModalProps) {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Message sent to ${seller}!`)
    setMessage("")
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Message {seller}</DialogTitle>
          <DialogDescription>Send a message to inquire about this item</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              id="message"
              placeholder="Hi, I'm interested in this item. Is it still available?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="min-h-24"
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1 bg-transparent"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Send Message
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
