"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, Phone, Video } from "lucide-react"

interface Message {
  id: number
  sender: string
  content: string
  timestamp: string
  isOwn: boolean
}

interface ChatInterfaceProps {
  recipientName: string
  messages: Message[]
}

export default function ChatInterface({ recipientName, messages }: ChatInterfaceProps) {
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      alert(`Message sent to ${recipientName}: ${newMessage}`)
      setNewMessage("")
    }
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="border-b flex flex-row items-center justify-between">
        <CardTitle>{recipientName}</CardTitle>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Phone className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Video className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                msg.isOwn ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
              }`}
            >
              <p className="text-sm">{msg.content}</p>
              <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
            </div>
          </div>
        ))}
      </CardContent>

      <div className="border-t p-4 flex gap-2">
        <Input
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <Button onClick={handleSendMessage} size="icon">
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  )
}
