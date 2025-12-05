"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Plus } from "lucide-react"
import ListingCard from "./listing-card"
import CreateListingModal from "./create-listing-modal"

const mockListings = [
  {
    id: 1,
    title: "Organic Chemistry Textbook",
    category: "Textbooks",
    condition: "Like New",
    image: "/chemistry-textbook.png",
    seller: "Sarah M.",
    rating: 4.8,
    reviews: 12,
    type: "exchange",
    location: "Library",
  },
  {
    id: 2,
    title: "MacBook Pro 2021",
    category: "Electronics",
    condition: "Good",
    image: "/silver-macbook-on-desk.png",
    seller: "John D.",
    rating: 4.9,
    reviews: 8,
    type: "sale",
    location: "Dorm A",
  },
  {
    id: 3,
    title: "Physics Lab Equipment Set",
    category: "Supplies",
    condition: "Excellent",
    image: "/physics-lab-equipment.jpg",
    seller: "Emma L.",
    rating: 4.7,
    reviews: 5,
    type: "exchange",
    location: "Science Building",
  },
]

export default function BarterMarketplace() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [listings, setListings] = useState(mockListings)

  const filteredListings = listings.filter(
    (listing) =>
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">BarterTrade Marketplace</h2>
          <p className="text-muted-foreground mt-1">Exchange and trade items with fellow students</p>
        </div>
        <Button onClick={() => setShowCreateModal(true)} className="gap-2">
          <Plus className="w-4 h-4" />
          List Item
        </Button>
      </div>

      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search textbooks, electronics, supplies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>

      {filteredListings.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <p className="text-muted-foreground mb-4">No listings found matching your search</p>
            <Button onClick={() => setShowCreateModal(true)}>Create First Listing</Button>
          </CardContent>
        </Card>
      )}

      <CreateListingModal open={showCreateModal} onOpenChange={setShowCreateModal} />
    </div>
  )
}
