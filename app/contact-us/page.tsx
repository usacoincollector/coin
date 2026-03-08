import Link from 'next/link';

export default function ContactUsPage() {
  return (
    <section className="space-y-6 [font-family:'Trebuchet_MS','Lucida_Sans_Unicode','Lucida_Grande','Verdana',sans-serif]">
      <div className="flex items-center justify-between gap-3">
        <Link className="text-sm text-slate-700 hover:text-slate-900" href="/">
          {'<- Back to homepage'}
        </Link>
        <Link className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50" href="/about-us">
          About Us
        </Link>
      </div>

      <article className="rounded-2xl border border-blue-900/20 bg-gradient-to-br from-[#12377a] via-[#17539d] to-[#2e92d6] p-8 text-white">
        <p className="inline-block rounded-full border border-white/45 bg-white/10 px-4 py-1 text-xs tracking-[0.22em]">
          CONTACT USA COIN COLLECTOR
        </p>
        <h1 className="mt-3 text-5xl leading-tight [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
          Contact Us
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-blue-50">
          Send us a message about products, sizing, or your order and we will get back to you as soon as possible.
        </p>
      </article>

      <form
        action="mailto:usacoincollector.ebay@gmail.com"
        className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6"
        encType="text/plain"
        method="post"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1">
            <label htmlFor="name">Name</label>
            <input id="name" name="Name" required type="text" />
          </div>
          <div className="space-y-1">
            <label htmlFor="email">Email</label>
            <input id="email" name="Email" required type="email" />
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="subject">Subject</label>
          <input id="subject" name="Subject" required type="text" />
        </div>

        <div className="space-y-1">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="Message" required rows={7} />
        </div>

        <button className="bg-[#102a63] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1a3d86]" type="submit">
          Send Message
        </button>

        <p className="text-sm text-slate-600">
          This opens your email app and sends the message to{' '}
          <a className="font-semibold text-[#102a63] hover:underline" href="mailto:usacoincollector.ebay@gmail.com">
            usacoincollector.ebay@gmail.com
          </a>
          .
        </p>
      </form>
    </section>
  );
}
