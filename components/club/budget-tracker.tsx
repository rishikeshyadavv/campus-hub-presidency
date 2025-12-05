"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface BudgetTrackerProps {
  events: Array<{
    id: number
    title: string
    budget: number
    status: string
  }>
}

export default function BudgetTracker({ events }: BudgetTrackerProps) {
  const totalBudget = events.reduce((sum, e) => sum + e.budget, 0)
  const maxBudget = 5000

  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Overview</CardTitle>
        <CardDescription>Track allocated vs. available budget</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Total Allocated</span>
            <span className="text-sm font-bold">
              ${totalBudget} / ${maxBudget}
            </span>
          </div>
          <Progress value={(totalBudget / maxBudget) * 100} className="h-2" />
        </div>

        <div className="space-y-3">
          {events.map((event) => (
            <div key={event.id} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{event.title}</span>
                <span className="text-muted-foreground">${event.budget}</span>
              </div>
              <Progress value={(event.budget / maxBudget) * 100} className="h-1" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
