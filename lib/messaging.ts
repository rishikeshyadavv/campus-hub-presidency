// Messaging service for handling in-app messaging
export interface Message {
  id: number
  senderId: number
  recipientId: number
  content: string
  timestamp: string
  read: boolean
}

export async function sendMessage(recipientId: number, content: string) {
  try {
    const response = await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recipientId, content }),
    })

    if (!response.ok) {
      throw new Error("Failed to send message")
    }

    return await response.json()
  } catch (error) {
    console.error("Messaging error:", error)
  }
}

export async function getConversation(userId: number) {
  try {
    const response = await fetch(`/api/messages?userId=${userId}`)

    if (!response.ok) {
      throw new Error("Failed to fetch conversation")
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching conversation:", error)
  }
}

export async function markMessageAsRead(messageId: number) {
  try {
    const response = await fetch("/api/messages", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messageId, read: true }),
    })

    if (!response.ok) {
      throw new Error("Failed to mark message as read")
    }

    return await response.json()
  } catch (error) {
    console.error("Error marking message as read:", error)
  }
}
