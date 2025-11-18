import { useState, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { BookingModal } from './BookingModal'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [bookingModalOpen, setBookingModalOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/special-offers', label: 'Special Offers' },
    { path: '/contact', label: 'Contact' },
    { path: '/faq', label: 'FAQ' },
    { path: '/blog', label: 'Blog' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-primary text-white px-4 py-2 rounded">
        Skip to content
      </a>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/fix-it-logo-308w.jpg" 
                alt="Fix It Auto Repair" 
                className="h-12 w-auto"
                loading="eager"
                decoding="async"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                  className={`relative body-base font-medium transition-colors hover:text-primary ${
                    isActive(link.path) ? 'text-primary' : 'text-dark'
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-2 left-0 h-0.5 rounded bg-primary transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  />
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button 
                variant="accent" 
                size="lg"
                onClick={() => setBookingModalOpen(true)}
              >
                Schedule Appointment
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`body-base font-medium transition-colors hover:text-primary ${
                      isActive(link.path) ? 'text-primary' : 'text-dark'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button 
                  variant="accent" 
                  className="w-full"
                  onClick={() => {
                    setBookingModalOpen(true)
                    setMobileMenuOpen(false)
                  }}
                >
                  Schedule Appointment
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white">
        <div className="container mx-auto px-4 py-12">
          {/* Back to Top */}
          <div className="lg:hidden mb-6 text-center">
            <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm text-gray-300 hover:text-accent">
              Back to top ↑
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="heading-sm text-white mb-4">Fix It Auto Repair</h3>
              <p className="body-sm text-gray-300 mb-4">
                Family-owned and operated auto repair shop in Ames, IA with 27+ years of expertise.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="heading-sm text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.slice(0, 5).map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path} 
                      className="body-sm text-gray-300 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="heading-sm text-white mb-4">Our Services</h3>
              <ul className="space-y-2 body-sm text-gray-300">
                <li>Oil Changes</li>
                <li>Diagnostics</li>
                <li>Tune-ups</li>
                <li>Timing Belts</li>
                <li>A/C Service</li>
                <li>Battery Replacement</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="heading-sm text-white mb-4">Contact Us</h3>
              <div className="space-y-3">
                <a 
                  href="tel:+15152920177" 
                  className="flex items-center gap-2 body-sm text-gray-300 hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  (515) 292-0177
                </a>
                <a 
                  href="mailto:info@fixitautoames.com" 
                  className="flex items-center gap-2 body-sm text-gray-300 hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  info@fixitautoames.com
                </a>
                <div className="flex items-start gap-2 body-sm text-gray-300">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span>123 Main Street<br />Ames, IA 50010</span>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Hours</h4>
                <p className="body-sm text-gray-300">
                  Mon-Fri: 8:00 AM - 5:30 PM<br />
                  Sat: 8:00 AM - 12:00 PM<br />
                  Sun: Closed
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700" />

          <div className="text-center body-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Fix It Auto Repair. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal 
        open={bookingModalOpen} 
        onOpenChange={setBookingModalOpen} 
      />
    </div>
  )
}