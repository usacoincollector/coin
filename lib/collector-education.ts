export type EducationSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type EducationArticle = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
  summary: string;
  introduction: string;
  sections: EducationSection[];
};

export const educationArticles: EducationArticle[] = [
  {
    slug: '2026-trump-dollar-july-4-privy-mark',
    title: '2026 Trump $1 Coin: Find the July 4th Privy Mark',
    category: '2026 Coin Guide',
    readTime: '8 min read',
    image: '/education-value.png',
    imageAlt: 'Collectible dollar coin being examined with a magnifying glass',
    summary: 'See where the limited July 4th privy mark appears, how the special coin differs from the standard issue, and the correct holder size.',
    introduction: 'The 2026 Semiquincentennial President Donald J. Trump $1 Coin includes a limited subset struck with a July 4th privy mark. This guide explains where to inspect the coin and how to protect it.',
    sections: [
      {
        heading: 'How to identify the July 4th privy mark',
        paragraphs: ['Inspect the obverse, or heads side, in the open field to the left of the portrait and immediately above the five-pointed star near the lower-left edge. The small mark reads JULY / 4th on two lines.']
      },
      {
        heading: 'Do not confuse the mark with the reverse design',
        paragraphs: ['The large 250 on the reverse shield appears on the normal coin and is not the July 4th privy mark.']
      },
      {
        heading: 'Production and value',
        paragraphs: ['The U.S. Mint reports that 250,000 privy-mark coins were struck and randomly included in rolls and bags. Market values can change, and condition, grading, demand, and completed sales may influence price.']
      },
      {
        heading: 'Protecting the coin',
        paragraphs: ['Hold the coin by its edges, avoid cleaning, avoid PVC-containing storage, and use a correctly sized 26.49 mm Small Dollar holder.']
      }
    ]
  },
  {
    slug: 'how-to-store-coins-without-damaging-them',
    title: 'How to Store Coins Without Damaging Them',
    category: 'Storage guide',
    readTime: '8 min read',
    image: '/education-storage.png',
    imageAlt: 'Archival coin capsules, holders, gloves, and silica gel arranged on a collector desk',
    summary: 'Humidity, PVC, fingerprints, and friction can quietly change a coin. Learn the simple habits that preserve surfaces for decades.',
    introduction: 'Good storage does more than keep a collection tidy. It creates a stable, chemically safe environment that protects each coin from moisture, residue, scratches, and unnecessary handling.',
    sections: [
      { heading: 'Choose inert holders', paragraphs: ['Use holders sold specifically as archival safe. Mylar flips, rigid acrylic capsules, and reputable third-party grading holders are dependable choices. Avoid soft, flexible flips that contain PVC; over time, plasticizer can migrate onto a coin and leave a sticky green film.'], bullets: ['Match the holder closely to the coin’s diameter.', 'Replace cracked, warped, or contaminated holders.', 'Write on inserts before placing them beside a coin.'] },
      { heading: 'Control the environment', paragraphs: ['Store the collection in a cool, dry place with steady temperature. Basements, attics, garages, and exterior walls often experience damaging swings in heat and humidity. A home safe or interior cabinet with fresh silica-gel packets is usually a better location.'], bullets: ['Aim for relative humidity below 50 percent.', 'Keep coins away from household chemicals, paint, and untreated wood.', 'Never rely on cardboard boxes alone in a damp room.'] },
      { heading: 'Handle and organize with care', paragraphs: ['Hold an unencapsulated coin only by its edge over a clean, soft surface. Clean, dry hands are appropriate for most handling; powder-free nitrile gloves can help when working with sensitive metals. Keep an inventory so a coin does not need to be repeatedly removed just to identify it.'] },
      { heading: 'Check the collection periodically', paragraphs: ['Inspect stored coins a few times each year for haze, spots, color changes, or holder damage. Early detection gives a professional conservator the best chance of addressing an active problem without making it worse.'] }
    ]
  },
  {
    slug: 'raw-vs-graded-coins',
    title: 'Raw vs. Graded Coins: What Should You Buy?',
    category: 'Buying guide',
    readTime: '6 min read',
    image: '/education-raw-vs-graded.png',
    imageAlt: 'A raw coin beside a certified coin holder on a collector desk',
    summary: 'Understand the tradeoffs between ungraded coins and certified slabs before deciding what belongs in your collection.',
    introduction: 'Neither raw nor graded coins are automatically the better purchase. The right choice depends on the coin, your experience, your collecting goals, and how much certainty you want when buying or selling.',
    sections: [
      { heading: 'What “raw” and “graded” mean', paragraphs: ['A raw coin has not been authenticated and assigned a numeric grade by a third-party grading service. A graded coin has been evaluated, labeled, and sealed in a tamper-evident holder—often called a slab. Certification offers an informed opinion, not a guarantee that every buyer will value the coin identically.'] },
      { heading: 'When graded coins make sense', paragraphs: ['Certification can reduce uncertainty for frequently counterfeited, altered, or expensive coins. It also makes comparison and online resale easier because buyers can verify the certification number and population information.'], bullets: ['Key dates and valuable varieties', 'Coins commonly counterfeited or altered', 'High-grade pieces where one grade point changes the price substantially'] },
      { heading: 'When raw coins make sense', paragraphs: ['Raw coins often cost less because grading fees and marketplace premiums are absent. They can be ideal for albums, circulated sets, and inexpensive coins where certification would cost more than the piece itself. Buy from a trusted seller and learn to recognize cleaning, damage, and counterfeit warning signs.'] },
      { heading: 'Buy the coin, not only the label', paragraphs: ['Examine eye appeal, strike, surfaces, and price even when a coin is certified. Compare recent sales for the same date, mintmark, grade, and grading service. A slab is useful information, but it does not replace thoughtful selection.'] }
    ]
  },
  {
    slug: 'why-you-should-never-clean-a-coin',
    title: 'Why You Should Never Clean a Coin',
    category: 'Coin care',
    readTime: '5 min read',
    image: '/education-cleaning.png',
    imageAlt: 'A collectible coin kept separate from cleaning tools on a dark green surface',
    summary: 'Cleaning can permanently alter a coin’s surface and reduce its collectible value—even when the result looks shinier.',
    introduction: 'Collectors value original surfaces. Tarnish, toning, and age are not the same as dirt, and an attempt to improve a coin’s appearance can leave permanent evidence that knowledgeable buyers and graders recognize immediately.',
    sections: [
      { heading: 'Cleaning removes more than dirt', paragraphs: ['Polish, baking soda, toothpaste, erasers, cloths, and brushes can create fine parallel scratches called hairlines. Chemical dips may strip away natural luster or leave an unnatural color. Once original metal is removed, it cannot be restored.'] },
      { heading: 'A brighter coin may be worth less', paragraphs: ['Third-party grading services may identify a coin as cleaned or give it a details designation rather than a standard numeric grade. The resulting market discount can be significant, especially for scarce coins. Natural toning is often acceptable and may even be attractive to collectors.'] },
      { heading: 'What to do instead', paragraphs: ['Handle the coin by its edge, place it in an inert holder, and leave the surface alone. If you suspect active PVC residue, damaging contamination, or saltwater exposure, consult a professional numismatic conservator before taking action.'], bullets: ['Do not rub, wipe, polish, or brush the surface.', 'Do not experiment on a coin because it appears inexpensive.', 'Disclose known cleaning when selling a coin.'] },
      { heading: 'The safe default', paragraphs: ['When in doubt, preserve rather than improve. An unchanged coin gives a future expert more options; an abrasively cleaned coin does not.'] }
    ]
  },
  {
    slug: 'how-do-i-know-if-my-coin-is-valuable',
    title: 'How Do I Know If My Coin Is Valuable?',
    category: 'Value guide',
    readTime: '7 min read',
    image: '/education-value.png',
    imageAlt: 'A collectible coin examined under a magnifying glass with measuring tools nearby',
    summary: 'Date, mintmark, condition, authenticity, and demand all matter. Use this repeatable process before assuming a coin is rare.',
    introduction: 'A coin’s age alone does not determine its value. Millions of some older coins survive, while a modern variety or exceptionally preserved example can be scarce. Accurate identification comes before pricing.',
    sections: [
      { heading: 'Identify the coin completely', paragraphs: ['Record the denomination, date, mintmark, country, and any visible design variety. Mintmarks are usually small letters and their locations vary by series. Compare the coin with photographs from a current, reputable reference rather than relying on a general image search.'] },
      { heading: 'Evaluate condition honestly', paragraphs: ['Wear, marks, luster, color, strike, and damage affect grade. Do not clean the coin to reveal details. For an initial estimate, compare it with grading photographs for the same series and consider a range rather than one exact grade.'] },
      { heading: 'Research real market results', paragraphs: ['Price guides are useful starting points, but completed auction results show what buyers recently paid. Match the exact date, mintmark, variety, approximate grade, and certification status. Asking prices are not evidence that a coin sold.'], bullets: ['Check for common counterfeits and altered mintmarks.', 'Separate metal or face value from collector value.', 'Seek a second opinion before paying appraisal or grading fees.'] },
      { heading: 'When professional grading may help', paragraphs: ['Consider reputable third-party authentication when a coin appears valuable enough that confidence and liquidity could justify the fees. A local coin club or established dealer can often help you decide whether submission makes financial sense.'] }
    ]
  },
  {
    slug: 'how-to-start-a-coin-collection',
    title: 'What Is the Best Way to Start a Coin Collection?',
    category: 'Beginner guide',
    readTime: '7 min read',
    image: '/education-start-collection.png',
    imageAlt: 'An open coin album with neatly arranged coins and beginner collecting supplies',
    summary: 'Start with a clear theme, a modest budget, and good records. A rewarding collection does not need to be expensive.',
    introduction: 'The easiest way to begin is to collect something you genuinely want to learn about. A focused goal prevents impulse purchases and turns every new coin into part of a larger story.',
    sections: [
      { heading: 'Pick an approachable theme', paragraphs: ['Choose a series, type, era, mint, or country that fits your interests and budget. Circulating coins are an inexpensive starting point, while a U.S. type set lets you explore many designs without needing every date.'], bullets: ['A date-and-mintmark set from circulation', 'One example of each denomination or design type', 'Coins connected to a place, period, or historical event'] },
      { heading: 'Learn before buying', paragraphs: ['Get a current reference for your chosen series and learn its key dates, common counterfeits, grading characteristics, and typical prices. Attend a coin show or club meeting to examine many coins in person before making a major purchase.'] },
      { heading: 'Set a budget and quality goal', paragraphs: ['Decide how much you can spend monthly and whether you prefer fewer high-quality coins or a more complete circulated set. Include holders, references, shipping, and possible grading fees in the budget. Never treat a collectible as a guaranteed investment.'] },
      { heading: 'Record and protect every purchase', paragraphs: ['Save the seller, date, price, certification number, and photographs. Store coins in archival-safe holders in a stable environment. Good records make it easier to avoid duplicates, track progress, insure the collection, and eventually sell or pass it on.'] }
    ]
  }
];

export function getEducationArticle(slug: string) {
  return educationArticles.find((article) => article.slug === slug);
}
