import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function FAQPage() {
  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'What types of vehicles do you service?',
          answer: 'We service all makes and models of domestic, Asian, and European vehicles. Our ASE certified technicians have the expertise and equipment to handle everything from classic cars to the latest models.',
        },
        {
          question: 'Do I need an appointment?',
          answer: 'While we accept walk-ins, we highly recommend scheduling an appointment to ensure we can accommodate you at your preferred time. You can book online through our website or call us at (515) 292-0177.',
        },
        {
          question: 'How long will my service take?',
          answer: 'Service times vary depending on the work needed. Simple services like oil changes typically take 30-45 minutes, while more complex repairs may take several hours or require leaving your vehicle overnight. We\'ll provide an estimated completion time when you schedule your appointment.',
        },
        {
          question: 'Do you offer a shuttle service or loaner cars?',
          answer: 'We offer a comfortable waiting room with WiFi for shorter services. For longer repairs, we can arrange alternative transportation options. Please ask our service advisors about available options when scheduling your appointment.',
        },
      ],
    },
    {
      category: 'Pricing & Payment',
      questions: [
        {
          question: 'How much will my repair cost?',
          answer: 'We provide free estimates for all repairs. After diagnosing your vehicle, we\'ll give you a detailed written estimate before performing any work. We believe in transparent pricing with no hidden fees.',
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept cash, all major credit cards (Visa, MasterCard, American Express, Discover), and debit cards. We also offer financing options for larger repairs through approved credit.',
        },
        {
          question: 'Do you price match?',
          answer: 'We strive to offer competitive pricing for quality service. If you have a written estimate from another reputable shop, bring it in and we\'ll do our best to match or beat it while maintaining our high standards of quality.',
        },
      ],
    },
    {
      category: 'Warranty & Quality',
      questions: [
        {
          question: 'What warranty do you offer on repairs?',
          answer: 'All our repairs are backed by the NAPA AutoCare 2-year/24,000-mile nationwide warranty. This means you\'re covered wherever you go in North America. Some parts may have longer manufacturer warranties.',
        },
        {
          question: 'What if I have a problem after the repair?',
          answer: 'If you experience any issues with a repair we\'ve performed, bring your vehicle back immediately. We stand behind our work and will make it right at no additional charge if the issue is related to our service.',
        },
        {
          question: 'Are your technicians certified?',
          answer: 'Yes! All our technicians are ASE (Automotive Service Excellence) certified. We invest in ongoing training to ensure our team stays current with the latest automotive technology and repair techniques.',
        },
      ],
    },
    {
      category: 'Services',
      questions: [
        {
          question: 'How often should I get an oil change?',
          answer: 'Most modern vehicles need an oil change every 5,000-7,500 miles with synthetic oil, or every 3,000-5,000 miles with conventional oil. However, always refer to your vehicle\'s owner\'s manual for manufacturer recommendations.',
        },
        {
          question: 'When should I replace my timing belt?',
          answer: 'Timing belt replacement intervals vary by vehicle, typically between 60,000-100,000 miles. Check your owner\'s manual for your specific vehicle\'s recommendation. This is critical maintenance that prevents costly engine damage.',
        },
        {
          question: 'Do you perform state inspections?',
          answer: 'Yes, we perform complete vehicle inspections and can identify any issues that need attention. We\'ll provide a detailed report of your vehicle\'s condition and recommend necessary repairs.',
        },
        {
          question: 'Can you diagnose my check engine light?',
          answer: 'Absolutely! We use advanced diagnostic equipment to read error codes and identify the root cause of your check engine light. Our diagnostic service includes a comprehensive scan and detailed explanation of any issues found.',
        },
      ],
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white text-primary">FAQ</Badge>
          <h1 className="heading-hero text-white mb-6">Frequently Asked Questions</h1>
          <p className="body-lg text-white/90 max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="heading-lg mb-6">{category.category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`${categoryIndex}-${index}`}>
                    <AccordionTrigger className="text-left heading-sm">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="body-base text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-xl mb-4">Still Have Questions?</h2>
          <p className="body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our friendly team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+15152920177" className="inline-block">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-white shadow hover:bg-primary/90 hover:scale-105 active:scale-95 h-12 rounded-md px-8 text-base">
                Call Us: (515) 292-0177
              </button>
            </a>
            <a href="/contact" className="inline-block">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-12 rounded-md px-8 text-base">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}