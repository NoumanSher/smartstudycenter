// 'use client';
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "923000412637";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        fixed
        bottom-5 right-5
        z-50
        flex
        h-14 w-14
        items-center justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-lg
        transition-all duration-300
        hover:scale-110
        hover:shadow-xl
        sm:bottom-6 sm:right-6
        sm:h-16 sm:w-16
      "
    >
      <FaWhatsapp className="h-8 w-8 sm:h-9 sm:w-9" />
    </Link>
  );
}