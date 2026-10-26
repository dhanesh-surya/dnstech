import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'DNS TechSupport provides practical IT support, website development, software solutions, and technology guidance. Learn about our mission, values, and commitment to simplifying technology.',
  openGraph: {
    title: 'About DNS TechSupport',
    description:
      'Learn about our mission to simplify technology through reliable support and modern solutions.',
  },
};

const values = [
  {
    title: 'Reliability',
    description: '24/7 availability and dependable support when you need it most.',
  },
  {
    title: 'Expertise',
    description: 'Experienced professionals with deep technical knowledge.',
  },
  {
    title: 'Innovation',
    description: 'Modern solutions using cutting-edge technologies.',
  },
  {
    title: 'Customer Focus',
    description: 'Tailored solutions designed around your specific needs.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 py-20 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="mb-6 font-heading text-h1 animate-fade-in">
              About DNS TechSupport
            </h1>
            <p className="text-body-large text-primary-50 animate-slide-up">
              Simplifying technology through reliable support, modern solutions,
              and expert guidance. Available 24/7 to serve you.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 font-heading text-h2 text-gray-900">
                Our Mission
              </h2>
              <p className="mb-4 text-body-large text-gray-700">
                DNS TechSupport provides practical IT support, website
                development, software solutions, and technology guidance for
                individuals, professionals, educational institutions, and
                businesses.
              </p>
              <p className="mb-6 text-body text-gray-600">
                Our goal is to simplify technology through reliable technical
                assistance, modern web solutions, customized applications, and
                useful digital tools. We focus on making technology accessible,
                efficient, and easier to use.
              </p>
              <p className="text-body text-gray-600">
                Whatever your technology challenge, our team is ready to help
                around the clock with dependable support and solutions tailored
                to your needs.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-surface py-20">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-heading text-h2 text-gray-900">
              Our Core Values
            </h2>
            <p className="mx-auto max-w-2xl text-body-large text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <CheckCircle2 className="mb-4 h-10 w-10 text-primary-500" />
                <h3 className="mb-2 font-heading text-h5 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-body text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="Technology workspace"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="lg:order-1">
              <h2 className="mb-6 font-heading text-h2 text-gray-900">
                Serving Chhattisgarh & Beyond
              </h2>
              <p className="mb-4 text-body-large text-gray-700">
                Based in Pamgarh, Chhattisgarh, we provide technology solutions
                to clients across India and internationally.
              </p>
              <p className="mb-6 text-body text-gray-600">
                Our remote support capabilities mean we can assist you wherever
                you are, while our local presence ensures personalized service
                for clients in the region.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary-500" />
                  <span className="text-body text-gray-700">
                    24/7 Remote Support Available
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary-500" />
                  <span className="text-body text-gray-700">
                    On-site Services in Chhattisgarh
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary-500" />
                  <span className="text-body text-gray-700">
                    Serving Clients Nationwide
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-16 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4 font-heading text-h2">Ready to Get Started?</h2>
          <p className="mb-8 text-body-large text-primary-50">
            Let's discuss how we can help with your technology needs
          </p>
          <a
            href="/contact"
            className="inline-block rounded-lg bg-white px-8 py-3 font-medium text-primary-600 transition-transform hover:scale-105 hover:shadow-lg"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
