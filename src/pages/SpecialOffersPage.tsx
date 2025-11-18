import { useState } from 'react'
import { Tag, Calendar, AlertCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookingModal } from '@/components/BookingModal'

export function SpecialOffersPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false)

  const offers = [
    {
      title: '$10 OFF Oil Change',
      description: 'Save $10 on your next oil change service. Includes premium oil and filter replacement.',
      discount: '$10 OFF',
      validUntil: 'December 31, 2024',
      code: 'OIL10',
      terms: 'Valid for synthetic or conventional oil change. Cannot be combined with other offers.',
    },
    {
      title: 'Free Diagnostics',
      description: 'Get a FREE computer diagnostic scan with any repair service over $100.',
      discount: 'FREE',
      validUntil: 'December 31, 2024',
      code: 'DIAG100',
      terms: 'Diagnostic value $59.99. Must mention offer when booking.',
    },
    {
      title: 'A/C Service Special',
      description: 'Complete A/C system check and recharge for only $69.99 (regularly $89.99).',
      discount: '$20 OFF',
      validUntil: 'September 30, 2024',
      code: 'AC69',
      terms: 'Seasonal offer. Additional repairs may be needed and are not included.',
    },
    {
      title: 'New Customer Discount',
      description: 'First-time customers receive 15% off any service up to $50 discount.',
      discount: '15% OFF',
      validUntil: 'December 31, 2024',
      code: 'NEW15',
      terms: 'Valid for first visit only. Maximum discount $50.',
    },
    {
      title: 'Brake Service Package',
      description: 'Complete brake inspection, pad replacement, and rotor resurfacing starting at $199.',
      discount: 'SPECIAL',
      validUntil: 'December 31, 2024',
      code: 'BRAKE199',
      terms: 'Price per axle. Additional parts may be needed.',
    },
    {
      title: 'Senior Citizen Discount',
      description: 'Seniors 65+ receive 10% off all services every day.',
      discount: '10% OFF',
      validUntil: 'Ongoing',
      code: 'SENIOR10',
      terms: 'Valid ID required. Cannot be combined with other offers.',
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-accent to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white text-accent">Special Offers</Badge>
          <h1 className="heading-hero text-white mb-6">Save on Quality Auto Service</h1>
          <p className="body-lg text-white/90 max-w-2xl mx-auto">
            Check out our current promotions and save on your next visit
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute top-0 right-0 bg-accent text-white px-4 py-2 rounded-bl-lg font-bold">
                  {offer.discount}
                </div>
                <CardHeader className="pt-12">
                  <CardTitle className="heading-md mb-2">{offer.title}</CardTitle>
                  <CardDescription className="body-base">{offer.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Valid until: {offer.validUntil}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Tag className="h-4 w-4 text-primary" />
                      <span className="font-mono font-semibold text-primary">{offer.code}</span>
                    </div>

                    <div className="bg-light p-3 rounded-lg">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-muted-foreground">{offer.terms}</p>
                      </div>
                    </div>

                    <Button 
                      variant="accent" 
                      className="w-full"
                      onClick={() => setBookingModalOpen(true)}
                    >
                      Claim This Offer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Redeem */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-xl text-center mb-8">How to Redeem Your Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="heading-sm mb-2">Book Online</h3>
                  <p className="body-sm text-muted-foreground">
                    Schedule your appointment using our online booking system
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="heading-sm mb-2">Mention Code</h3>
                  <p className="body-sm text-muted-foreground">
                    Provide the offer code when booking or at check-in
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="heading-sm mb-2">Save Money</h3>
                  <p className="body-sm text-muted-foreground">
                    Enjoy quality service at a discounted price
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <BookingModal open={bookingModalOpen} onOpenChange={setBookingModalOpen} />
    </div>
  )
}