"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle } from "lucide-react"

const mockDisputes = [
  {
    id: 1,
    title: "Item not as described",
    buyer: "John D.",
    seller: "Sarah M.",
    status: "open",
    date: "2025-11-10",
  },
  {
    id: 2,
    title: "Payment not received",
    buyer: "Emma L.",
    seller: "Mike C.",
    status: "resolved",
    date: "2025-11-08",
  },
]

export default function DisputeResolution() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Dispute Resolution</CardTitle>
          <CardDescription>Handle trade disputes and complaints</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockDisputes.map((dispute) => (
              <div key={dispute.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertTriangle className="w-4 h-4 text-destructive" />
                    <p className="font-medium">{dispute.title}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {dispute.buyer} vs {dispute.seller}
                  </p>
                  <div className="flex gap-2 mt-2">
                    <Badge variant={dispute.status === "open" ? "destructive" : "default"}>{dispute.status}</Badge>
                    <Badge variant="outline">{dispute.date}</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Review
                  </Button>
                  <Button size="sm">Resolve</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
