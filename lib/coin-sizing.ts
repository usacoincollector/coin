export type HolderId = 'penny' | 'nickel' | 'dime' | 'quarter' | 'half-dollar' | 'small-dollar' | 'large-dollar';

export type HolderSize = {
  id: HolderId;
  name: string;
  openingMm: string;
  openingInches: string;
  commonUse: string;
};

export type CoinSizeRecord = {
  name: string;
  id?: string;
  diameterMm?: string;
  holderId: HolderId;
  aliases?: string[];
  note?: string;
};

export const holderSizes: HolderSize[] = [
  { id: 'penny', name: 'Penny', openingMm: '19.05 mm', openingInches: '0.750 in', commonUse: 'Cents and similarly sized small coins' },
  { id: 'nickel', name: 'Nickel', openingMm: '21.21 mm', openingInches: '0.835 in', commonUse: 'Nickels and near-nickel diameter pieces' },
  { id: 'dime', name: 'Dime', openingMm: '17.91 mm', openingInches: '0.705 in', commonUse: 'Dimes, trimes, and quarter eagles' },
  { id: 'quarter', name: 'Quarter', openingMm: '24.26 mm', openingInches: '0.955 in', commonUse: 'Quarters and some small gold pieces' },
  { id: 'half-dollar', name: 'Half Dollar', openingMm: '30.61 mm', openingInches: '1.205 in', commonUse: 'US half dollars across major types' },
  { id: 'small-dollar', name: 'Small Dollar', openingMm: '26.49 mm', openingInches: '1.043 in', commonUse: 'Modern dollars and select larger cents' },
  { id: 'large-dollar', name: 'Large Dollar', openingMm: '38.10 mm', openingInches: '1.500 in', commonUse: 'Classic silver dollars and Ike dollars' }
];

export const coinSizes: CoinSizeRecord[] = [
  { name: 'US Cent / Penny (1858–present)', holderId: 'penny', aliases: ['cent', 'one cent'] },
  { name: 'Flying Eagle Cent (1856–1858)', holderId: 'penny', aliases: ['flying eagle penny'] },
  { name: 'Indian Head Cent (1859–1909)', holderId: 'penny', aliases: ['indian head penny'] },
  { name: 'Lincoln Wheat Penny (1909–1958)', holderId: 'penny', aliases: ['wheat cent', 'wheat penny'] },
  {
    name: 'Capped Bust Dime, Large Size (1809–1827)',
    holderId: 'penny',
    aliases: ['large size capped bust dime'],
    note: 'Approximately 18.8–19.0 mm; confirm the individual coin diameter before selecting a holder.'
  },
  { name: 'US Nickel', holderId: 'nickel', aliases: ['five cent', '5 cent'] },
  { name: 'Liberty Head Nickel (1883–1913)', holderId: 'nickel', aliases: ['v nickel'] },
  { name: 'Buffalo / Indian Head Nickel (1913–1938)', holderId: 'nickel', aliases: ['buffalo nickel', 'indian head nickel'] },
  { name: 'Jefferson Nickel (1938–date)', holderId: 'nickel' },
  { name: 'US Dime', holderId: 'dime', aliases: ['ten cent', '10 cent'] },
  {
    name: 'Capped Bust Dime, Small Size (1828–1837)',
    holderId: 'dime',
    aliases: ['small size capped bust dime'],
    note: 'Approximately 17.9–18.5 mm; confirm the individual coin diameter because diameter varies within this era.'
  },
  { name: 'Copper-Nickel Three Cent (1865–1889)', holderId: 'dime', aliases: ['three cent nickel', 'trime'] },
  { name: 'Seated Liberty Dime (1837–1891)', holderId: 'dime' },
  { name: 'Barber Dime (1892–1916)', holderId: 'dime' },
  { name: 'Mercury Dime (1916–1945)', holderId: 'dime', aliases: ['winged liberty dime'] },
  { name: 'Roosevelt Dime (1946–date)', holderId: 'dime' },
  { name: '$2.50 Capped Head Gold Coin (1821–1827)', holderId: 'dime', aliases: ['quarter eagle'] },
  { name: '$2.50 Capped Head Gold Coin (1829–1834)', holderId: 'dime', aliases: ['quarter eagle'] },
  { name: '$2.50 Classic Head Gold Coin (1834–1839)', holderId: 'dime', aliases: ['quarter eagle'] },
  { name: '$2.50 Liberty / Coronet Head Gold Coin (1840–1907)', holderId: 'dime', aliases: ['quarter eagle'] },
  { name: '$2.50 Indian Head Gold Coin (1908–1929)', holderId: 'dime', aliases: ['quarter eagle'] },
  { name: 'US Quarter', holderId: 'quarter', aliases: ['quarter dollar', '25 cent'] },
  { name: 'Seated Liberty Quarter (1838–1891)', holderId: 'quarter' },
  { name: 'Barber Quarter (1892–1916)', holderId: 'quarter' },
  { name: 'Standing Liberty Quarter (1916–1930)', holderId: 'quarter' },
  { name: 'Washington Quarter (1932–1974)', holderId: 'quarter' },
  { name: 'Bicentennial Quarter (1975–1976)', holderId: 'quarter' },
  { name: 'Washington Quarter (1977–1998)', holderId: 'quarter' },
  { name: 'Statehood Quarter (1999–2009)', holderId: 'quarter', aliases: ['state quarter'] },
  { name: 'National Parks Quarter (2010–2021)', holderId: 'quarter', aliases: ['america the beautiful quarter', 'atb quarter'] },
  { name: '$5 Capped Head Gold Coin (1829–1834)', holderId: 'quarter', aliases: ['half eagle'] },
  { name: 'Kennedy Half Dollar (1964–present)', holderId: 'half-dollar' },
  { name: 'Seated Liberty Half Dollar (1839–1891)', holderId: 'half-dollar' },
  { name: 'Barber Half Dollar (1892–1915)', holderId: 'half-dollar' },
  { name: 'Walking Liberty Half Dollar (1916–1947)', holderId: 'half-dollar', aliases: ['walker half'] },
  { name: 'Franklin Half Dollar (1948–1963)', holderId: 'half-dollar' },
  { name: 'Modern US One Dollar (1979–1981, 1999–present)', holderId: 'small-dollar', aliases: ['modern dollar'] },
  { name: '2026 President Donald J. Trump $1 Coin', id: '2026-trump-dollar', diameterMm: '26.49 mm', holderId: 'small-dollar', aliases: ['2026 trump dollar', 'trump dollar', 'trump $1 coin'] },
  { name: 'Susan B. Anthony Dollar (1979–1981, 1999)', holderId: 'small-dollar', aliases: ['sba dollar'] },
  { name: 'Sacagawea Dollar (2000–date)', holderId: 'small-dollar', aliases: ['golden dollar'] },
  { name: 'Native American Dollar (2009–date)', holderId: 'small-dollar' },
  { name: 'Presidential Dollar (2007–2017)', holderId: 'small-dollar' },
  { name: 'American Innovation Dollar (2018–2032)', holderId: 'small-dollar', aliases: ['innovation dollar'] },
  { name: 'First Spouse Gold Coin', holderId: 'small-dollar', aliases: ['first spouse coin'] },
  { name: 'Chain Cent', holderId: 'small-dollar', aliases: ['large cent chain'] },
  { name: 'Wreath Cent', holderId: 'small-dollar', aliases: ['large cent wreath'] },
  { name: 'Seated Liberty Dollar (1836–1873)', holderId: 'large-dollar' },
  { name: 'Trade Dollar (1873–1885)', holderId: 'large-dollar' },
  { name: 'Morgan Silver Dollar (1878–1904, 1921)', holderId: 'large-dollar', aliases: ['morgan dollar', 'morgan'] },
  { name: 'Peace Dollar (1921–1928, 1934–1935)', holderId: 'large-dollar' },
  { name: 'Eisenhower Dollar (1971–1978)', holderId: 'large-dollar', aliases: ['ike dollar', 'eisenhower ike dollar'] }
];

export function getHolder(holderId: HolderId) {
  return holderSizes.find((holder) => holder.id === holderId)!;
}
