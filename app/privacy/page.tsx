import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how Safe handles privacy, status sharing, location controls, and trusted contacts."
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-white">
      <Link href="/" className="text-sm text-mint transition hover:text-mintLight">
        Back to Safe
      </Link>
      <h1 className="mt-6 text-4xl font-display font-semibold">Privacy Policy</h1>
      <div className="mt-8 space-y-6 text-white/75">
        <p>
          Safe is built to help people share fast safety check-ins with trusted contacts. Privacy
          is part of the product, not an afterthought.
        </p>
        <section>
          <h2 className="text-xl font-semibold text-white">What you share</h2>
          <p className="mt-2">
            You choose which safety status to share and whether location is shared automatically
            from your device or manually entered by you.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white">Trusted contacts</h2>
          <p className="mt-2">
            Safe is designed around trusted contacts. The service is not intended as a public feed
            or broad social network.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white">Location control</h2>
          <p className="mt-2">
            If location is shared, Safe should clearly indicate whether it comes from the device or
            from manual override. You remain in control of what is shared.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white">Updates</h2>
          <p className="mt-2">
            This page may be updated as the product evolves, including future regional alert
            integrations and distribution changes.
          </p>
        </section>
      </div>
    </main>
  );
}
