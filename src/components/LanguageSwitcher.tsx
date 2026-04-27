import { Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Lang } from "@/i18n/translations";

const languages: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "ar", label: "العربية", flag: "🇲🇦" },
];

interface Props {
  variant?: "light" | "dark";
}

export const LanguageSwitcher = ({ variant = "light" }: Props) => {
  const { lang, setLang } = useLanguage();
  const current = languages.find((l) => l.code === lang)!;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-base ${
          variant === "dark"
            ? "border-background/30 text-background hover:bg-background/10"
            : "border-border text-foreground hover:bg-muted"
        }`}
        aria-label="Change language"
      >
        <Globe className="w-3.5 h-3.5" />
        <span className="uppercase tracking-wider">{current.code}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        {languages.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`cursor-pointer ${l.code === lang ? "bg-muted font-medium" : ""}`}
          >
            <span className="mr-2">{l.flag}</span>
            {l.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
