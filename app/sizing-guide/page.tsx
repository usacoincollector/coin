import Link from 'next/link';

const sizes = [
  { coin: 'Penny', mm: '19.05mm', inches: '0.750in', note: 'Cents and similarly sized small coins' },
  { coin: 'Nickel', mm: '21.21mm', inches: '0.835in', note: 'Nickels and near-nickel diameter pieces' },
  { coin: 'Dime', mm: '17.91mm', inches: '0.705in', note: 'Dimes, trimes, and quarter eagles' },
  { coin: 'Quarter', mm: '24.26mm', inches: '0.955in', note: 'Quarters and some small gold pieces' },
  { coin: 'Half Dollar', mm: '30.61mm', inches: '1.205in', note: 'US half dollars across major types' },
  { coin: 'Small Dollar', mm: '26.49mm', inches: '1.043in', note: 'Modern dollars and select larger cents' },
  { coin: 'Large Dollar', mm: '38.10mm', inches: '1.500in', note: 'Classic silver dollars and Ike dollars' }
];

const details = [
  {
    title: 'Penny',
    copy:
      'US Cent/Penny (1858-present), Flying Eagle Cent (1856-1858), Indian Head Cent (1859-1909), Lincoln Wheat Penny (1909-1958), Draped Bust Dime (1796-1807), Capped Bust Dime (1809-1837), and slightly smaller coins such as US Dimes.'
  },
  {
    title: 'Nickel',
    copy:
      'US Nickel, Liberty Head Nickel (1883-1913), Buffalo/Indian Head Nickel (1913-1938) and Jefferson Nickel (1938-Date) coins.'
  },
  {
    title: 'Dime',
    copy:
      'US Dime, Copper-Nickel Three Cent (1865-1889), Seated Liberty Dime (1837-1891), Barber Dime (1892-1916), Mercury Dime (1916-1945), Roosevelt Dime (1946-Date), $2.50 Capped Head Gold Coin (1821-1827), $2.50 Capped Head Gold Coin (1829-1834), $2.50 Classic Head Gold Coin (1834-1839), $2.50 Liberty/Coronet Head Gold Coin (1840-1907) and a $2.50 Indian Head Gold Coin (1908-1929).'
  },
  {
    title: 'Quarter',
    copy:
      'US Quarter, Seated Liberty Quarter (1838-1891), Barber Quarter (1892-1916), Standing Liberty Quarter (1916-1930), Washington Quarter (1932-1974), Bicentennial Quarter (1975-1976), Washington Quarter (1977-1998), Statehood Quarter (1999-2009), National Parks (America the Beautiful) Quarter (2010-2021) and a $5 Capped Head Gold Coin (1829-1834).'
  },
  {
    title: 'Half Dollar',
    copy:
      'Kennedy Half Dollar (1964-Present), Seated Liberty Half Dollar (1839-1891), Barber Half Dollar (1892-1915), Walking Liberty Half Dollar (1916-1947) and Franklin Half Dollar (1948-1963) coins.'
  },
  {
    title: 'Small Dollar',
    copy:
      'modern US One Dollar (1979-1981, 1999-Present), Susan B. Anthony Dollar (1979-1981, 1999), Sacagawea Dollar (2000-Date), Native American Dollar (2009-Date), Presidential Dollar (2007-2017), Innovation Dollar (2018-2032), First Spouse Gold, Large Cent Chain and Large Cent Wreath coins.'
  },
  {
    title: 'Large Dollar',
    copy:
      'most types of US Dollar Coins, Seated Liberty Dollar (1836-1873), Trade Dollar (1873-1885), Morgan Dollar (1878-1904, 1921), Peace Dollar (1921-1928, 1934-1935) and Eisenhower (Ike) Dollar (1971-1978).'
  }
];

export default function SizingGuidePage() {
  return (
    <section className="space-y-8">
      <Link className="text-sm text-gray-600 hover:text-gray-900" href="/">
        ← Back to homepage
      </Link>

      <header className="relative overflow-hidden rounded-2xl border border-blue-950/20 bg-gradient-to-br from-[#0f1f57] via-[#114690] to-[#1c7cc6] p-7 text-white md:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_26%),radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.18),transparent_28%)]" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <p className="inline-block rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm tracking-[0.2em]">
            COIN REFERENCE
          </p>
          <h1 className="text-4xl leading-tight md:text-5xl [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
            Coin Sizing Guide
          </h1>
          <p className="max-w-2xl text-base text-blue-50 md:text-lg">
            Quick reference sizes for common US coin types, plus detailed size guide for other coins to help you
            choose the right storage supplies.
          </p>
        </div>
      </header>

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
          <h2 className="text-2xl text-[#0f1f57] [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
            Quick Size Chart
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm">
            <thead className="bg-[#f8fafc] text-left text-slate-700">
              <tr>
                <th className="px-5 py-4 font-semibold">Coin Type</th>
                <th className="px-5 py-4 font-semibold">Millimeters</th>
                <th className="px-5 py-4 font-semibold">Inches</th>
                <th className="px-5 py-4 font-semibold">Common Use</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((item, index) => (
                <tr className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'} key={item.coin}>
                  <td className="px-5 py-4 font-semibold text-slate-900">{item.coin}</td>
                  <td className="px-5 py-4 text-slate-700">{item.mm}</td>
                  <td className="px-5 py-4 text-slate-700">{item.inches}</td>
                  <td className="px-5 py-4 text-slate-600">{item.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-slate-500">DETAILED FIT NOTES</p>
          <h2 className="mt-2 text-4xl text-[#0f1f57] [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
            Coin-by-Coin Examples
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {details.map((detail) => (
            <article className="rounded-xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-5" key={detail.title}>
              <h3 className="text-2xl text-[#102a63] [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
                {detail.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{detail.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
