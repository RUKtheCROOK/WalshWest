import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Walsh West</h3>
            <p className="text-sm text-muted-foreground">
              A branch office of Walsh Trading, Inc.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="hover:underline">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Parent Firm</h3>
            <p className="text-sm mb-2">
              <a
                href="https://walshtrading.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-600"
              >
                Walsh Trading, Inc.
              </a>
            </p>
            <p className="text-xs text-muted-foreground">
              Registered FCM/IB, NFA Member
            </p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t text-xs text-muted-foreground">
          <p>
            <strong>Risk Disclosure:</strong> Futures and options on futures involve substantial
            risk of loss and are not suitable for all investors. Past performance is not
            indicative of future results.
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} Walsh West. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
