"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Navbar from "@/components/layout/navbar"
import CreateListingModal from "@/components/barter/create-listing-modal"

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [selectedListing, setSelectedListing] = useState<(typeof listings)[0] | null>(null)
  const [showDetailsModal, setShowDetailsModal] = useState(false)

  const categories = ["All", "Books", "Electronics", "Sports", "Furniture", "Clothing", "Other"]

  const listings = [
    {
      id: 1,
      title: "Organic Chemistry Textbook",
      category: "Books",
      price: "Trade for Physics book",
      rating: 4.8,
      image: "📚",
      seller: "John Doe",
      description: "Barely used, all notes included. Perfect condition.",
    },
    {
      id: 2,
      title: "Laptop Stand",
      category: "Electronics",
      price: "Trade for desk lamp",
      rating: 4.5,
      image: "💻",
      seller: "Jane Smith",
      description: "Adjustable aluminum stand, great for ergonomics.",
    },
    {
      id: 3,
      title: "Bicycle",
      category: "Sports",
      price: "Trade for skateboard",
      rating: 5,
      image: "🚴",
      seller: "Mike Johnson",
      description: "Mountain bike, excellent condition, recently serviced.",
    },
    {
      id: 4,
      title: "Gaming Console",
      category: "Electronics",
      price: "Trade for headphones",
      rating: 4.9,
      image: "🎮",
      seller: "Sarah Williams",
      description: "Latest model with 2 controllers and games.",
    },
    {
      id: 5,
      title: "Desk Lamp",
      category: "Furniture",
      price: "Trade for monitor",
      rating: 4.3,
      image: "💡",
      seller: "Tom Brown",
      description: "LED desk lamp with adjustable brightness.",
    },
    {
      id: 6,
      title: "Winter Jacket",
      category: "Clothing",
      price: "Trade for summer clothes",
      rating: 4.7,
      image: "🧥",
      seller: "Emma Davis",
      description: "Warm winter jacket, barely worn.",
    },
  ]

  const filteredListings = listings.filter((listing) => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      selectedCategory === "all" || listing.category.toLowerCase() === selectedCategory.toLowerCase()
    return matchesSearch && matchesCategory
  })

  const handleViewDetails = (listing: (typeof listings)[0]) => {
    setSelectedListing(listing)
    setShowDetailsModal(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-6">BarterTrade Marketplace</h1>

          {/* Search and Filter */}
          <div className="flex gap-4 mb-6 flex-col md:flex-row">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search listings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button onClick={() => setShowCreateModal(true)} className="bg-blue-600 hover:bg-blue-700">
              Create Listing
            </Button>
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category.toLowerCase() ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.toLowerCase())}
                className={selectedCategory === category.toLowerCase() ? "bg-blue-600" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => (
            <Card
              key={listing.id}
              className="overflow-hidden hover:shadow-lg transition-all hover:scale-105 duration-300 cursor-pointer"
            >
              <div className="bg-secondary/50 h-40 flex items-center justify-center text-5xl">{listing.image}</div>
              <CardContent className="p-4">
                <Badge className="mb-3 bg-blue-100 text-blue-700">{listing.category}</Badge>
                <h3 className="font-semibold mb-2">{listing.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{listing.description}</p>
                <p className="text-sm font-medium text-muted-foreground mb-3">Seller: {listing.seller}</p>
                <p className="text-sm text-blue-600 font-semibold mb-4">{listing.price}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{listing.rating}</span>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => handleViewDetails(listing)}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredListings.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No listings found. Try adjusting your search.</p>
          </div>
        )}

        <CreateListingModal open={showCreateModal} onOpenChange={setShowCreateModal} />

        <Dialog open={showDetailsModal} onOpenChange={setShowDetailsModal}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>{selectedListing?.title}</DialogTitle>
              <DialogDescription>Item Details</DialogDescription>
            </DialogHeader>
            {selectedListing && (
              <div className="space-y-4">
                <div className="bg-secondary/50 h-40 flex items-center justify-center text-6xl rounded-lg">
                  {selectedListing.image}
                </div>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-semibold">Category:</span> {selectedListing.category}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Seller:</span> {selectedListing.seller}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Rating:</span> {selectedListing.rating} ⭐
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Price/Trade:</span> {selectedListing.price}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Description:</span> {selectedListing.description}
                  </p>
                </div>
                <div className="flex gap-2 pt-4">
                  <Button
                    variant="outline"
                    className="flex-1 bg-transparent"
                    onClick={() => setShowDetailsModal(false)}
                  >
                    Close
                  </Button>
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Message Seller</Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
    </div>
  )
}
