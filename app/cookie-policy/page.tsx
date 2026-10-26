import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy for DNS TechSupport - Learn about how we use cookies on our website.',
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-16 text-white">
        <div className="container-custom">
          <h1 className="font-heading text-h1">Cookie Policy</h1>
          <p className="mt-2 text-body text-primary-50">
            Last updated: October 26, 2026
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="prose prose-lg max-w-4xl">
            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on your device when
              you visit our website. They help us provide you with a better
              experience.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>We use cookies to:</p>
            <ul>
              <li>Remember your preferences</li>
              <li>Understand how you use our website</li>
              <li>Improve website performance</li>
              <li>Provide personalized content</li>
            </ul>

            <h2>3. Types of Cookies We Use</h2>
            <h3>Essential Cookies</h3>
            <p>Required for the website to function properly.</p>

            <h3>Analytics Cookies</h3>
            <p>Help us understand how visitors interact with our website.</p>

            <h3>Functional Cookies</h3>
            <p>Enable enhanced functionality and personalization.</p>

            <h2>4. Managing Cookies</h2>
            <p>
              You can control and manage cookies in your browser settings. Note
              that disabling cookies may affect website functionality.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              Questions about our Cookie Policy?
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
