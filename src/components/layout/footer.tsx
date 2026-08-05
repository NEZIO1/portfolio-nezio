import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-border border-t">
      <div className="text-muted-foreground mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <p>{site.domain}</p>
      </div>
    </footer>
  );
}
