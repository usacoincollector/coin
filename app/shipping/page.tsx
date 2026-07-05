import Link from 'next/link';

const shippingPolicies = [
  {
    title: 'Free Shipping',
    details: ['Orders over $50 qualify for Free Shipping!']
  },
  {
    title: 'Processing Times',
    details: [
      'Orders are typically shipped same day Monday through Friday up until 4:30 PM CST and Saturday up until 11:00 AM CST.'
    ]
  },
  {
    title: 'Tracking',
    details: ['All orders will receive a tracking number.']
  },
  {
    title: 'Carriers',
    details: [
      'Orders are typically sent via USPS but we sometimes UPS or FedEx depending on which is the most efficient for your order.'
    ]
  }
];

const returnPolicy = [
  '30-day money-back guarantee',
  'Returns must be initiated within 30 days of purchase',
  'Products must be unused and in original packaging',
  'Defective items eligible for full refund or replacement'
];

const returnSteps = [
  'Contact our support team',
  'Receive a return shipping label',
  'Ship the item back (we cover shipping)',
  'Receive your refund within 5-7 business days'
];

const exchangeDetails = ['Free exchanges within 30 days', 'We cover return and new shipping', 'Fast processing and delivery'];

const faqs = [
  {
    question: 'Can I track my order?',
    answer:
      "Yes! All shipments include a tracking number that you'll receive via email. You can track your package in real-time to see exactly when it will arrive."
  },
  {
    question: 'What if my order arrives damaged?',
    answer:
      "Contact us within 48 hours of delivery with photos of the damage. We'll immediately send a replacement or issue a full refund. Our insurance covers all damage claims."
  },
  {
    question: "Can I return an item if I've opened the package?",
    answer:
      'For most items, yes. As long as the product is unused and in resellable condition, we accept returns even if the package has been opened. Defective items are always eligible for return regardless of packaging condition.'
  },
  {
    question: 'How long does a refund take?',
    answer:
      'Once we receive your return, it typically takes 5-7 business days to process your refund. Your bank may take an additional 1-2 business days to post the credit.'
  },
  {
    question: 'Do you offer international shipping?',
    answer:
      "Currently, we only ship to addresses within the United States. We're working on expanding our international shipping options. Please contact us if you have special requests."
  }
];

export default function ShippingPage() {
  return (
    <section className="space-y-8">
      <Link className="text-sm text-slate-700 hover:text-slate-900" href="/">
        {'<- Back to homepage'}
      </Link>

      <article className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm md:p-9">
        <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">Shipping & Returns</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Fast, reliable delivery and hassle-free returns.
        </p>
      </article>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-slate-950">Shipping Information</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {shippingPolicies.map((policy) => (
            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" key={policy.title}>
              <h3 className="text-xl font-bold text-slate-950">{policy.title}</h3>
              <ul className="mt-4 space-y-2 text-slate-600">
                {policy.details.map((detail) => (
                  <li className="flex gap-2" key={detail}>
                    <span className="text-[#c89e28]">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <p className="rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-600">
        <strong className="text-slate-900">Note:</strong> Shipping times are estimates based on business days only
        (Monday-Friday). Holidays and weekends are not included. Orders are typically processed within 1 business day.
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-950">Returns & Exchanges</h2>
          <h3 className="mt-5 text-lg font-semibold text-slate-900">Return Policy</h3>
          <ul className="mt-3 space-y-2 text-slate-600">
            {returnPolicy.map((item) => (
              <li className="flex gap-2" key={item}>
                <span className="text-[#c89e28]">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-lg font-semibold text-slate-900">How to Return</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-600">
            {returnSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <h3 className="mt-6 text-lg font-semibold text-slate-900">Exchanges</h3>
          <p className="mt-2 text-slate-600">Need a different size or product? We&apos;re happy to exchange.</p>
          <ul className="mt-3 space-y-2 text-slate-600">
            {exchangeDetails.map((item) => (
              <li className="flex gap-2" key={item}>
                <span className="text-[#c89e28]">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="space-y-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div>
            <h2 className="text-2xl font-bold text-slate-950">Packaging</h2>
            <p className="mt-3 leading-7 text-slate-600">
              All orders are carefully packed in protective packaging to ensure your products arrive in perfect condition.
              Items containing multiple pieces are bubble-wrapped and secured to prevent damage during transit.
            </p>
            <p className="mt-3 leading-7 text-slate-600">
              Fragile items like display cases are shipped in reinforced boxes with extra padding.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950">Insurance</h2>
            <p className="mt-3 leading-7 text-slate-600">
              All shipments are automatically insured against loss or damage. In the unlikely event that your order
              arrives damaged or missing items, we&apos;ll immediately send a replacement or issue a full refund.
            </p>
            <p className="mt-3 leading-7 text-slate-600">Simply report the issue within 48 hours of delivery.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950">International Shipping</h2>
            <p className="mt-3 leading-7 text-slate-600">
              We currently ship to all 50 U.S. states. International shipping is not available at this time. We&apos;re
              exploring options to expand our shipping capabilities and appreciate your patience.
            </p>
            <p className="mt-3 leading-7 text-slate-600">
              Contact us if you&apos;d like to inquire about future international shipping options.
            </p>
          </div>
        </article>
      </div>

      <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-950">Frequently Asked Questions</h2>
        <div className="mt-5 divide-y divide-slate-200">
          {faqs.map((faq) => (
            <details className="group py-4" key={faq.question}>
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left font-semibold text-slate-900">
                {faq.question}
                <span className="text-xl text-[#c89e28] transition group-open:rotate-90">›</span>
              </summary>
              <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </article>

      <article className="rounded-lg bg-[#102a63] p-7 text-center text-white shadow-sm md:p-9">
        <h2 className="text-3xl font-bold">Still Have Questions?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/80">
          Our support team is here to help with any shipping or return questions.
        </p>
        <Link
          className="mt-6 inline-flex rounded-full bg-[#c89e28] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#d9b348]"
          href="/contact-us"
        >
          Contact Us
        </Link>
      </article>
    </section>
  );
}
