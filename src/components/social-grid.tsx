import Link from "next/link";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";

const socialLinks = [
  {
    name: "GitHub",
    handle: "buoysophit",
    href: DATA.contact.social.GitHub.url,
    Icon: Icons.github,
  },
  {
    name: "LinkedIn",
    handle: "buoy-sophit",
    href: DATA.contact.social.LinkedIn.url,
    Icon: Icons.linkedin,
  },
  {
    name: "Telegram",
    handle: "@buoysophitt",
    href: DATA.contact.social.Telegram.url,
    Icon: Icons.telegram,
  },
  {
    name: "Email",
    handle: "Bouysophit11",
    href: `mailto:${DATA.contact.email}`,
    Icon: Icons.email,
  },
  {
    name: "Facebook",
    handle: "buoysophit",
    href: "https://www.facebook.com/buoysophit",
    Icon: Icons.facebook,
  },
  {
    name: "KhmerCoder",
    handle: "@phitter",
    href: DATA.contact.social.KhmerCoder.url,
    Icon: Icons.khmercoder,
  },
];

export function SocialGrid() {
  return (
    <div className="grid grid-cols-2 gap-px border border-border rounded-lg overflow-hidden bg-border">
      {socialLinks.map(({ name, handle, href, Icon }) => (
        <Link
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 bg-background p-4 hover:bg-accent/50 transition-colors"
        >
          <div className="flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
            <Icon className="h-8 w-8 text-foreground dark:text-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-xs text-muted-foreground mt-0.5 truncate">{handle}</p>
          </div>
          {/* Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            style={{ transition: "transform 0.15s ease, color 0.15s ease" }}
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </Link>
      ))}
    </div>
  );
}
