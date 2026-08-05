import { nav } from "@/content/nav";
import { site } from "@/content/site";
import { AvailabilityBadge } from "@/components/layout/availability-badge";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function Navbar() {
  return (
    <header className="border-border bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <a href="#home" className="text-lg font-semibold tracking-tight">
            {site.brand}
          </a>
          <AvailabilityBadge className="hidden sm:inline-flex" />
        </div>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-6 md:flex"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
