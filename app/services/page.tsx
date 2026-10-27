import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  HeadphonesIcon,
  Globe,
  Code2,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore our comprehensive technology services: IT Support & Technology Guidance, Website Development & Custom Applications, and Software Solutions & Digital Tools. Available 24/7.',
  openGraph: {
    title: 'Our Services - DNS TechSupport',
    description:
      'IT Support, Web Development, and Custom Software Solutions available 24/7.',
  },
};

const services = [
  {
    id: 'it-support',
    icon: HeadphonesIcon,
    title: 'IT Support and Technology Guidance',
    shortDesc:
      'Practical, reliable IT support and expert technology guidance available 24/7.',
    description:
      'We provide comprehensive IT support and technology guidance for individuals, professionals, educational institutions, and businesses. Our team is available around the clock to help with technical challenges, system maintenance, troubleshooting, and strategic technology planning.',
    features: [
      '24/7 Technical Support',
      'Remote & On-site Assistance',
      'System Maintenance & Updates',
      'Network Configuration',
      'Security Solutions',
      'Technology Consulting',
      'Hardware & Software Setup',
      'Data Backup & Recovery',
    ],
    image:
      'https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?w=800&q=80',
    color: 'primary',
  },
  {
    id: 'web-development',
    icon: Globe,
    title: 'Website Development and Custom Applications',
    shortDesc:
      'Modern, responsive websites and customized applications designed for your goals.',
    description:
      'We create modern, responsive websites and custom web applications tailored to your specific needs. From corporate websites to e-commerce platforms and progressive web apps, we deliver solutions that combine beautiful design with powerful functionality.',
    features: [
      'Responsive Web Design',
      'E-commerce Solutions',
      'Custom Web Applications',
      'Progressive Web Apps (PWAs)',
      'Content Management Systems',
      'API Development & Integration',
      'Performance Optimization',
      'SEO & Analytics Setup',
    ],
    image:
      'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
    color: 'secondary',
  },
  {
    id: 'software-solutions',
    icon: Code2,
    title: 'Software Solutions and Digital Tools',
    shortDesc:
      'Tailored software solutions that streamline workflows and boost efficiency.',
    description:
      'We develop custom software solutions and digital tools designed to automate workflows, improve productivity, and drive digital transformation. Our solutions are built to integrate seamlessly with your existing systems while addressing your unique business challenges.',
    features: [
      'Custom Software Development',
      'Workflow Automation',
      'Business Process Optimization',
      'System Integration Services',
      'Mobile App Development',
      'Database Design & Management',
      'Cloud Solutions',
      'Legacy System Modernization',
    ],
    image:
      'https://images.unsplash.com/photo-1758626104169-6835c0bd03e3?w=800&q=80',
    color: 'accent',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 py-20 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="mb-6 font-heading text-h1 animate-fade-in">
              Our Services
            </h1>
            <p className="text-body-large text-primary-50 animate-slide-up">
              Comprehensive technology solutions designed to meet your needs.
              From IT support to custom software development, we&apos;re here to help
              24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <Clock className="mx-auto mb-4 h-12 w-12 text-primary-500" />
              <h3 className="mb-2 font-heading text-h5 text-gray-900">
                24/7 Available
              </h3>
              <p className="text-body text-gray-600">
                Round-the-clock support whenever you need assistance
              </p>
            </div>
            <div className="text-center">
              <Users className="mx-auto mb-4 h-12 w-12 text-primary-500" />
              <h3 className="mb-2 font-heading text-h5 text-gray-900">
                Expert Team
              </h3>
              <p className="text-body text-gray-600">
                Experienced professionals dedicated to your success
              </p>
            </div>
            <div className="text-center">
              <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-primary-500" />
              <h3 className="mb-2 font-heading text-h5 text-gray-900">
                Tailored Solutions
              </h3>
              <p className="text-body text-gray-600">
                Custom approaches designed for your specific needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="grid gap-12 lg:grid-cols-2 lg:items-center"
                >
                  <div
                    className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <div
                      className={`mb-4 inline-flex rounded-lg bg-${service.color}-100 p-3`}
                    >
                      <Icon className={`h-8 w-8 text-${service.color}-600`} />
                    </div>
                    <h2 className="mb-4 font-heading text-h2 text-gray-900">
                      {service.title}
                    </h2>
                    <p className="mb-6 text-body-large text-gray-700">
                      {service.description}
                    </p>

                    <h3 className="mb-4 font-heading text-h5 text-gray-900">
                      Key Features:
                    </h3>
                    <div className="mb-8 grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <CheckCircle2 className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-primary-500" />
                          <span className="text-body text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="group inline-flex items-center text-body-large font-medium text-primary-600 transition-colors hover:text-primary-700"
                    >
                      Get Started with This Service
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  <div
                    className={`relative h-[500px] overflow-hidden rounded-2xl shadow-xl ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-16 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4 font-heading text-h2">
            Ready to Transform Your Technology?
          </h2>
          <p className="mb-8 text-body-large text-primary-50">
            Let&apos;s discuss which service is right for your needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-medium text-primary-600 transition-transform hover:scale-105 hover:shadow-lg"
            >
              Contact Us
            </Link>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg border-2 border-white px-8 py-3 font-medium text-white transition-all hover:bg-white hover:text-primary-600"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
