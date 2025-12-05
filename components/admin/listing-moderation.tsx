"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle, Trash2 } from "lucide-react"

const mockListings = [
  { id: 1, title: "Organic Chemistry Textbook", seller: "Sarah M.", status: "approved", flagged: false },
  { id: 2, title: "Suspicious Electronics Deal", seller: "Unknown", status: "pending", flagged: true },
  { id: 3, title: "Physics Lab Equipment", seller: "Emma L.", status: "approved", flagged: false },
  { id: 4, title: "Inappropriate Content", seller: "Flagged User", status: "rejected", flagged: true },
]

export default function ListingModeration() {
  const [listings, setListings] = useState(mockListings)

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Listing Moderation</CardTitle>
          <CardDescription>Review and moderate marketplace listings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {listings.map((listing) => (
              <div key={listing.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <p className="font-medium">{listing.title}</p>
                  <p className="text-sm text-muted-foreground">Seller: {listing.seller}</p>
                  <div className="flex gap-2 mt-2">
                    <Badge
                      variant={
                        listing.status === "approved"
                          ? "default"
                          : listing.status === "pending"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {listing.status}
                    </Badge>
                    {listing.flagged && (
                      <Badge variant="destructive" className="gap-1">
                        <AlertCircle className="w-3 h-3" />
                        Flagged
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-1 bg-transparent">
                    <CheckCircle className="w-4 h-4" />
                    Approve
                  </Button>
                  <Button variant="destructive" size="sm" className="gap-1">
                    <Trash2 className="w-4 h-4" />
                    Reject
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
