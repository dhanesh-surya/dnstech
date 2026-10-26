import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for DNS TechSupport - Please read these terms carefully before using our services.',
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-16 text-white">
        <div className="container-custom">
          <h1 className="font-heading text-h1">Terms of Service</h1>
          <p className="mt-2 text-body text-primary-50">
            Last updated: October 26, 2026
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="prose prose-lg max-w-4xl">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using DNS TechSupport services, you accept and
              agree to be bound by these Terms of Service.
            </p>

            <h2>2. Services</h2>
            <p>
              DNS TechSupport provides IT support, website development, and
              software solutions. We reserve the right to modify or discontinue
              services at any time.
            </p>

            <h2>3. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate information</li>
              <li>Maintain the security of your account</li>
              <li>Use services in compliance with applicable laws</li>
              <li>Not engage in any harmful or illegal activities</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              All content and materials provided by DNS TechSupport are
              protected by intellectual property rights.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              DNS TechSupport shall not be liable for any indirect, incidental,
              or consequential damages arising from the use of our services.
            </p>

            <h2>6. Contact Information</h2>
            <p>
              For questions about these Terms, contact us at:
              <br />
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
