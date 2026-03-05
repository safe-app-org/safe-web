import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms",
  description: "Read the basic terms for using Safe and its safety check-in features."
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-white">
      <Link href="/" className="text-sm text-mint transition hover:text-mintLight">
        Back to Safe
      </Link>
      <h1 className="mt-6 text-4xl font-display font-semibold">Terms</h1>
      <div className="mt-8 space-y-6 text-white/75">
        <p>
          Safe provides tools for fast safety check-ins, trusted contact updates, notifications,
          and optional location sharing controls.
        </p>
        <section>
          <h2 className="text-xl font-semibold text-white">Use of the app</h2>
          <p className="mt-2">
            You are responsible for the information you share and for choosing which trusted
            contacts receive your updates.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white">Availability</h2>
          <p className="mt-2">
            App features may change over time, including notification behavior, platform support,
            and optional regional alert integrations.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-white">Important limitation</h2>
          <p className="mt-2">
            Safe is designed to support communication with trusted contacts. It is not a substitute
            for emergency services or official public warning systems.
          </p>
        </section>
      </div>
    </main>
  );
}
