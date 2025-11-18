import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Wrench, Settings, BatteryMedium, Wind, Clock5, Car, Star, Shield, Award, CheckCircle, ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { BookingModal } from '@/components/BookingModal'
import { motion, useReducedMotion, type Variants } from 'framer-motion'

export function HomePage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false)
  const [yearsCount, setYearsCount] = useState(0)
  const [customersCount, setCustomersCount] = useState(0)

  // Animated counters
  useEffect(() => {
    const yearsInterval = setInterval(() => {
      setYearsCount((prev) => {
        if (prev < 27) return prev + 1
        clearInterval(yearsInterval)
        return 27
      })
    }, 50)

    const customersInterval = setInterval(() => {
      setCustomersCount((prev) => {
        if (prev < 5000) return prev + 100
        clearInterval(customersInterval)
        return 5000
      })
    }, 20)

    return () => {
      clearInterval(yearsInterval)
      clearInterval(customersInterval)
    }
  }, [])

  const services = [
    {
      icon: Wrench,
      title: 'Oil Changes',
      description: 'Quick and professional oil change service to keep your engine running smoothly.',
      price: 'Starting at $39.99',
    },
    {
      icon: Settings,
      title: 'Engine Tune-ups',
      description: 'Complete engine diagnostics and tune-up services for optimal performance.',
      price: 'Starting at $89.99',
    },
    {
      icon: BatteryMedium,
      title: 'Battery Service',
      description: 'Battery testing, replacement, and electrical system diagnostics.',
      price: 'Starting at $129.99',
    },
    {
      icon: Wind,
      title: 'A/C Service',
      description: 'Air conditioning repair and recharge to keep you cool all summer.',
      price: 'Starting at $79.99',
    },
    {
      icon: Clock5,
      title: 'Timing Belts',
      description: 'Expert timing belt replacement to prevent costly engine damage.',
      price: 'Starting at $299.99',
    },
    {
      icon: Car,
      title: 'Diagnostics',
      description: 'Advanced computer diagnostics to identify and fix any issues.',
      price: 'Starting at $59.99',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Excellent service! The team at Fix It Auto Repair is professional, honest, and always goes above and beyond. Highly recommended!',
      image: 'https://i.pravatar.cc/150?img=1',
    },
    {
      name: 'Mike Peterson',
      rating: 5,
      text: 'Been coming here for years. Fair prices, quality work, and they always explain everything clearly. Best auto shop in Ames!',
      image: 'https://i.pravatar.cc/150?img=2',
    },
    {
      name: 'Emily Chen',
      rating: 5,
      text: 'As a woman, I appreciate how respectful and transparent they are. No upselling, just honest recommendations. Will definitely return!',
      image: 'https://i.pravatar.cc/150?img=3',
    },
    {
      name: 'David Martinez',
      rating: 5,
      text: 'Quick turnaround time and excellent customer service. They fixed my car right the first time. Very satisfied!',
      image: 'https://i.pravatar.cc/150?img=4',
    },
  ]

  const features = [
    {
      icon: Award,
      title: 'ASE Certified Technicians',
      description: 'Our team is certified and trained to handle all makes and models.',
    },
    {
      icon: Shield,
      title: 'NAPA Warranty',
      description: '2-year/24,000-mile peace of mind warranty on all repairs.',
    },
    {
      icon: CheckCircle,
      title: 'Family Owned',
      description: '27+ years of trusted service in the Ames community.',
    },
  ]

  const prefersReducedMotion = useReducedMotion()

  const fadeIn = (delay = 0): Variants => ({
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: 'easeOut' as const },
    },
  })

  const popCard = (delay = 0): Variants => ({
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay, ease: 'easeOut' as const },
    },
  })

  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.section
        className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn()}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/hero-front-shop-2304w.jpg)' }}
        >
          <div className="absolute inset-0 gradient-overlay"></div>
          <div
            className="absolute inset-0 pointer-events-none opacity-70 mix-blend-screen blur-3xl"
            style={{
              background: 'radial-gradient(circle at 20% 20%, rgba(14,165,233,0.45), transparent 45%), radial-gradient(circle at 80% 0%, rgba(245,158,11,0.4), transparent 40%), radial-gradient(circle at 50% 80%, rgba(30,58,138,0.45), transparent 55%)',
              animation: 'pulse 12s ease-in-out infinite'
            }}
          />
        </div>
        
        <motion.div className="relative z-10 container mx-auto px-4 text-center text-white" variants={fadeIn()}>
          <motion.div variants={fadeIn()}>
            <Badge className="mb-6 bg-accent/90 text-white border-none text-base px-4 py-2">
              Trusted Since 1997
            </Badge>
            
            <motion.h1 className="heading-hero text-white mb-6 max-w-4xl mx-auto" variants={fadeIn(0.1)}>
              Trusted Family-Owned Auto Repair in Ames, IA
            </motion.h1>
            
            <motion.p className="body-lg text-white/90 mb-8 max-w-2xl mx-auto" variants={fadeIn(0.2)}>
              27+ Years of Excellence • ASE Certified Technicians • NAPA Warranty
            </motion.p>
          </motion.div>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Button 
              variant="accent" 
              size="xl"
              onClick={() => setBookingModalOpen(true)}
              className="min-w-[200px] shadow-[0_10px_40px_rgba(245,158,11,0.35)] hover:shadow-[0_15px_45px_rgba(245,158,11,0.45)] transition-shadow"
            >
              Schedule Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              asChild
              className="min-w-[200px] bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 relative before:absolute before:inset-0 before:rounded-full before:border before:border-white/30 before:animate-pulse before:pointer-events-none"
            >
              <Link to="/services">View Our Services</Link>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8 items-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn(0.4)}
          >
            <motion.div className="glass-effect rounded-lg px-6 py-3" whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}>
              <motion.img 
                src="/454-4549310_ase-certified-ase-certified-logo-clipart-84w.png" 
                alt="ASE Certified" 
                className="h-12 w-auto"
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              />
            </motion.div>
            <motion.div className="glass-effect rounded-lg px-6 py-3" whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}>
              <motion.img 
                src="/warranty-img-removebg-preview+1-8b134481-659w.png" 
                alt="NAPA Warranty" 
                className="h-12 w-auto"
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-20 bg-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn()}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="heading-xl mb-4">Expert Auto Repair Services</h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              From routine maintenance to complex repairs, we've got you covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="h-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={popCard(index * 0.05)}
                whileHover={prefersReducedMotion ? undefined : { y: -8, scale: 1.01 }}
              >
                <Card 
                  className="group h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary"
                >
                  <CardHeader>
                    <motion.div
                      className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-all"
                      whileHover={prefersReducedMotion ? undefined : { rotate: 6 }}
                    >
                      <service.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                    </motion.div>
                    <CardTitle className="heading-md">{service.title}</CardTitle>
                    <CardDescription className="body-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-accent mb-4">{service.price}</p>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn()}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn()}>
              <Badge className="mb-4">Why Choose Us</Badge>
              <h2 className="heading-xl mb-6">Your Trusted Auto Repair Partner</h2>
              <p className="body-lg text-muted-foreground mb-8">
                At Fix It Auto Repair, we combine decades of experience with cutting-edge technology to provide the best service for your vehicle.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div key={index} className="flex gap-4" variants={fadeIn(index * 0.1)}>
                    <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-success" />
                    </div>
                    <div>
                      <h3 className="heading-sm mb-2">{feature.title}</h3>
                      <p className="body-base text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-12">
                <motion.div className="text-center p-6 rounded-lg bg-primary/5" whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}>
                  <motion.div
                    className="heading-xl text-primary mb-2 inline-flex"
                    animate={{ scale: prefersReducedMotion ? 1 : [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                  >
                    {yearsCount}+
                  </motion.div>
                  <p className="body-base text-muted-foreground">Years of Experience</p>
                </motion.div>
                <motion.div className="text-center p-6 rounded-lg bg-accent/5" whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}>
                  <motion.div
                    className="heading-xl text-accent mb-2 inline-flex"
                    animate={{ scale: prefersReducedMotion ? 1 : [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 0.4 }}
                  >
                    {customersCount.toLocaleString()}+
                  </motion.div>
                  <p className="body-base text-muted-foreground">Happy Customers</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div className="relative" variants={fadeIn(0.2)}>
              <motion.img 
                src="/AdobeStock_225509977+(1)-1920w.jpeg" 
                alt="Auto Repair Shop" 
                className="rounded-lg shadow-2xl w-full"
                loading="lazy"
                decoding="async"
                initial={{ scale: prefersReducedMotion ? 1 : 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 rounded-2xl p-6 max-w-xs bg-white/40 text-dark shadow-[0_10px_35px_rgba(31,41,55,0.2)] border border-white/30 backdrop-blur"
                animate={{ y: prefersReducedMotion ? 0 : [-6, 6, -6] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="h-8 w-8 text-dark/80" />
                  <div>
                    <p className="font-bold tracking-wide">NAPA Warranty</p>
                    <p className="text-sm font-medium">2 Year / 24,000 Miles</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-primary to-secondary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn()}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white text-primary">Testimonials</Badge>
            <h2 className="heading-xl text-white mb-4">What Our Customers Say</h2>
            <p className="body-lg text-white/90 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={popCard(index * 0.1)}
                    className="h-full"
                  >
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                        ))}
                        </div>
                        <p className="body-base mb-6 italic">"{testimonial.text}"</p>
                        <div className="flex items-center gap-3">
                          <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">Verified Customer</p>
                        </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-dark text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn()}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 className="heading-xl text-white mb-6" variants={fadeIn()}>
            Ready to Get Started?
          </motion.h2>
          <motion.p className="body-lg text-white/90 mb-8 max-w-2xl mx-auto" variants={fadeIn(0.1)}>
            Schedule your appointment today and experience the Fix It Auto Repair difference
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button 
              variant="accent" 
              size="xl"
              onClick={() => setBookingModalOpen(true)}
            >
              Schedule Appointment
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              asChild
              className="border-accent text-accent hover:bg-accent hover:text-white"
            >
              <a href="tel:+15152920177">
                <Phone className="mr-2 h-5 w-5" />
                Call (515) 292-0177
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <BookingModal open={bookingModalOpen} onOpenChange={setBookingModalOpen} />
    </div>
  )
}