'use client';

import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || '917898726342';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20need%20assistance%20with%20my%20technology%20needs.`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:scale-110 hover:bg-green-600 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      {isHovered && (
        <span className="absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-sm text-white shadow-lg">
          Chat on WhatsApp
        </span>
      )}
    </a>
  );
}
