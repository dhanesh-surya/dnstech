export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-surface px-4 py-20">
      <div className="text-center">
        <h1 className="mb-4 font-heading text-display font-bold text-primary-600">
          404
        </h1>
        <h2 className="mb-4 font-heading text-h2 text-gray-900">
          Page Not Found
        </h2>
        <p className="mb-8 text-body-large text-gray-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <a
          href="/"
          className="inline-block rounded-lg bg-primary-600 px-8 py-3 font-medium text-white transition-all hover:bg-primary-700 hover:shadow-lg"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
