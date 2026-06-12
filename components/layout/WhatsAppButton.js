import Icon from "@/components/ui/Icon";
import { createPackageEnquiryUrl } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp"
      href={createPackageEnquiryUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Tarun Travel Hub on WhatsApp"
    >
      <span>WhatsApp us</span>
      <b><Icon name="whatsapp" size={20} /></b>
    </a>
  );
}
