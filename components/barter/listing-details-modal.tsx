"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, User } from "lucide-react"

interface ListingDetailsModalProps {
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
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ListingDetailsModal({ listing, open, onOpenChange }: ListingDetailsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{listing.title}</DialogTitle>
          <DialogDescription>Item details and seller information</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="h-64 bg-muted rounded-lg overflow-hidden">
            <img src={listing.image || "/placeholder.svg"} alt={listing.title} className="w-full h-full object-cover" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Type</p>
              <Badge variant={listing.type === "exchange" ? "default" : "secondary"}>
                {listing.type === "exchange" ? "Exchange" : "Sale"}
              </Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Category</p>
              <Badge variant="outline">{listing.category}</Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Condition</p>
              <Badge variant="outline">{listing.condition}</Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Location</p>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{listing.location}</span>
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Seller Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{listing.seller}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{listing.rating}</span>
                <span className="text-xs text-muted-foreground">({listing.reviews} reviews)</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2 pt-4">
            <Button variant="outline" className="flex-1 bg-transparent" onClick={() => onOpenChange(false)}>
              Close
            </Button>
            <Button className="flex-1">Contact Seller</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
