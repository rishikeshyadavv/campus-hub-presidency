"use client"

import Link from "next/link"
import { Github, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/marketplace"
                  className="hover:text-foreground hover:translate-x-1 transition-all inline-block"
                >
                  BarterTrade
                </Link>
              </li>
              <li>
                <Link href="/clubs" className="hover:text-foreground hover:translate-x-1 transition-all inline-block">
                  Club Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/messages"
                  className="hover:text-foreground hover:translate-x-1 transition-all inline-block"
                >
                  Messaging
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground hover:translate-x-1 transition-all inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground hover:translate-x-1 transition-all inline-block">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground hover:translate-x-1 transition-all inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-foreground hover:translate-x-1 transition-all inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground hover:translate-x-1 transition-all inline-block">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/safety" className="hover:text-foreground hover:translate-x-1 transition-all inline-block">
                  Safety Guidelines
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground hover:translate-x-1 transition-all inline-flex items-center gap-2"
                >
                  <Twitter className="w-4 h-4" /> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground hover:translate-x-1 transition-all inline-flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground hover:translate-x-1 transition-all inline-flex items-center gap-2"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; 2025 CampusHub. All rights reserved. Developed by Rishikesh Yadav, Mohammed Farhan Ahmed, and M.
            Kunal Kothari.
          </p>
        </div>
      </div>
    </footer>
  )
}
