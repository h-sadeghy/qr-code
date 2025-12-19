import { Instagram } from "lucide-react";
import { messages } from "../assets/utils/messages";

export default function SocialLinks() {
  return (
    <div className="mt-8 grid grid-rows-2 grid-cols-2 gap-1">
      <a
        href={`https://wa.me/989362924812?text=${messages.whatsapp}`}
        rel="noopener noreferrer"
        className="btn  flex items-center gap-3 btn-block justify-center text-center "
      >
        <lord-icon
          src="/lottie/whatsapp.json"
          trigger="loop"
          colors="primary:#22c55e"
          style={{ width: "32px", height: "32px" }}
        />
        <span className="font-sans text-primary">WhatsApp</span>
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/mahdi_marvi14"
        rel="noopener noreferrer"
        className="btn  flex items-center gap-3 justify-center"
      >
        <lord-icon
          src="/lottie/instagram.json"
          trigger="loop"
          colors="primary:#22c55e"
          style={{ width: "32px", height: "32px" }}
        />
        <span className="font-sans text-primary">Instagram</span>
      </a>
      <a
        href={`https://t.me/your_username?text=${messages.telegram}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn  flex items-center gap-3 justify-center"
      >
        <lord-icon
          src="/lottie/telegram.json"
          trigger="loop"
          colors="primary:#22c55e"
          style={{ width: "32px", height: "32px" }}
        />
        <span className="font-sans text-primary ">Telegram</span>
      </a>
      <a
        href={`sms:+989362924128?body=${messages.sms}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn  flex items-center gap-3 justify-center-safe"
      >
        <lord-icon
          src="/lottie/sms.json"
          trigger="loop"
          colors="primary:#22c55e"
          style={{ width: "32px", height: "32px" }}
        />
        <span className="font-sans text-primary justify-between">Send SMS</span>
      </a>
    </div>
  );
}
