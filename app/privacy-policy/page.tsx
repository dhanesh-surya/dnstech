import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for DNS TechSupport - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-16 text-white">
        <div className="container-custom">
          <h1 className="font-heading text-h1">Privacy Policy</h1>
          <p className="mt-2 text-body text-primary-50">
            Last updated: October 26, 2026
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="prose prose-lg max-w-4xl">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us when you use our
              services, including when you fill out contact forms, request
              services, or communicate with us.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about services and updates</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell or share your personal information with third
              parties except as described in this policy or with your consent.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your
              personal information from unauthorized access, alteration, or
              destruction.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us
              at:
            </p>
            <p>
              Email: digidhanesh@gmail.com
              <br />
              Phone: 789-872-6342
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
