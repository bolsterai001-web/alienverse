import { BookDetails, Chapter, Retailer, Review, FAQItem } from "@/types";

export const BOOK_INFO: BookDetails = {
  title: "Alien Verse",
  subtitle: "A Bestselling Space Opera Novel",
  author: "Elias Vance",
  synopsis:
    "Beyond the dark veil of the Kepler-452 Abyss, an ancient frequency ignites across the silence of deep space. When deep-salvage captain Mara Vance intercepts the signal, humanity is thrust into a cosmic labyrinth where memory is matter, and the stars are listening.",
  fullBlurb: [
    "Year 2198. The outer rim colonies are dying of resource decay. Deep space salvage vessel 'Omen Horizon' intercepts a repeating broadcast at the forbidden frequency of 1420.405 MHz—originating from inside a celestial rift long deemed uninhabitable.",
    "Captain Mara Vance and her specialist crew anticipate a derelict carrier. Instead, they discover a planetary-scale ring megastructure older than the solar system, pulsing with bioluminescent light and waking up from ten million years of hibernation.",
    "As rival corporate flotillas close in to harvest the construct's impossible physics, Mara makes contact with the artifact's slumbering consciousness. It is not an engine of war, nor a monument of peace—it is an anthology: the recorded final verses of ten thousand extinct civilizations. And Earth has just been summoned to add its own stanza.",
  ],
  specs: {
    isbn: "978-0-9988112-4-1",
    pages: 464,
    published: "October 14, 2026",
    publisher: "Celestial Press / Nebula Editions",
    genres: ["Hard Sci-Fi", "Space Opera", "Techno-Mystery", "First Contact"],
    language: "English (Global Edition)",
  },
  features: [
    {
      title: "Hard Sci-Fi Foundations",
      description: "Rigorous relativistic physics, deep-space telemetry, and plausible theoretical mechanics meet awe-inspiring cosmic wonder.",
      icon: "Atom",
    },
    {
      title: "First Contact Mystery",
      description: "An ancient Dyson ring transmitting encrypted memory archives across deep time, challenging what it means to be conscious.",
      icon: "Radio",
    },
    {
      title: "High-Stakes Space Opera",
      description: "A gritty salvage crew against predatory megacorporations and the incomprehensible architecture of extinct star-gods.",
      icon: "Compass",
    },
  ],
};

export const RETAILERS: Retailer[] = [
  {
    id: "amazon",
    name: "Amazon",
    badge: "#1 Best Seller in Hard Sci-Fi",
    formats: ["Hardcover", "Paperback", "Kindle", "Audible"],
    priceHint: "$18.99 Paperback / $9.99 Kindle",
    url: "https://www.amazon.com/dp/B0EXAMP1E",
    featured: true,
  },
  {
    id: "barnes-and-noble",
    name: "Barnes & Noble",
    badge: "B&N Sci-Fi Book Club Pick",
    formats: ["Hardcover", "Paperback", "NOOK Book"],
    priceHint: "$28.99 Collector's Hardcover",
    url: "https://www.barnesandnoble.com/w/alien-verse",
  },
  {
    id: "bookshop-org",
    name: "Bookshop.org",
    badge: "Supports Local Indie Bookstores",
    formats: ["Hardcover", "Paperback"],
    priceHint: "Support Independent Booksellers",
    url: "https://bookshop.org/books/alien-verse",
    featured: true,
  },
  {
    id: "apple-books",
    name: "Apple Books",
    badge: "Enhanced Digital Edition",
    formats: ["eBook", "Audiobook"],
    priceHint: "$9.99 Digital Download",
    url: "https://books.apple.com/us/book/alien-verse",
  },
  {
    id: "google-play",
    name: "Google Play Books",
    badge: "Cross-Device E-Reader",
    formats: ["eBook", "Audiobook"],
    priceHint: "$9.99 Cloud Edition",
    url: "https://play.google.com/store/books/details/alien-verse",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Galaxy Sci-Fi Weekly",
    source: "Editorial Starred Review",
    quote: "Alien Verse is a tour-de-force of contemporary space opera. Elias Vance combines the rigorous astrophysics of Alastair Reynolds with the existential majesty of Arthur C. Clarke. An instant sci-fi classic.",
    rating: 5,
    featured: true,
    type: "editorial",
  },
  {
    id: "rev-2",
    author: "Dr. Kaelen Thorne",
    source: "Author of 'The Event Void'",
    quote: "A staggering, mind-bending epic. The concept of the celestial anthology kept me turning pages until dawn. Vance writes vacuum and alien silence better than anyone writing today.",
    rating: 5,
    featured: true,
    type: "editorial",
  },
  {
    id: "rev-3",
    author: "Nebula Chronicle",
    source: "Book of the Month",
    quote: "The visual prose is unmatched. You can feel the bone-deep vibration of the Omen Horizon's thrusters and the suffocating beauty of the Dyson construct. Prepare to be obsessed.",
    rating: 5,
    featured: true,
    type: "editorial",
  },
  {
    id: "rev-4",
    author: "Elena Rostova",
    source: "Verified Reader (Goodreads 5-Star)",
    date: "September 2026",
    quote: "Mara Vance is the exact kind of tired, hyper-competent protagonist I adore. The pacing never drags, and the mystery surrounding the Signal will genuinely give you chills.",
    rating: 5,
    featured: true,
    type: "reader",
  },
  {
    id: "rev-5",
    author: "Marcus Chen",
    source: "Verified Amazon Reviewer",
    date: "August 2026",
    quote: "I haven't felt this sense of cosmic awe since I first read Rendezvous with Rama and Hyperion. Buy the hardcover—the cover art and typography are breathtaking.",
    rating: 5,
    featured: true,
    type: "reader",
  },
  {
    id: "rev-6",
    author: "Sora Takahashi",
    source: "Sci-Fi Society Reviews",
    date: "August 2026",
    quote: "Hard science fiction with real emotional gravity. The ending left me staring at the stars in absolute wonder. Looking forward to the sequel!",
    rating: 5,
    featured: false,
    type: "reader",
  },
];

export const SAMPLE_CHAPTER: Chapter = {
  id: "chapter-01",
  title: "Transmission 001: The Whisper in the Vacuum",
  subtitle: "Kepler-452 Outer Exclusion Sector // 0.04 Kelvin Ambient",
  readingTime: "8 min read",
  transmissionLog: "VESSEL: OMEN HORIZON // SENSOR LOG: 881-ZETA // HYDROGEN EMISSION DETECTED",
  excerpt:
    "Vacuum carries no sound, yet when the construct ignited, every hull plate in the salvage bay sang with the frequency of ringing iron.",
  paragraphs: [
    "Vacuum is never truly silent; it merely lacks the courtesy of atmosphere to carry the screams. But at 0.04 Kelvin, three light-days past the rim of the Kepler-452 perimeter, even the quantum fluctuations seemed hesitant to stir.",
    "Captain Mara Vance pressed her palm against the cockpit viewport of the Omen Horizon. The frost on the inner silica layer formed jagged hexagonal ferns, fed by the faint moisture of her exhalations. Out there in the obsidian dark, nothing should have been reflecting light. The navigational charts listed this coordinate as an empty hydrostatic trench—a graveyard of dead asteroids and forgotten orbital debris.",
    "Yet something was burning with a quiet, bioluminescent cyan fire.",
    "\"Telemetry just kicked, Captain,\" whispered Jesse from the sensor pit, his fingers dancing across the luminescent haptic console. \"Spectral analysis confirms it isn't thermal radiation. It's coherent light. Frequency 1420.405 megahertz, modulated in repeating mathematical octaves. Exactly twenty-one thousand cycles per pulse.\"",
    "Mara didn't turn around. Her eyes remained locked onto the growing geometric shadow cutting across the starfield. It was an orbital ring, but not built of human titanium or composite polymers. Its surface was carved from obsidian-black silicate, inscribed with intricate luminescent channels that flowed like arterial rivers of liquefied starlight.",
    "\"Is there a transponder?\" Mara asked, keeping her pulse steady. In deep salvage, fear was simply fuel that burned too quickly. \"Any IFF handshake from the Core World Cartels?\"",
    "\"Negative. No IFF. No human cryptographic signature,\" Jesse swallowed audibly. \"Captain... the radiometer indicates the structural mass exceeds three quadrillion metric tons. It isn't a ship. It's an artificial nexus. And according to the carbon decay of the micrometeorite crust... it has been waiting here for twelve million years.\"",
    "A deep, harmonic vibration shuddered through the Omen Horizon's keel. It wasn't acoustic; it was electromagnetic resonance interacting directly with the ship's gravimetric dampers. The cockpit displays flickered once, then flashed an unfamiliar sequence of alien glyphs that resolved, for one terrifying instant, into legible English text:",
    "\"WELCOME TO THE VERSE. THE STAGE IS COLD. SING YOUR WITNESS.\"",
  ],
};

export const AUTHOR_INFO = {
  name: "Elias Vance",
  role: "Novelist, Astrophysicist & Space Exploration Advocate",
  location: "Pacific Northwest / Outer Perimeter Observer",
  bio: [
    "Elias Vance is an award-winning science fiction novelist with a background in orbital mechanics and radio astronomy. Before dedicating his career to fiction, he worked as a researcher analyzing deep space telemetry anomalies and planetary ring dynamics.",
    "His debut space opera, Alien Verse, became an international sensation, celebrated for its marriage of rigorous scientific authenticity, poetic cosmic wonder, and unforgettable character dynamics.",
    "When he is not charting the fictional horrors and wonders of the outer cosmos, Elias can be found star-gazing with his custom Dobsonian telescope, mentoring aspiring sci-fi authors, and building vintage analog synthesizers.",
  ],
  awards: [
    "Winner, 2026 Galaxy Award for Best Sci-Fi Novel",
    "Finalist, Hugo Award for Best Novel",
    "Nebula Award Nominee for Excellence in Science Fiction",
    "Goodreads Choice Award Finalist - Science Fiction",
  ],
  upcomingEvents: [
    {
      date: "Nov 12, 2026",
      title: "Worldcon Keynote: Hard Physics in Modern Space Opera",
      location: "Seattle Convention Center & Virtual Stream",
    },
    {
      date: "Dec 05, 2026",
      title: "Author Q&A & Book Signing",
      location: "Powell's Books, Portland OR",
    },
    {
      date: "Jan 18, 2027",
      title: "The Kepler Signal: Science Fact Meets Science Fiction",
      location: "SETI Institute Public Lecture Series (Live Online)",
    },
  ],
};

export const FAQS: FAQItem[] = [
  {
    question: "Is 'Alien Verse' a standalone novel or part of a planned series?",
    answer:
      "'Alien Verse' is a complete, self-contained story with a definitive, satisfying climax. However, it serves as the foundational cornerstone for the upcoming 'Kepler Odyssey' trilogy. The second book, 'Signal Fracture', is currently in development.",
    category: "story",
  },
  {
    question: "How scientifically accurate is the space travel and physics?",
    answer:
      "Elias Vance holds a graduate degree in orbital mechanics and works closely with astrophysicists. While relativistic travel and alien megastructures explore speculative boundaries, the physics adhere closely to known thermodynamic, gravitational, and astronomical principles.",
    category: "story",
  },
  {
    question: "Where can I buy signed hardcover or collector's editions?",
    answer:
      "Limited edition signed hardcovers are available exclusively through select independent bookstore partners featured in our Retailers list, and at upcoming author signing events.",
    category: "publishing",
  },
  {
    question: "Are film or television rights currently optioned?",
    answer:
      "For film, television, or international translation rights inquiries, please use the Contact page form under the 'Rights & Adaptations' category to reach Elias Vance's literary management agency.",
    category: "author",
  },
];
