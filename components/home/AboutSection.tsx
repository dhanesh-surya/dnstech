import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-20" id="about">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80"
              alt="Web Design & Development"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div>
            <h2 className="mb-6 font-heading text-h2 text-gray-900">
              About DNS TechSupport – 24/7
            </h2>
            <p className="mb-6 text-body-large text-gray-700">
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
            <p className="mb-8 text-body text-gray-600">
              Whatever your technology challenge, our team is ready to help
              around the clock with dependable support and solutions tailored to
              your needs.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary-500" />
                <span className="text-body text-gray-700">
                  24/7 Technical Support & Guidance
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary-500" />
                <span className="text-body text-gray-700">
                  Modern Website Development
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary-500" />
                <span className="text-body text-gray-700">
                  Custom Software Solutions
                </span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary-500" />
                <span className="text-body text-gray-700">
                  Expert Technology Consulting
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
