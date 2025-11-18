import { Award, Shield, Users, Heart, CheckCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export function AboutPage() {
  const team = [
    {
      name: 'John Smith',
      role: 'Owner & Master Technician',
      image: 'https://i.pravatar.cc/150?img=12',
      certifications: ['ASE Master Certified', '30+ Years Experience'],
    },
    {
      name: 'Mike Johnson',
      role: 'Lead Technician',
      image: 'https://i.pravatar.cc/150?img=13',
      certifications: ['ASE Certified', 'Electrical Specialist'],
    },
    {
      name: 'Sarah Williams',
      role: 'Service Advisor',
      image: 'https://i.pravatar.cc/150?img=14',
      certifications: ['Customer Service Expert', '10+ Years Experience'],
    },
    {
      name: 'David Martinez',
      role: 'Technician',
      image: 'https://i.pravatar.cc/150?img=15',
      certifications: ['ASE Certified', 'Diagnostic Specialist'],
    },
  ]

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We treat every customer like family and every vehicle like our own.',
    },
    {
      icon: Shield,
      title: 'Honesty & Integrity',
      description: 'Transparent pricing and honest recommendations you can trust.',
    },
    {
      icon: Award,
      title: 'Quality Workmanship',
      description: 'Expert repairs backed by our warranty and decades of experience.',
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Proud to serve the Ames community for over 27 years.',
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white text-primary">About Us</Badge>
          <h1 className="heading-hero text-white mb-6">Family-Owned Since 1997</h1>
          <p className="body-lg text-white/90 max-w-2xl mx-auto">
            Three generations of automotive excellence serving the Ames community
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-xl mb-6">Our Story</h2>
              <div className="space-y-4 body-base text-muted-foreground">
                <p>
                  Fix It Auto Repair was founded in 1997 by John Smith, a master technician with a passion for 
                  automotive excellence and customer service. What started as a small one-bay shop has grown into 
                  Ames' most trusted auto repair facility.
                </p>
                <p>
                  For over 27 years, we've been committed to providing honest, reliable, and affordable auto repair 
                  services to our community. Our family-owned business has built its reputation on integrity, quality 
                  workmanship, and treating every customer like family.
                </p>
                <p>
                  Today, our team of ASE certified technicians continues to uphold the same values that John founded 
                  the business on. We invest in the latest diagnostic equipment and training to ensure we can service 
                  all makes and models, from classic cars to the newest vehicles on the road.
                </p>
                <p>
                  We're proud to be part of the NAPA AutoCare network, which allows us to offer a nationwide 2-year/24,000-mile 
                  warranty on all our repairs. This gives our customers peace of mind knowing they're covered wherever they go.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <img 
                src="/hero-front-shop-1920w.jpg" 
                alt="Fix It Auto Repair Shop" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/AdobeStock_276628168-291h.jpeg" 
                  alt="Shop Interior" 
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
                <img 
                  src="/AdobeStock_387693488+(1)-556h.jpeg" 
                  alt="Technician at Work" 
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="heading-xl mb-4">What We Stand For</h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="heading-sm mb-2">{value.title}</h3>
                  <p className="body-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Team</Badge>
            <h2 className="heading-xl mb-4">Meet Our Expert Technicians</h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              ASE certified professionals dedicated to keeping your vehicle running smoothly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="heading-sm mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <div className="space-y-2">
                    {member.certifications.map((cert, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-xl text-white mb-8">Certified & Trusted</h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div>
              <img 
                src="/454-4549310_ase-certified-ase-certified-logo-clipart-84w.png" 
                alt="ASE Certified" 
                className="h-24 w-auto mx-auto mb-4"
              />
              <p className="body-base text-white/90">ASE Certified Technicians</p>
            </div>
            <div>
              <img 
                src="/warranty-img-removebg-preview+1-8b134481-659w.png" 
                alt="NAPA Warranty" 
                className="h-24 w-auto mx-auto mb-4"
              />
              <p className="body-base text-white/90">NAPA AutoCare Center</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}