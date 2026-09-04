export type HolderId = 'penny' | 'nickel' | 'dime' | 'quarter' | 'half-dollar' | 'small-dollar' | 'large-dollar';

export type HolderSize = { id: HolderId; name: string; sizeMm: number; sizeInches: string; commonUse: string };
export type DiameterSourceId = 'us-mint' | 'pcgs-coinfacts';
export type CoinSizeRecord = {
  name: string;
  id?: string;
  diameterMm: number | { min: number; max: number };
  approximateDiameter?: boolean;
  holderId: HolderId | null;
  aliases?: string[];
  note?: string;
  sourceId: DiameterSourceId;
  sourceUrl?: string;
};

export const diameterSources: Record<DiameterSourceId, { name: string; url: string }> = {
  'us-mint': { name: 'United States Mint', url: 'https://www.usmint.gov/learn/coins-and-medals/circulating-coins/coin-specifications' },
  'pcgs-coinfacts': { name: 'PCGS CoinFacts', url: 'https://www.pcgs.com/coinfacts/' }
};

export const holderSizes: HolderSize[] = [
  { id: 'penny', name: 'Penny', sizeMm: 19.05, sizeInches: '0.750 in', commonUse: 'Cents and similarly sized small coins' },
  { id: 'nickel', name: 'Nickel', sizeMm: 21.21, sizeInches: '0.835 in', commonUse: 'Nickels and near-nickel diameter pieces' },
  { id: 'dime', name: 'Dime', sizeMm: 17.91, sizeInches: '0.705 in', commonUse: 'Dimes and three-cent nickel pieces' },
  { id: 'quarter', name: 'Quarter', sizeMm: 24.26, sizeInches: '0.955 in', commonUse: 'Quarters and select small gold pieces' },
  { id: 'half-dollar', name: 'Half Dollar', sizeMm: 30.61, sizeInches: '1.205 in', commonUse: 'US half dollars across major types' },
  { id: 'small-dollar', name: 'Small Dollar', sizeMm: 26.49, sizeInches: '1.043 in', commonUse: 'Modern small-size US dollars' },
  { id: 'large-dollar', name: 'Large Dollar', sizeMm: 38.1, sizeInches: '1.500 in', commonUse: 'Classic silver dollars and Eisenhower dollars' }
];

const mint = 'https://www.usmint.gov/learn/coins-and-medals/circulating-coins/coin-specifications';
const cappedDime = 'https://www.pcgs.com/coinfacts/category/capped-bust-dime-1809-1837/94';

export const coinSizes: CoinSizeRecord[] = [
  { name: 'U.S. Small Cent (1856–present)', id: 'us-cent-penny-1858-present', diameterMm: { min: 19, max: 19.05 }, holderId: 'penny', aliases: ['cent', 'one cent', 'penny'], sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/small-cents/3' },
  { name: 'Flying Eagle Cent (1856–1858)', diameterMm: 19, holderId: 'penny', aliases: ['flying eagle penny'], sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/flying-eagle-cent-1856-1858/43' },
  { name: 'Indian Head Cent (1859–1909)', diameterMm: 19, holderId: 'penny', aliases: ['indian head penny'], sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/indian-cent-1859-1909/44' },
  { name: 'Lincoln Wheat Cent (1909–1958)', id: 'lincoln-wheat-penny-1909-1958', diameterMm: 19.05, holderId: 'penny', aliases: ['wheat cent', 'wheat penny'], sourceId: 'us-mint', sourceUrl: mint },
  { name: 'Draped Bust Dime (1796–1807)', diameterMm: 19.8, holderId: null, aliases: ['draped bust ten cents'], note: 'Its 19.80 mm diameter exceeds the nominal Penny holder size; no safe fit is claimed without a verified physical opening measurement.', sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/draped-bust-dime-1796-1807/93' },
  { name: 'Capped Bust Dime, Type 1, Large Dentils (1809–1828)', id: 'capped-bust-dime-large-size-1809-1827', diameterMm: 18.8, approximateDiameter: true, holderId: 'penny', aliases: ['large size capped bust dime', 'large dentils capped bust dime'], note: 'Open-collar planchets can vary slightly; confirm the individual coin before ordering.', sourceId: 'pcgs-coinfacts', sourceUrl: cappedDime },
  { name: 'U.S. Five-Cent Nickel (1883–present)', id: 'us-nickel', diameterMm: { min: 21.2, max: 21.21 }, holderId: 'nickel', aliases: ['five cent', '5 cent', 'nickel'], sourceId: 'us-mint', sourceUrl: mint },
  { name: 'Liberty Head Nickel (1883–1913)', diameterMm: 21.2, holderId: 'nickel', aliases: ['v nickel'], sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/liberty-nickel-1883-1913/81' },
  { name: 'Buffalo / Indian Head Nickel (1913–1938)', diameterMm: 21.2, holderId: 'nickel', aliases: ['buffalo nickel', 'indian head nickel'], sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/buffalo-nickel-1913-1938/83' },
  { name: 'Jefferson Nickel (1938–present)', diameterMm: 21.21, holderId: 'nickel', sourceId: 'us-mint', sourceUrl: mint },
  { name: 'U.S. Dime (1837–present)', id: 'us-dime', diameterMm: { min: 17.9, max: 17.91 }, holderId: 'dime', aliases: ['ten cent', '10 cent'], sourceId: 'us-mint', sourceUrl: mint },
  { name: 'Capped Bust Dime, Type 2, Small Dentils (1828–1837)', id: 'capped-bust-dime-small-size-1828-1837', diameterMm: 17.9, approximateDiameter: true, holderId: 'dime', aliases: ['small size capped bust dime', 'small dentils capped bust dime'], note: 'The closed-collar small-planchet type began in 1828; both Capped Bust dime types exist with an 1828 date.', sourceId: 'pcgs-coinfacts', sourceUrl: cappedDime },
  { name: 'Three Cent Nickel (1865–1889)', id: 'copper-nickel-three-cent-1865-1889', diameterMm: 17.9, holderId: 'dime', aliases: ['copper-nickel three cent', 'three cent nickel'], sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/three-cent-nickel-1865-1889/78' },
  { name: 'Seated Liberty Dime (1837–1891)', diameterMm: 17.9, holderId: 'dime', sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/liberty-seated-dime-1837-1891/95' },
  { name: 'Barber Dime (1892–1916)', diameterMm: 17.9, holderId: 'dime', sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/barber-dime-1892-1916/96' },
  { name: 'Mercury Dime (1916–1945)', diameterMm: 17.9, holderId: 'dime', aliases: ['winged liberty dime'], sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/mercury-dime-1916-1945/97' },
  { name: 'Roosevelt Dime (1946–2025)', diameterMm: 17.91, holderId: 'dime', sourceId: 'us-mint', sourceUrl: mint },
  { name: '$2.50 Capped Head Quarter Eagle, Large Diameter (1821–1827)', diameterMm: 18.5, holderId: null, aliases: ['quarter eagle'], note: 'No holder is recommended because this coin exceeds the nominal Dime size and Coin Shield opening tolerances are not documented.', sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/gold-coins/capped-bust-2-5/type-2-small-cap-large-diameter-1821-1827/755' },
  { name: '$2.50 Capped Head Quarter Eagle, Small Diameter (1829–1834)', diameterMm: 18.2, holderId: null, aliases: ['quarter eagle'], note: 'No holder is recommended because this coin exceeds the nominal Dime size and Coin Shield opening tolerances are not documented.', sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/gold-coins/capped-bust-2-5/type-3-small-diameter/756' },
  { name: '$2.50 Classic Head Quarter Eagle (1834–1839)', diameterMm: 18.2, holderId: null, aliases: ['quarter eagle'], note: 'No holder is recommended because this coin exceeds the nominal Dime size and Coin Shield opening tolerances are not documented.', sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/gold-coins/classic-head-2-5/53' },
  { name: '$2.50 Liberty Head Quarter Eagle (1840–1907)', diameterMm: 18, holderId: null, aliases: ['quarter eagle', 'coronet head quarter eagle'], note: 'No holder is recommended because this coin exceeds the nominal Dime size and Coin Shield opening tolerances are not documented.', sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/gold-coins/liberty-head-2-5/54' },
  { name: '$2.50 Indian Head Quarter Eagle (1908–1929)', diameterMm: 18, holderId: null, aliases: ['quarter eagle'], note: 'No holder is recommended because this coin exceeds the nominal Dime size and Coin Shield opening tolerances are not documented.', sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/gold-coins/indian-2-5/55' },
  { name: 'U.S. Quarter (1932–present)', diameterMm: { min: 24.26, max: 24.3 }, holderId: 'quarter', aliases: ['quarter dollar', '25 cent'], note: 'References may show 24.26 mm or the rounded value 24.3 mm for the same standard size.', sourceId: 'us-mint', sourceUrl: mint },
  { name: 'Seated Liberty Quarter (1838–1891)', diameterMm: 24.3, holderId: 'quarter', sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/liberty-seated-quarter-1838-1891/109' },
  { name: 'Barber Quarter (1892–1916)', diameterMm: 24.3, holderId: 'quarter', sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/barber-quarter-1892-1916/110' },
  { name: 'Standing Liberty Quarter (1916–1930)', diameterMm: 24.3, holderId: 'quarter', sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/standing-liberty-quarter-1916-1930/111' },
  { name: 'Washington Quarter (1932–1974)', diameterMm: 24.3, holderId: 'quarter', sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/washington-quarter-1932-1998/112' },
  { name: 'Bicentennial Quarter (1975–1976)', diameterMm: 24.3, holderId: 'quarter', aliases: ['1776 1976 quarter'], sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/washington-quarter-1932-1998/112' },
  { name: 'Washington Quarter (1977–1998)', diameterMm: 24.3, holderId: 'quarter', sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/washington-quarter-1932-1998/112' },
  { name: '50 State Quarters (1999–2008)', id: 'statehood-quarter-1999-2009', diameterMm: 24.26, holderId: 'quarter', aliases: ['state quarter', 'statehood quarter'], sourceId: 'us-mint', sourceUrl: mint },
  { name: 'D.C. and U.S. Territories Quarters (2009)', diameterMm: 24.26, holderId: 'quarter', aliases: ['territories quarter', 'dc quarter'], sourceId: 'us-mint', sourceUrl: mint },
  { name: 'America the Beautiful Quarters (2010–2021)', id: 'national-parks-quarter-2010-2021', diameterMm: 24.26, holderId: 'quarter', aliases: ['national parks quarter', 'atb quarter'], sourceId: 'us-mint', sourceUrl: mint },
  { name: '$5 Capped Head Half Eagle, Large Diameter (1829)', diameterMm: 25, holderId: null, aliases: ['half eagle'], note: 'No holder is recommended: it exceeds the nominal Quarter size, and the Small Dollar size would be an unverified substitute.', sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/coin/1829-5-large-size/8139' },
  { name: '$5 Capped Head Half Eagle, Small Diameter (1829–1834)', diameterMm: 23.8, holderId: 'quarter', aliases: ['half eagle'], sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/gold-coins/capped-bust-5/type-2-small-diameter/760' },
  { name: 'Kennedy Half Dollar (1964–present)', diameterMm: 30.61, holderId: 'half-dollar', sourceId: 'us-mint', sourceUrl: mint },
  { name: 'Seated Liberty Half Dollar (1839–1891)', diameterMm: 30.6, holderId: 'half-dollar', sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/liberty-seated-half-dollar-1839-1891/119' },
  { name: 'Barber Half Dollar (1892–1915)', diameterMm: 30.6, holderId: 'half-dollar', sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/barber-half-dollar-1892-1915/120' },
  { name: 'Walking Liberty Half Dollar (1916–1947)', diameterMm: 30.6, holderId: 'half-dollar', aliases: ['walker half'], sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/walking-liberty-half-dollar-1916-1947/121' },
  { name: 'Franklin Half Dollar (1948–1963)', diameterMm: 30.6, holderId: 'half-dollar', sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/franklin-half-dollar-1948-1963/122' },
  { name: 'Modern U.S. Small Dollar (1979–1981, 1999–present)', id: 'modern-us-one-dollar-1979-1981-1999-present', diameterMm: { min: 26.49, max: 26.5 }, holderId: 'small-dollar', aliases: ['modern dollar'], sourceId: 'us-mint', sourceUrl: mint },
  { name: '2026 President Donald J. Trump $1 Coin', id: '2026-trump-dollar', diameterMm: 26.49, holderId: 'small-dollar', aliases: ['2026 trump dollar', 'trump dollar', 'trump $1 coin'], sourceId: 'us-mint', sourceUrl: 'https://www.usmint.gov/campaigns/donald-trump-coin' },
  { name: 'Susan B. Anthony Dollar (1979–1981, 1999)', diameterMm: 26.5, holderId: 'small-dollar', aliases: ['sba dollar'], sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/susan-b-anthony-dollar-1979-1999/747' },
  { name: 'Sacagawea Dollar (2000–2008)', diameterMm: 26.49, holderId: 'small-dollar', aliases: ['golden dollar'], sourceId: 'us-mint', sourceUrl: mint },
  { name: 'Native American Dollar (2009–present)', diameterMm: 26.49, holderId: 'small-dollar', sourceId: 'us-mint', sourceUrl: mint },
  { name: 'Presidential Dollar (2007–2016, 2020)', diameterMm: 26.49, holderId: 'small-dollar', sourceId: 'us-mint', sourceUrl: 'https://www.usmint.gov/learn/coin-and-medal-programs/presidential-dollar-coin' },
  { name: 'American Innovation Dollar (2018–2032)', diameterMm: 26.49, holderId: 'small-dollar', aliases: ['innovation dollar'], sourceId: 'us-mint', sourceUrl: mint },
  { name: 'First Spouse $10 Gold Coin (2007–2016, 2020)', id: 'first-spouse-gold-coin', diameterMm: 26.49, holderId: 'small-dollar', aliases: ['first spouse coin'], sourceId: 'us-mint', sourceUrl: 'https://www.usmint.gov/learn/coin-and-medal-programs/first-spouse-gold-coins' },
  { name: 'Chain Cent (1793)', id: 'chain-cent', diameterMm: { min: 25, max: 28 }, approximateDiameter: true, holderId: null, aliases: ['large cent chain'], note: 'Open-collar planchets vary and can exceed the Small Dollar holder size; no single Coin Shield size is confidently recommended.', sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/half-cents/flowing-hair-large-cent-1793-1796/type-1-chain-cent-1793/656' },
  { name: 'Wreath Cent (1793)', id: 'wreath-cent', diameterMm: { min: 26, max: 28.5 }, approximateDiameter: true, holderId: null, aliases: ['large cent wreath'], note: 'Open-collar planchets vary and can exceed the Small Dollar holder size; no single Coin Shield size is confidently recommended.', sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/half-cents/flowing-hair-large-cent/type-2-wreath-cent-1793/657' },
  { name: 'Seated Liberty Dollar (1836–1873)', diameterMm: 38.1, holderId: 'large-dollar', sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/liberty-seated-dollar-1836-1873/138' },
  { name: 'Trade Dollar (1873–1885)', diameterMm: 38.1, holderId: 'large-dollar', sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/trade-dollar-1873-1885/139' },
  { name: 'Morgan Dollar (1878–1904, 1921)', id: 'morgan-silver-dollar-1878-1904-1921', diameterMm: 38.1, holderId: 'large-dollar', aliases: ['morgan silver dollar', 'morgan'], sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/morgan-dollar-1878-1921/744' },
  { name: 'Peace Dollar (1921–1928, 1934–1935)', diameterMm: 38.1, holderId: 'large-dollar', sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/peace-dollar-1921-1935/26' },
  { name: 'Eisenhower Dollar (1971–1978)', diameterMm: 38.1, holderId: 'large-dollar', aliases: ['ike dollar', 'eisenhower ike dollar'], sourceId: 'pcgs-coinfacts', sourceUrl: 'https://www.pcgs.com/coinfacts/category/eisenhower-dollar-1971-1978/31' }
];

export function formatMillimeters(value: number) { return `${value.toFixed(2)} mm`; }
export function formatCoinDiameter(coin: CoinSizeRecord) {
  const prefix = coin.approximateDiameter ? 'Approx. ' : '';
  if (typeof coin.diameterMm === 'number') return `${prefix}${formatMillimeters(coin.diameterMm)}`;
  return `${prefix}${coin.diameterMm.min.toFixed(2)}–${coin.diameterMm.max.toFixed(2)} mm`;
}
export function getHolder(holderId: HolderId) { return holderSizes.find((holder) => holder.id === holderId)!; }
