import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | USA Coin Collector',
  description: 'How USA Coin Collector handles information from our website, Digital Vault, and customer support, including Amazon Chat Support.'
};

const sections = [
  [
    "Information we collect",
    "When you contact USA Coin Collector, we receive the information you provide, such as your name, email address, order number, product questions, messages, and any photos or attachments. For order support, we may also receive relevant order, delivery, and return information from the marketplace where you purchased. If you use the Digital Vault, we process account information and the collection details and photos you choose to save. Our website and service providers may process technical information such as IP addresses, browser information, and request logs to operate and protect the service."
  ],
  [
    "Amazon customer support chat",
    "When you contact us through Amazon Chat Support, we receive the messages and information Amazon makes available to help answer your questions and resolve your request. This may include chat history, attachments, and relevant order information. We use this information to provide customer support, handle delivery issues, returns or replacements, and maintain records of the assistance provided. Please share only information needed for your request. Do not send passwords, full payment card details, Social Security numbers, or other sensitive information through chat."
  ],
  [
    "How we use information",
    "We use personal information to respond to inquiries, provide product guidance, resolve order issues, operate your Digital Vault account, maintain our services, prevent spam and misuse, and meet applicable legal obligations. Customer support information is used for support and related business records, rather than unrelated advertising."
  ],
  [
    "When information is shared",
    "Information may be handled by service providers that support website hosting, account authentication, data storage, email delivery, and customer support. Relevant information may also be shared with a marketplace or shipping provider when needed to resolve your order issue. We may disclose information when required by law or reasonably necessary to protect rights, safety, or the security of our services. We do not sell customer support messages or use them for cross-context behavioral advertising."
  ],
  [
    "Cookies and third-party services",
    "Our website uses cookies or similar technologies where needed for features such as account sign-in and session management. You can control cookies through your browser settings, although blocking them may affect account features. Amazon, eBay, and other external services process information under their own privacy notices. Their practices, including information they collect directly, are governed by those notices."
  ],
  [
    "Retention and security",
    "We keep information for as long as reasonably needed to provide services, resolve support requests, maintain necessary business records, and meet legal obligations. Retention can vary with the type of record and the service involved. We use reasonable safeguards designed to protect information, but no method of transmission or storage is completely secure."
  ],
  [
    "Your choices and requests",
    "You may contact us to request access to, correction of, or deletion of personal information we hold about you. Depending on your location and applicable law, you may have additional privacy rights. We may need to verify your identity before acting on a request, and some records may need to be retained for legal or legitimate business reasons. For information held directly by Amazon or eBay, please use that marketplace’s privacy controls or contact it directly."
  ],
  [
    "Children’s privacy",
    "Our website and customer support are intended for adults and are not directed to children under 13. If you believe a child has provided personal information to us, please contact us so we can address it."
  ],
  [
    "Changes to this policy",
    "We may update this policy as our services or practices change. The updated policy will be posted on this page with a revised date."
  ]
];

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 pb-12">
      <Link className="text-sm text-slate-700 underline underline-offset-4 hover:text-[#102a63]" href="/">
        Back to homepage
      </Link>
      <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-slate-500">Effective date: October 29, 2026 · Last updated: October 29, 2026</p>
        <p className="mt-6 leading-7 text-slate-600">
          USA Coin Collector (“we,” “us,” and “our”) respects your privacy. This policy explains how we
          handle personal information when you visit usacoincollector.com, use our Digital Vault, or
          contact us for customer support, including through Amazon Chat Support.
        </p>
        <div className="mt-8 space-y-8">
          {sections.map(([title, text]) => (
            <section aria-labelledby={title.toLowerCase().replace(/[^a-z]+/g, '-')} key={title}>
              <h2 className="text-xl font-bold text-[#102a63]" id={title.toLowerCase().replace(/[^a-z]+/g, '-')}>{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </section>
          ))}
          <section aria-labelledby="contact">
            <h2 className="text-xl font-bold text-[#102a63]" id="contact">Contact us</h2>
            <p className="mt-3 leading-7 text-slate-600">
              For privacy questions or requests, use our{' '}
              <Link className="font-semibold text-[#102a63] underline underline-offset-4" href="/contact-us">Contact Us page</Link>
              {' '}and include “Privacy request” in your message. For an Amazon order, you can also reach us through Amazon’s messaging tools.
            </p>
          </section>
          <p className="border-t border-slate-200 pt-6 text-sm leading-6 text-slate-500">
            Marketplace privacy notices:{' '}
            <a className="underline underline-offset-4" href="https://www.amazon.com/privacy">Amazon Privacy Notice</a>
            {' · '}
            <a className="underline underline-offset-4" href="https://www.ebay.com/help/policies/member-behavior-policies/user-privacy-notice-privacy-policy?id=4260">eBay User Privacy Notice</a>
          </p>
        </div>
      </article>
    </div>
  );
}
