import Image from 'next/image';
import Link from 'next/link';

const sections = [
  {
    id: 'beginner',
    tab: 'Getting Started',
    title: 'New to Coin Collecting?',
    icon: '/book.png',
    items: [
      {
        question: 'What is coin collecting?',
        answer:
          'Coin collecting, or numismatics, is the hobby of acquiring and studying coins. Collectors may focus on specific countries, time periods, coin types, or denominations. Coin collecting can be purely recreational or a serious investment pursuit.'
      },
      {
        question: 'How do I start a coin collection?',
        answer:
          "Start by deciding what interests you: U.S. coins, foreign coins, specific eras, or particular denominations. Begin by acquiring coins that appeal to you, then invest in proper storage and protection materials. Our beginner's collection kits make it easy to get started."
      },
      {
        question: "What's the difference between numismatics and collecting?",
        answer:
          "Numismatics is the scientific study of coins and currency, while coin collecting refers to the hobby itself. Many collectors also study numismatics to better understand their coins' historical significance and value."
      },
      {
        question: 'How much does it cost to start collecting?',
        answer:
          'Coin collecting can be enjoyed at any budget level. You can start with extras coins you have laying around. Our products range from affordable sample packs to bulk supply orders.'
      },
      {
        question: 'Where can I find coins to collect?',
        answer:
          'Coins can be found through coin dealers, online auctions, estate sales, antique shops, banks, and other collectors. You can also find interesting coins in circulation. Many collectors start by examining change they receive and setting aside interesting pieces.'
      }
    ]
  },
  {
    id: 'protect',
    tab: 'Protecting Coins',
    title: 'Protecting Your Coins',
    icon: '/sheild.png',
    items: [
      {
        question: 'How to protect your coins?',
        answer:
          'Always handle coins by their edges using clean, cotton-lined gloves. Store them in acid-free holders, albums, or boxes to prevent corrosion. Maintain proper humidity (30-50%) and temperature (65-75 degrees F). Avoid cleaning coins as it can damage their value.'
      },
      {
        question: "Why shouldn't I clean my coins?",
        answer:
          'Cleaning removes the patina that protects coins and can significantly reduce their value. Professional graders actively penalize cleaned coins. The only exception is removing stable corrosion using professional-grade, non-abrasive methods.'
      },
      {
        question: 'What are archival-quality materials?',
        answer:
          'Archival materials are acid-free, lignin-free, and free from harmful chemicals that can degrade coins. They meet ISO standards for long-term preservation. All our storage products are archival-quality to ensure your coins remain protected for generations.'
      },
      {
        question: 'How often should I check my collection?',
        answer:
          'Check your collection periodically (monthly or quarterly) to ensure coins are in good condition and that storage materials are maintaining proper humidity. Look for any signs of corrosion or environmental issues.'
      },
      {
        question: 'Can I use plastic bags or regular cardboard?',
        answer:
          'No. Regular plastic and cardboard contain chemicals that will damage coins. Always use archival-quality, acid-free materials. PVC-containing plastics are especially harmful and should be avoided.'
      }
    ]
  },
  {
    id: 'storage',
    tab: 'Storage',
    title: 'Choosing the Right Storage',
    icon: '/bolt.png',
    items: [
      {
        question: "What's the difference between flips, capsules, and albums?",
        answer:
          'Flips are 2x2 cardboard holders ideal for individual coins or archival storage. Capsules are hard plastic holders perfect for display and short-term storage. Albums are multi-page collections with slots for organizing large collections. Choose based on your needs.'
      },
      {
        question: 'Should I store my coins at home or in a safe deposit box?',
        answer:
          'High-value collections should be stored in bank safe deposit boxes or home safes for security. Casual collections can be stored at home in proper archival materials. Consider insurance regardless of storage location.'
      },
      {
        question: 'What humidity and temperature levels are ideal?',
        answer:
          'Ideal conditions are 30-50% relative humidity and 65-75 degrees F temperature. Fluctuations cause expansion and contraction that damages coins. Use our climate control kits to maintain stable conditions in your collection space.'
      },
      {
        question: 'How much storage space do I need?',
        answer:
          'This depends on your collection size. A single album holds up to 240 coins. Expandable solutions let you grow your storage gradually. Plan for at least some space to display and enjoy your collection.'
      },
      {
        question: 'Should I use display cases?',
        answer:
          'Display cases are perfect for showcasing your prized coins while keeping them protected. Glass-fronted cases provide visibility while keeping dust out. Rotate displayed coins periodically to prevent uneven fading.'
      }
    ]
  },
  {
    id: 'products',
    tab: 'Products',
    title: 'About Our Products',
    icon: '/book.png',
    items: [
      {
        question: 'Are all your products archival-quality?',
        answer:
          'Yes. We only carry products that meet archival standards. All storage materials are acid-free and lignin-free. We verify each product meets ISO preservation standards.'
      },
      {
        question: 'Do you offer bulk discounts?',
        answer:
          'Yes! Many products are available in larger quantities at discounted prices. Contact our team for bulk pricing on large orders.'
      },
      {
        question: "What if a product doesn't fit my needs?",
        answer:
          "We offer a 30-day money-back guarantee on all products. If something doesn't work for your collection, we'll exchange it or issue a full refund."
      },
      {
        question: 'Can you recommend products for my collection?',
        answer:
          "Absolutely! Our expert team can help you find the perfect storage solutions. Contact us with details about your collection and we'll make personalized recommendations."
      },
      {
        question: 'Do you sell grading or authentication supplies?',
        answer:
          'We focus on storage and display products. For grading and authentication services, we recommend contacting professional grading services like PCGS or NGC.'
      }
    ]
  }
];

export default function FaqPage() {
  return (
    <section className="space-y-12 pb-12">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-3 text-xl leading-8 text-slate-600">
          Find answers to common questions about coin collecting and our products.
        </p>
      </div>

      <nav className="flex flex-wrap gap-2 border-b border-slate-200" aria-label="FAQ sections">
        {sections.map((section, index) => (
          <Link
            className={`px-4 py-3 font-semibold transition hover:text-[#c89e28] ${
              index === 0 ? 'border-b-2 border-[#c89e28] text-[#c89e28]' : 'text-slate-500'
            }`}
            href={`#${section.id}`}
            key={section.id}
          >
            {section.tab}
          </Link>
        ))}
      </nav>

      {sections.map((section) => (
        <section className="space-y-6" id={section.id} key={section.id}>
          <div className="flex items-center gap-3">
            <Image alt="" aria-hidden="true" className="h-7 w-7 object-contain" height={28} src={section.icon} width={28} />
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">{section.title}</h2>
          </div>

          <div className="space-y-4">
            {section.items.map((item) => (
              <details className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm" key={item.question}>
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-slate-950">
                  {item.question}
                  <span className="text-2xl leading-none transition-transform group-open:rotate-90">{'>'}</span>
                </summary>
                <p className="mt-4 leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      ))}

      <section className="rounded-lg bg-[#c89e28]/10 p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-950">Can&apos;t Find Your Answer?</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
          Our expert team is here to help with any questions about coin collecting or our products.
        </p>
        <Link
          className="mt-6 inline-block rounded-lg bg-[#c89e28] px-8 py-3 font-semibold text-black transition hover:bg-[#a47d13]"
          href="/contact-us"
        >
          Contact Our Experts
        </Link>
      </section>
    </section>
  );
}
