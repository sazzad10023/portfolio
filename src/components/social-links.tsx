import { socialLinks } from "@/data/portfolio";
import { socialIcons } from "./icons";

type SocialLinksProps = {
  className?: string;
  size?: "sm" | "md";
};

export function SocialLinks({ className = "", size = "md" }: SocialLinksProps) {
  const box = size === "sm" ? "h-8 w-8" : "h-9 w-9";
  const icon = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";

  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {socialLinks.map((link) => {
        const Icon = socialIcons[link.icon];

        return (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={link.label}
              className={`flex ${box} items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-white/25 hover:bg-white/10 hover:text-white`}
            >
              <Icon className={icon} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
