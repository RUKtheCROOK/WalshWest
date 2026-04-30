import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="border-b border-border/50 bg-surface-subtle/50 py-1.5">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-xs text-muted-foreground">
            A branch office of{" "}
            <a
              href="https://walshtrading.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              Walsh Trading, Inc.
            </a>
            {" "}— Guaranteed Introducing Broker, NFA Member
          </p>
        </div>
      </div>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <Image
            src="/images/walsh-west-mark.png"
            alt=""
            width={736}
            height={463}
            priority
            className="h-10 w-auto"
          />
          <span className="font-serif text-2xl font-bold tracking-tight text-text-emphasis">
            Walsh West
          </span>
        </Link>
        <nav className="flex items-center">
          <ul className="flex items-center gap-0.5">
            <li>
              <Link
                href="/"
                className="small-caps inline-flex h-9 items-center justify-center px-4 py-2 text-xs transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="small-caps inline-flex h-9 items-center justify-center px-4 py-2 text-xs transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="small-caps inline-flex h-9 items-center justify-center px-4 py-2 text-xs transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/hedging-calculators"
                className="small-caps inline-flex h-9 items-center justify-center px-4 py-2 text-xs transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Tools
              </Link>
            </li>
            <li>
              <Link
                href="/calendar"
                className="small-caps inline-flex h-9 items-center justify-center px-4 py-2 text-xs transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Calendar
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="ml-2 inline-flex h-9 items-center justify-center border border-primary bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-accent hover:border-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
