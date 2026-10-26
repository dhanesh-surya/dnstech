import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-24 text-white lg:py-32">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm animate-fade-in">
            Available 24/7 for Your Support
          </div>
          <h1 className="mb-6 font-heading text-display font-bold leading-tight animate-slide-up md:text-[72px]">
            DNS TechSupport – 24/7
          </h1>
          <p className="mb-4 text-2xl font-medium text-primary-50 animate-slide-up md:text-3xl">
            Technology | Support | Solutions
          </p>
          <p className="mb-10 text-body-large text-primary-100 animate-slide-up">
            Practical IT support, website development, and software solutions
            designed to simplify technology for individuals, professionals,
            educational institutions, and businesses.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row animate-fade-in">
            <Link
              href="/services"
              className="group inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 font-medium text-primary-600 transition-all hover:scale-105 hover:shadow-xl"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 font-medium text-white transition-all hover:bg-white hover:text-primary-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-1/4 h-72 w-72 rounded-full bg-primary-500/20 blur-3xl"></div>
        <div className="absolute -right-4 bottom-1/4 h-72 w-72 rounded-full bg-primary-400/20 blur-3xl"></div>
      </div>
    </section>
  );
}
