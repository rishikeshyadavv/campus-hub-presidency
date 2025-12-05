"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, MessageSquare } from "lucide-react"
import ListingDetailsModal from "./listing-details-modal"
import MessageModal from "./message-modal"

interface ListingCardProps {
  listing: {
    id: number
    title: string
    category: string
    condition: string
    image: string
    seller: string
    rating: number
    reviews: number
    type: "exchange" | "sale"
    location: string
  }
}

export default function ListingCard({ listing }: ListingCardProps) {
  const [showDetails, setShowDetails] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48 bg-muted overflow-hidden">
          <img src={listing.image || "/placeholder.svg"} alt={listing.title} className="w-full h-full object-cover" />
          <Badge className="absolute top-2 right-2" variant={listing.type === "exchange" ? "default" : "secondary"}>
            {listing.type === "exchange" ? "Exchange" : "Sale"}
          </Badge>
        </div>

        <CardContent className="pt-4">
          <h3 className="font-semibold text-foreground line-clamp-2 mb-2">{listing.title}</h3>
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="outline" className="text-xs">
              {listing.category}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {listing.condition}
            </Badge>
          </div>

          <div className="flex items-center gap-1 mb-3">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{listing.rating}</span>
            <span className="text-xs text-muted-foreground">({listing.reviews})</span>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
            <MapPin className="w-4 h-4" />
            {listing.location}
          </div>

          <p className="text-sm text-muted-foreground">Seller: {listing.seller}</p>
        </CardContent>

        <CardFooter className="gap-2">
          <Button variant="outline" className="flex-1 gap-2 bg-transparent" onClick={() => setShowMessage(true)}>
            <MessageSquare className="w-4 h-4" />
            Message
          </Button>
          <Button className="flex-1" onClick={() => setShowDetails(true)}>
            View Details
          </Button>
        </CardFooter>
      </Card>

      <ListingDetailsModal listing={listing} open={showDetails} onOpenChange={setShowDetails} />
      <MessageModal seller={listing.seller} open={showMessage} onOpenChange={setShowMessage} />
    </>
  )
}
