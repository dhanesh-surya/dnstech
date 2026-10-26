import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const footerNavigation = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'IT Support', href: '/services#it-support' },
    { name: 'Web Development', href: '/services#web-development' },
    { name: 'Software Solutions', href: '/services#software-solutions' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 font-heading text-xl font-bold text-white">
              DNS TechSupport
            </h3>
            <p className="mb-4 text-small text-gray-400">
              Technology | Support | Solutions
              <br />
              Available 24/7 to serve you
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <Mail className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0" />
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                  className="text-small hover:text-primary-400"
                >
                  {process.env.NEXT_PUBLIC_EMAIL || 'digidhanesh@gmail.com'}
                </a>
              </div>
              <div className="flex items-start">
                <Phone className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0" />
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
                  className="text-small hover:text-primary-400"
                >
                  {process.env.NEXT_PUBLIC_PHONE || '789-872-6342'}
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0" />
                <span className="text-small">
                  {process.env.NEXT_PUBLIC_ADDRESS || 'Pamgarh, Chhattisgarh, India'}
                </span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-small hover:text-primary-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-small hover:text-primary-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h4>
            <ul className="space-y-2">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-small hover:text-primary-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-small text-gray-400">
              © {currentYear} DNS TechSupport – 24/7. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 transition-colors hover:text-primary-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
