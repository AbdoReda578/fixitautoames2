import { useState } from 'react'
import { Wrench, Settings, BatteryMedium, Wind, Clock5, Car, Fuel, Zap, Gauge, Droplet } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookingModal } from '@/components/BookingModal'

export function ServicesPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false)

  const services = [
    {
      category: 'Maintenance',
      items: [
        {
          icon: Wrench,
          title: 'Oil Changes',
          description: 'Regular oil changes using premium synthetic or conventional oil to keep your engine running smoothly and extend its life.',
          price: 'Starting at $39.99',
          duration: '30-45 minutes',
          features: ['Premium oil options', 'Filter replacement', 'Multi-point inspection', 'Fluid top-off'],
        },
        {
          icon: Settings,
          title: 'Engine Tune-ups',
          description: 'Complete engine diagnostics and tune-up services including spark plug replacement, air filter, and fuel system cleaning.',
          price: 'Starting at $89.99',
          duration: '1-2 hours',
          features: ['Spark plug replacement', 'Air filter check', 'Fuel system cleaning', 'Performance optimization'],
        },
        {
          icon: Droplet,
          title: 'Fluid Services',
          description: 'Comprehensive fluid exchange services including transmission, coolant, brake, and power steering fluids.',
          price: 'Starting at $79.99',
          duration: '45-60 minutes',
          features: ['Transmission fluid', 'Coolant flush', 'Brake fluid', 'Power steering'],
        },
      ],
    },
    {
      category: 'Repairs',
      items: [
        {
          icon: BatteryMedium,
          title: 'Battery Service',
          description: 'Battery testing, replacement, and complete electrical system diagnostics to ensure reliable starting.',
          price: 'Starting at $129.99',
          duration: '30-45 minutes',
          features: ['Battery testing', 'Electrical diagnostics', 'Terminal cleaning', 'Charging system check'],
        },
        {
          icon: Clock5,
          title: 'Timing Belt Replacement',
          description: 'Expert timing belt replacement to prevent catastrophic engine damage and maintain proper engine timing.',
          price: 'Starting at $299.99',
          duration: '2-4 hours',
          features: ['Belt replacement', 'Tensioner inspection', 'Water pump check', 'Engine timing adjustment'],
        },
        {
          icon: Fuel,
          title: 'Fuel Pump Service',
          description: 'Fuel pump testing, repair, and replacement to ensure proper fuel delivery and engine performance.',
          price: 'Starting at $249.99',
          duration: '2-3 hours',
          features: ['Fuel pressure testing', 'Pump replacement', 'Filter replacement', 'System diagnostics'],
        },
      ],
    },
    {
      category: 'Diagnostics',
      items: [
        {
          icon: Car,
          title: 'Computer Diagnostics',
          description: 'Advanced computer diagnostics using state-of-the-art equipment to identify and troubleshoot any issues.',
          price: 'Starting at $59.99',
          duration: '30-60 minutes',
          features: ['OBD-II scanning', 'Error code analysis', 'System testing', 'Detailed report'],
        },
        {
          icon: Gauge,
          title: 'Performance Testing',
          description: 'Comprehensive performance testing to identify issues affecting your vehicle\'s power and efficiency.',
          price: 'Starting at $89.99',
          duration: '1-2 hours',
          features: ['Engine performance', 'Emissions testing', 'Fuel efficiency', 'Power output analysis'],
        },
        {
          icon: Zap,
          title: 'Electrical Diagnostics',
          description: 'Complete electrical system diagnostics to identify and repair wiring, sensor, and component issues.',
          price: 'Starting at $79.99',
          duration: '1-2 hours',
          features: ['Wiring inspection', 'Sensor testing', 'Component diagnostics', 'Circuit analysis'],
        },
      ],
    },
    {
      category: 'Climate Control',
      items: [
        {
          icon: Wind,
          title: 'A/C Service & Repair',
          description: 'Air conditioning service, repair, and recharge to keep you comfortable in all weather conditions.',
          price: 'Starting at $79.99',
          duration: '1-2 hours',
          features: ['System inspection', 'Refrigerant recharge', 'Leak detection', 'Component replacement'],
        },
      ],
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white text-primary">Our Services</Badge>
          <h1 className="heading-hero text-white mb-6">Expert Auto Repair Services</h1>
          <p className="body-lg text-white/90 max-w-2xl mx-auto mb-8">
            Comprehensive automotive services for all makes and models, backed by our ASE certified technicians and NAPA warranty
          </p>
          <Button 
            variant="accent" 
            size="xl"
            onClick={() => setBookingModalOpen(true)}
          >
            Schedule Service
          </Button>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="Maintenance" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              {services.map((category) => (
                <TabsTrigger key={category.category} value={category.category}>
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((category) => (
              <TabsContent key={category.category} value={category.category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((service, index) => (
                    <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <service.icon className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="heading-md">{service.title}</CardTitle>
                        <CardDescription className="body-base">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-accent">{service.price}</span>
                            <span className="text-sm text-muted-foreground">{service.duration}</span>
                          </div>
                          
                          <div>
                            <p className="font-semibold mb-2 text-sm">Includes:</p>
                            <ul className="space-y-1">
                              {service.features.map((feature, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="text-success mt-1">✓</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Button 
                            variant="outline" 
                            className="w-full"
                            onClick={() => setBookingModalOpen(true)}
                          >
                            Book This Service
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Warranty Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src="/warranty-img-removebg-preview+1-8b134481-659w.png" 
              alt="NAPA Warranty" 
              className="h-24 w-auto mx-auto mb-6"
            />
            <h2 className="heading-xl mb-4">NAPA AutoCare Peace of Mind Warranty</h2>
            <p className="body-lg text-muted-foreground mb-6">
              All our repairs are backed by the NAPA AutoCare 2-year/24,000-mile nationwide warranty. 
              This means you're covered wherever you go in North America.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="heading-sm mb-2">2 Years</h3>
                <p className="body-sm text-muted-foreground">Warranty Coverage</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="heading-sm mb-2">24,000 Miles</h3>
                <p className="body-sm text-muted-foreground">Distance Coverage</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="heading-sm mb-2">Nationwide</h3>
                <p className="body-sm text-muted-foreground">Coverage Area</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal open={bookingModalOpen} onOpenChange={setBookingModalOpen} />
    </div>
  )
}