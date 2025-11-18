import { Calendar, User, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function BlogPage() {
  const posts = [
    {
      title: '10 Signs Your Car Needs Immediate Attention',
      excerpt: 'Learn to recognize the warning signs that indicate your vehicle needs professional service before a small problem becomes a major repair.',
      image: '/AdobeStock_359990899-7e5517db-1920w.jpeg',
      category: 'Maintenance Tips',
      date: 'November 15, 2024',
      author: 'John Smith',
    },
    {
      title: 'Winter Car Care: Preparing Your Vehicle for Cold Weather',
      excerpt: 'Essential tips to winterize your vehicle and ensure safe, reliable performance during the harsh Iowa winter months.',
      image: '/AdobeStock_225509977+(1)-1920w.jpeg',
      category: 'Seasonal Care',
      date: 'November 10, 2024',
      author: 'Mike Johnson',
    },
    {
      title: 'Understanding Your Check Engine Light',
      excerpt: 'What does that check engine light really mean? We break down common causes and when you should be concerned.',
      image: '/AdobeStock_276628168-291h.jpeg',
      category: 'Diagnostics',
      date: 'November 5, 2024',
      author: 'Sarah Williams',
    },
    {
      title: 'The Importance of Regular Oil Changes',
      excerpt: 'Why regular oil changes are crucial for your engine\'s longevity and performance, plus how to choose the right oil for your vehicle.',
      image: '/AdobeStock_387693488+(1)-556h.jpeg',
      category: 'Maintenance Tips',
      date: 'October 28, 2024',
      author: 'David Martinez',
    },
    {
      title: 'How to Extend the Life of Your Brakes',
      excerpt: 'Simple driving habits and maintenance practices that can significantly extend the life of your brake system.',
      image: '/Mask+group-1920w.jpg',
      category: 'Maintenance Tips',
      date: 'October 20, 2024',
      author: 'John Smith',
    },
    {
      title: 'Electric Vehicles: What You Need to Know',
      excerpt: 'A comprehensive guide to electric vehicle maintenance and what makes servicing EVs different from traditional vehicles.',
      image: '/hero-front-shop-1920w.jpg',
      category: 'Industry News',
      date: 'October 15, 2024',
      author: 'Mike Johnson',
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white text-primary">Blog & News</Badge>
          <h1 className="heading-hero text-white mb-6">Auto Care Tips & News</h1>
          <p className="body-lg text-white/90 max-w-2xl mx-auto">
            Expert advice, maintenance tips, and industry news from our team
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Badge className="mb-6">Featured Post</Badge>
          <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto">
                <img 
                  src={posts[0].image} 
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="mb-4 w-fit">{posts[0].category}</Badge>
                <h2 className="heading-xl mb-4">{posts[0].title}</h2>
                <p className="body-lg text-muted-foreground mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{posts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{posts[0].author}</span>
                  </div>
                </div>
                <Button variant="accent" className="w-fit">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="heading-xl mb-12">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <CardHeader>
                  <Badge className="mb-2 w-fit">{post.category}</Badge>
                  <CardTitle className="heading-md">{post.title}</CardTitle>
                  <CardDescription className="body-base">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-xl text-white mb-4">Stay Updated</h2>
          <p className="body-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest auto care tips, special offers, and news
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm flex-1"
            />
            <Button variant="accent">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}