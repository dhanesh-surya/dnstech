import Link from 'next/link';
import { HeadphonesIcon, Globe, Code2, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: HeadphonesIcon,
    title: 'IT Support and Technology Guidance',
    description:
      'Practical, reliable IT support and expert technology guidance for individuals, professionals, educational institutions, and businesses, available 24/7.',
    href: '/services#it-support',
    color: 'primary',
  },
  {
    icon: Globe,
    title: 'Website Development and Custom Applications',
    description:
      'Modern, responsive websites and customized applications designed to meet your goals and deliver a smooth experience for your users.',
    href: '/services#web-development',
    color: 'secondary',
  },
  {
    icon: Code2,
    title: 'Software Solutions and Digital Tools',
    description:
      'Tailored software solutions and useful digital tools that streamline your workflows, boost efficiency, and make technology easier to use.',
    href: '/services#software-solutions',
    color: 'accent',
  },
];

export function ServicesSection() {
  return (
    <section className="bg-surface py-20" id="services">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-h2 text-gray-900">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-body-large text-gray-600">
            Comprehensive technology solutions tailored to your needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-xl"
              >
                <div className={`mb-4 inline-flex rounded-lg bg-${service.color}-100 p-3`}>
                  <Icon className={`h-8 w-8 text-${service.color}-600`} />
                </div>
                <h3 className="mb-3 font-heading text-h5 text-gray-900">
                  {service.title}
                </h3>
                <p className="mb-4 text-body text-gray-600">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-body font-medium text-primary-600 transition-colors group-hover:text-primary-700"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center rounded-lg bg-primary-600 px-8 py-3 font-medium text-white transition-all hover:bg-primary-700 hover:shadow-lg"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
