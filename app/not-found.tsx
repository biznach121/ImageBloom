import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: `Page not found — ${brand.name}`,
  description: "We couldn't find that page.",
};

export default function NotFound() {
  return (
    <section className="spabox-page">
      <div className="spabox-shell max-w-[760px] text-center">
        <div className="spabox-hero">
          <p className="spabox-eyebrow">404</p>
          <h1 className="spabox-title mx-auto">Page not found.</h1>
          <p className="spabox-lede mx-auto">
            The URL may be old, misspelled, or pointing at something that moved.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/services" className="spabox-link-button">
            Browse services
          </Link>
          <Link
            href="/products"
            className="inline-flex min-h-14 items-center justify-center border border-[#00394f]/18 px-7 text-sm font-semibold text-[#00394f] transition-colors hover:bg-[#c4d3f8]"
          >
            Browse products
          </Link>
          <Link
            href="/"
            className="inline-flex min-h-14 items-center justify-center border border-[#00394f]/18 px-7 text-sm font-semibold text-[#00394f] transition-colors hover:bg-[#c4d3f8]"
          >
            Back home
          </Link>
        </div>
      </div>
    </section>
  );
}
