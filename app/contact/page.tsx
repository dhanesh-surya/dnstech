'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const services = [
  'IT Support and Technology Guidance',
  'Website Development',
  'Custom Applications',
  'Software Solutions',
  'Digital Tools',
  'Technology Consulting',
  'Other',
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message:
            'Thank you for contacting us! We will get back to you shortly.',
        });
        reset();
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 py-20 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="mb-6 font-heading text-h1 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-body-large text-primary-50 animate-slide-up">
              Have a question or need assistance? We&apos;re here 24/7 to help. Reach
              out to us and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="mb-6 font-heading text-h3 text-gray-900">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-1 font-medium text-gray-900">Email</h3>
                    <a
                      href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || 'digidhanesh@gmail.com'}`}
                      className="text-body text-primary-600 hover:text-primary-700"
                    >
                      {process.env.NEXT_PUBLIC_EMAIL || 'digidhanesh@gmail.com'}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-1 font-medium text-gray-900">Phone</h3>
                    <a
                      href={`tel:${process.env.NEXT_PUBLIC_PHONE || '7898726342'}`}
                      className="text-body text-primary-600 hover:text-primary-700"
                    >
                      {process.env.NEXT_PUBLIC_PHONE || '789-872-6342'}
                    </a>
                    <p className="text-small text-gray-500">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-1 font-medium text-gray-900">Location</h3>
                    <p className="text-body text-gray-600">
                      {process.env.NEXT_PUBLIC_ADDRESS ||
                        'Pamgarh, Chhattisgarh, India'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 rounded-lg bg-primary-50 p-6">
                <h3 className="mb-3 font-heading text-h5 text-gray-900">
                  Business Hours
                </h3>
                <div className="space-y-2 text-body text-gray-700">
                  <div className="flex justify-between">
                    <span>24/7 Support:</span>
                    <span className="font-medium text-primary-600">
                      Always Available
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-surface p-8 shadow-sm">
                <h2 className="mb-6 font-heading text-h3 text-gray-900">
                  Send Us a Message
                </h2>

                {submitStatus.type && (
                  <div
                    className={`mb-6 rounded-lg p-4 ${
                      submitStatus.type === 'success'
                        ? 'bg-green-50 text-green-800'
                        : 'bg-red-50 text-red-800'
                    }`}
                  >
                    <div className="flex items-center">
                      {submitStatus.type === 'success' && (
                        <CheckCircle2 className="mr-2 h-5 w-5" />
                      )}
                      <p>{submitStatus.message}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-body font-medium text-gray-700"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name')}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-body transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-small text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-body font-medium text-gray-700"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email')}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-body transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-small text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-body font-medium text-gray-700"
                    >
                      Phone <span className="text-gray-400">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone')}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-body transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      placeholder="+91 XXX-XXX-XXXX"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-body font-medium text-gray-700"
                    >
                      Service Interest <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      {...register('service')}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-body transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-small text-red-600">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-body font-medium text-gray-700"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      {...register('message')}
                      rows={6}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-body transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      placeholder="Tell us about your project or requirements..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-small text-red-600">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-primary-600 px-8 py-4 font-medium text-white transition-all hover:bg-primary-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="bg-surface py-20">
        <div className="container-custom">
          <h2 className="mb-8 text-center font-heading text-h2 text-gray-900">
            Find Us
          </h2>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <div className="h-[450px] w-full bg-gray-200">
              {/* Google Maps embed would go here */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119032.56282717697!2d82.57899999999999!3d22.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDEyJzAwLjAiTiA4MsKwMzQnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DNS TechSupport Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
