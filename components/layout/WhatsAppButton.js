import Icon from "@/components/ui/Icon";
import { createCabEnquiryUrl } from "@/lib/whatsapp";
import { getPublicSiteSettings } from "@/lib/publicSiteSettings";

export default async function WhatsAppButton() {
  const s = await getPublicSiteSettings();

  return (
    <a
      className="whatsapp"
      href={createCabEnquiryUrl("a cab", s.phone)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Tarun Travel Hub on WhatsApp"
    >
      <span>WhatsApp us</span>
      <b><Icon name="whatsapp" size={20} /></b>
    </a>
  );
}
