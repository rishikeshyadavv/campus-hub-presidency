"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import Navbar from "@/components/layout/navbar"
import ChatInterface from "@/components/messaging/chat-interface"

const mockConversations = [
  {
    id: 1,
    name: "Sarah Mitchell",
    lastMessage: "Is the textbook still available?",
    timestamp: "2 min ago",
    unread: 2,
  },
  {
    id: 2,
    name: "John Davis",
    lastMessage: "Thanks for the trade!",
    timestamp: "1 hour ago",
    unread: 0,
  },
  {
    id: 3,
    name: "Emma Wilson",
    lastMessage: "Can we meet tomorrow?",
    timestamp: "3 hours ago",
    unread: 1,
  },
]

const mockMessages = [
  { id: 1, sender: "Sarah", content: "Hi! Is the textbook still available?", timestamp: "2:30 PM", isOwn: false },
  { id: 2, sender: "You", content: "Yes, it is! Are you interested?", timestamp: "2:31 PM", isOwn: true },
  { id: 3, sender: "Sarah", content: "Definitely! When can we meet?", timestamp: "2:32 PM", isOwn: false },
]

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(mockConversations[0])
  const [searchQuery, setSearchQuery] = useState("")

  const filteredConversations = mockConversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-foreground mb-6">Messages</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px]">
          <Card className="flex flex-col">
            <CardHeader className="border-b">
              <CardTitle className="text-lg">Conversations</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto p-0">
              <div className="p-4 border-b sticky top-0 bg-background">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2 p-2">
                {filteredConversations.map((conv) => (
                  <div
                    key={conv.id}
                    onClick={() => setSelectedConversation(conv)}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedConversation.id === conv.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium text-sm">{conv.name}</p>
                      {conv.unread > 0 && (
                        <Badge variant="destructive" className="text-xs">
                          {conv.unread}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs opacity-75 line-clamp-1">{conv.lastMessage}</p>
                    <p className="text-xs opacity-50 mt-1">{conv.timestamp}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="md:col-span-2">
            <ChatInterface recipientName={selectedConversation.name} messages={mockMessages} />
          </div>
        </div>
      </main>
    </div>
  )
}
