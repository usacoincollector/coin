import Link from 'next/link';

const quickSizes = [
  { coinType: 'Penny', millimeters: '19.05mm', inches: '0.750in', commonUse: 'Cents and similarly sized small coins' },
  { coinType: 'Nickel', millimeters: '21.21mm', inches: '0.835in', commonUse: 'Nickels and near-nickel diameter pieces' },
  { coinType: 'Dime', millimeters: '17.91mm', inches: '0.705in', commonUse: 'Dimes, trimes, and quarter eagles' },
  { coinType: 'Quarter', millimeters: '24.26mm', inches: '0.955in', commonUse: 'Quarters and some small gold pieces' },
  { coinType: 'Half Dollar', millimeters: '30.61mm', inches: '1.205in', commonUse: 'US half dollars across major types' },
  { coinType: 'Small Dollar', millimeters: '26.49mm', inches: '1.043in', commonUse: 'Modern dollars and select larger cents' },
  { coinType: 'Large Dollar', millimeters: '38.10mm', inches: '1.500in', commonUse: 'Classic silver dollars and Ike dollars' }
];

const detailedExamples = [
  {
    title: 'Penny',
    copy: 'US Cent/Penny (1858-present), Flying Eagle Cent (1856-1858), Indian Head Cent (1859-1909), Lincoln Wheat Penny (1909-1958), Draped Bust Dime (1796-1807), Capped Bust Dime (1809-1837), and slightly smaller coins such as US Dimes.'
  },
  {
    title: 'Nickel',
    copy: 'US Nickel, Liberty Head Nickel (1883-1913), Buffalo/Indian Head Nickel (1913-1938) and Jefferson Nickel (1938-date) coins.'
  },
  {
    title: 'Dime',
    copy: 'US Dime, Copper-Nickel Three Cent (1865-1889), Seated Liberty Dime (1837-1891), Barber Dime (1892-1916), Mercury Dime (1916-1945), Roosevelt Dime (1946-date), $2.50 Capped Head Gold Coin (1821-1827), $2.50 Capped Head Gold Coin (1829-1834), $2.50 Classic Head Gold Coin (1834-1839), $2.50 Liberty/Coronet Head Gold Coin (1840-1907) and a $2.50 Indian Head Gold Coin (1908-1929).'
  },
  {
    title: 'Quarter',
    copy: 'US Quarter, Seated Liberty Quarter (1838-1891), Barber Quarter (1892-1916), Standing Liberty Quarter (1916-1930), Washington Quarter (1932-1974), Bicentennial Quarter (1975-1976), Washington Quarter (1977-1998), Statehood Quarter (1999-2009), National Parks (America the Beautiful) Quarter (2010-2021) and a $5 Capped Head Gold Coin (1829-1834).'
  },
  {
    title: 'Half Dollar',
    copy: 'Kennedy Half Dollar (1964-present), Seated Liberty Half Dollar (1839-1891), Barber Half Dollar (1892-1915), Walking Liberty Half Dollar (1916-1947) and Franklin Half Dollar (1948-1963) coins.'
  },
  {
    title: 'Small Dollar',
    copy: 'Modern US One Dollar (1979-1981, 1999-present), Susan B. Anthony Dollar (1979-1981, 1999), Sacagawea Dollar (2000-date), Native American Dollar (2009-date), Presidential Dollar (2007-2017), Innovation Dollar (2018-2032), First Spouse Gold, Large Cent Chain and Large Cent Wreath coins.'
  },
  {
    title: 'Large Dollar',
    copy: 'Most types of US Dollar Coins, Seated Liberty Dollar (1836-1873), Trade Dollar (1873-1885), Morgan Dollar (1878-1904, 1921), Peace Dollar (1921-1928, 1934-1935) and Eisenhower (Ike) Dollar (1971-1978).'
  }
];

export default function SizingGuidePage() {
  return (
    <section className="space-y-6 [font-family:'Trebuchet_MS','Lucida_Sans_Unicode','Lucida_Grande','Verdana',sans-serif]">
      <Link className="text-sm text-slate-700 hover:text-slate-900" href="/">
        {'<- Back to homepage'}
      </Link>

      <div className="rounded-2xl border border-blue-900/20 bg-gradient-to-br from-[#12377a] via-[#17539d] to-[#2e92d6] p-8 text-white">
        <p className="inline-block rounded-full border border-white/45 bg-white/10 px-4 py-1 text-xs tracking-[0.22em]">
          COIN REFERENCE
        </p>
        <h1 className="mt-3 text-5xl leading-tight [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
          Coin Sizing Guide
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-blue-50">
          Quick reference sizes for common US coin types, plus detailed size guide for other coins to help you choose
          the right storage supplies.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <h2 className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-4xl text-[#102a63] [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
          Quick Size Chart
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Coin Type</th>
                <th className="px-4 py-3 font-semibold">Millimeters</th>
                <th className="px-4 py-3 font-semibold">Inches</th>
                <th className="px-4 py-3 font-semibold">Common Use</th>
              </tr>
            </thead>
            <tbody>
              {quickSizes.map((row) => (
                <tr className="border-t border-slate-100" key={row.coinType}>
                  <td className="px-4 py-3 font-medium text-slate-900">{row.coinType}</td>
                  <td className="px-4 py-3 text-slate-700">{row.millimeters}</td>
                  <td className="px-4 py-3 text-slate-700">{row.inches}</td>
                  <td className="px-4 py-3 text-slate-700">{row.commonUse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold tracking-[0.28em] text-slate-500">DETAILED FIT NOTES</p>
        <h2 className="mt-2 text-5xl text-[#102a63] [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
          Coin-by-Coin Examples
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {detailedExamples.map((example) => (
          <article className="rounded-xl border border-slate-200 bg-white p-5" key={example.title}>
            <h3 className="text-4xl text-[#102a63] [font-family:'Impact','Haettenschweiler','Arial_Narrow_Bold',sans-serif]">
              {example.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">{example.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
