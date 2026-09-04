export type HolderSize = {
  name: string;
  diameter: number;
  inches: string;
  commonUse: string;
  coins: CoinCompatibility[];
};

export type CoinCompatibility = {
  id: string;
  name: string;
  dates: string;
  diameter: string;
};

// This is the single source of truth for both the interactive finder and the
// crawlable compatibility directory on the sizing guide.
export const holderSizes: HolderSize[] = [
  {
    name: 'Dime', diameter: 17.91, inches: '0.705', commonUse: 'Dimes, trimes, and quarter eagles',
    coins: [
      { id: 'three-cent-nickel', name: 'Three Cent Nickel', dates: '1865–1889', diameter: '17.90 mm' },
      { id: 'seated-liberty-dime', name: 'Seated Liberty Dime', dates: '1837–1891', diameter: '17.90 mm' },
      { id: 'barber-dime', name: 'Barber Dime', dates: '1892–1916', diameter: '17.90 mm' },
      { id: 'mercury-dime', name: 'Mercury Dime', dates: '1916–1945', diameter: '17.90 mm' },
      { id: 'roosevelt-dime', name: 'Roosevelt Dime', dates: '1946–present', diameter: '17.91 mm' },
      { id: 'quarter-eagle-gold', name: '$2.50 Quarter Eagle Gold Coin', dates: '1821–1929', diameter: 'approximately 18 mm' }
    ]
  },
  {
    name: 'Penny', diameter: 19.05, inches: '0.750', commonUse: 'United States cents and similarly sized small coins',
    coins: [
      { id: 'flying-eagle-cent', name: 'Flying Eagle Cent', dates: '1856–1858', diameter: '19.00 mm' },
      { id: 'indian-head-cent', name: 'Indian Head Cent', dates: '1859–1909', diameter: '19.00 mm' },
      { id: 'lincoln-wheat-cent', name: 'Lincoln Wheat Cent', dates: '1909–1958', diameter: '19.05 mm' },
      { id: 'lincoln-cent', name: 'Lincoln Cent', dates: '1959–present', diameter: '19.05 mm' },
      { id: 'draped-bust-dime', name: 'Draped Bust Dime', dates: '1796–1807', diameter: 'approximately 19 mm' },
      { id: 'capped-bust-dime', name: 'Capped Bust Dime', dates: '1809–1837', diameter: 'approximately 18.5 mm' }
    ]
  },
  {
    name: 'Nickel', diameter: 21.21, inches: '0.835', commonUse: 'United States five-cent coins',
    coins: [
      { id: 'shield-nickel', name: 'Shield Nickel', dates: '1866–1883', diameter: '20.50 mm' },
      { id: 'liberty-head-nickel', name: 'Liberty Head Nickel', dates: '1883–1913', diameter: '21.21 mm' },
      { id: 'buffalo-nickel', name: 'Buffalo (Indian Head) Nickel', dates: '1913–1938', diameter: '21.21 mm' },
      { id: 'jefferson-nickel', name: 'Jefferson Nickel', dates: '1938–present', diameter: '21.21 mm' }
    ]
  },
  {
    name: 'Quarter', diameter: 24.26, inches: '0.955', commonUse: 'United States quarters and selected small gold coins',
    coins: [
      { id: 'seated-liberty-quarter', name: 'Seated Liberty Quarter', dates: '1838–1891', diameter: '24.30 mm' },
      { id: 'barber-quarter', name: 'Barber Quarter', dates: '1892–1916', diameter: '24.30 mm' },
      { id: 'standing-liberty-quarter', name: 'Standing Liberty Quarter', dates: '1916–1930', diameter: '24.30 mm' },
      { id: 'washington-quarter', name: 'Washington Quarter', dates: '1932–present', diameter: '24.26 mm' },
      { id: 'america-the-beautiful-quarter', name: 'America the Beautiful Quarter', dates: '2010–2021', diameter: '24.26 mm' }
    ]
  },
  {
    name: 'Small Dollar', diameter: 26.49, inches: '1.043', commonUse: 'Modern United States dollar coins',
    coins: [
      { id: 'susan-b-anthony-dollar', name: 'Susan B. Anthony Dollar', dates: '1979–1981, 1999', diameter: '26.50 mm' },
      { id: 'sacagawea-dollar', name: 'Sacagawea Dollar', dates: '2000–2008', diameter: '26.49 mm' },
      { id: 'native-american-dollar', name: 'Native American Dollar', dates: '2009–present', diameter: '26.49 mm' },
      { id: 'presidential-dollar', name: 'Presidential Dollar', dates: '2007–2016, 2020', diameter: '26.49 mm' },
      { id: 'american-innovation-dollar', name: 'American Innovation Dollar', dates: '2018–2032', diameter: '26.49 mm' },
      { id: '2026-trump-dollar', name: '2026 President Donald J. Trump $1 Coin', dates: '2026', diameter: '26.49 mm' }
    ]
  },
  {
    name: 'Half Dollar', diameter: 30.61, inches: '1.205', commonUse: 'United States half dollars',
    coins: [
      { id: 'seated-liberty-half-dollar', name: 'Seated Liberty Half Dollar', dates: '1839–1891', diameter: '30.60 mm' },
      { id: 'barber-half-dollar', name: 'Barber Half Dollar', dates: '1892–1915', diameter: '30.60 mm' },
      { id: 'walking-liberty-half-dollar', name: 'Walking Liberty Half Dollar', dates: '1916–1947', diameter: '30.60 mm' },
      { id: 'franklin-half-dollar', name: 'Franklin Half Dollar', dates: '1948–1963', diameter: '30.60 mm' },
      { id: 'kennedy-half-dollar', name: 'Kennedy Half Dollar', dates: '1964–present', diameter: '30.61 mm' }
    ]
  },
  {
    name: 'Large Dollar', diameter: 38.10, inches: '1.500', commonUse: 'Classic silver dollars and Eisenhower dollars',
    coins: [
      { id: 'seated-liberty-dollar', name: 'Seated Liberty Dollar', dates: '1836–1873', diameter: '38.10 mm' },
      { id: 'trade-dollar', name: 'Trade Dollar', dates: '1873–1885', diameter: '38.10 mm' },
      { id: 'morgan-dollar', name: 'Morgan Dollar', dates: '1878–1904, 1921', diameter: '38.10 mm' },
      { id: 'peace-dollar', name: 'Peace Dollar', dates: '1921–1928, 1934–1935', diameter: '38.10 mm' },
      { id: 'eisenhower-dollar', name: 'Eisenhower (Ike) Dollar', dates: '1971–1978', diameter: '38.10 mm' }
    ]
  }
];
