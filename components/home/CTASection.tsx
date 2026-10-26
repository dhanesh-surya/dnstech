import Link from 'next/link';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-20 text-white">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-heading text-h2">
            Ready to Simplify Your Technology?
          </h2>
          <p className="mb-10 text-body-large text-primary-50">
            Get in touch with our team today. We're here 24/7 to provide the
            support and solutions you need.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 font-medium text-primary-600 transition-all hover:scale-105 hover:shadow-xl"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${process.env.NEXT_PUBLIC_PHONE || '7898726342'}`}
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 font-medium text-white transition-all hover:bg-white hover:text-primary-600"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || '917898726342'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 font-medium text-white transition-all hover:bg-white hover:text-primary-600"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
