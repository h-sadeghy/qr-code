import { MapPin, MessageCircle, Phone } from "lucide-react";
import { messages } from "../assets/utils/messages";

export default function BottomMenu({ scrollToMap }) {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-base-100/95 backdrop-blur border-t shadow-lg md:hidden z-50">
      <div className="flex justify-around items-center h-12">
        <a
          href={`https://wa.me/989362924812?text=${messages.whatsapp}`}
          className="flex flex-col items-center text-primary "
        >
          <MessageCircle />
          <span className="text-xs">WhatsApp</span>
        </a>

        <a href="tel:+989362924812" className="flex flex-col items-center">
          <Phone />
          <span className="text-xs">Call</span>
        </a>

        <button onClick={scrollToMap} className="flex flex-col items-center">
          <MapPin />
          <span className="text-xs">Map</span>
        </button>
      </div>
    </div>
  );
}
