const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

const items = [
  // New Arrived
  {
    name: "Vintage Leather Travel Bag",
    description: "Handcrafted genuine leather bag, perfect for weekend getaways.",
    price: 120,
    image: "/images/hero-1.jpg", 
    category: "Fashion",
    featured: true,
    isNewArrival: true
  },
  {
    name: "Smart Carry-On Suitcase",
    description: "Built-in charger and GPS tracker. The future of travel.",
    price: 220,
    image: "/images/hero-2.jpg",
    category: "Travel",
    featured: true,
    isNewArrival: true
  },
  {
    name: "Lightweight Trekking Backpack",
    description: "Water-resistant, ergonomic design for long hikes.",
    price: 85,
    image: "/images/hero-3.jpg",
    category: "Travel",
    featured: true,
    isNewArrival: true
  },
  {
    name: "Portable Espresso Maker",
    description: "Enjoy fresh coffee anywhere with this manual press.",
    price: 60,
    image: "/images/hero-4.jpg",
    category: "Kitchen",
    featured: true,
    isNewArrival: true
  },
  {
    name: "Waterproof Dry Bag 20L",
    description: "Keep your gear dry in any condition.",
    price: 25,
    image: "/images/hero-5.jpg",
    category: "Travel",
    isNewArrival: true
  },
  {
    name: "Foldable Solar Charger",
    description: "Charge your devices with the power of the sun.",
    price: 45,
    image: "/images/hero-1.jpg",
    category: "Electronics",
    isNewArrival: true
  },
  {
    name: "Travel Laundry Bag",
    description: "Washable and odor-resistant.",
    price: 15,
    image: "/images/hero-2.jpg",
    category: "Travel",
    isNewArrival: true
  },
  {
    name: "Compact Umbrella",
    description: "Windproof and lightweight.",
    price: 18,
    image: "/images/hero-3.jpg",
    category: "Travel",
    isNewArrival: true
  },

  // Gift & Offers
  {
    name: "Travel Journal Gift Set",
    description: "Luxury pen and leather journal in a gift box. 20% OFF.",
    price: 35,
    image: "/images/hero-3.jpg",
    category: "Gifts",
    isGift: true
  },
  {
    name: "Couple's Passport Holders",
    description: "Matching leather holders. Perfect wedding gift.",
    price: 50,
    image: "/images/hero-4.jpg",
    category: "Gifts",
    isGift: true
  },
  {
    name: "World Map Scratch Poster",
    description: "Track your travels. Great gift for wanderlusts.",
    price: 25,
    image: "/images/hero-5.jpg",
    category: "Gifts",
    isGift: true
  },
  {
    name: "Compact Travel Pillow Set",
    description: "Memory foam pillow + eye mask. 30% OFF this week.",
    price: 20,
    image: "/images/hero-1.jpg",
    category: "Travel",
    isGift: true
  },
  {
    name: "Personalized Luggage Tags",
    description: "Set of 2 leather tags with custom initials.",
    price: 25,
    image: "/images/hero-2.jpg",
    category: "Gifts",
    isGift: true
  },
  {
    name: "Travel Toiletry Bag",
    description: "Hanging organizer with multiple compartments. 15% OFF.",
    price: 22,
    image: "/images/hero-3.jpg",
    category: "Travel",
    isGift: true
  },
  {
    name: "Portable Power Bank 20000mAh",
    description: "High capacity charging on the go. Sale end soon.",
    price: 40,
    image: "/images/hero-4.jpg",
    category: "Electronics",
    isGift: true
  },
  {
    name: "Travel Utensil Set",
    description: "Eco-friendly bamboo cutlery set.",
    price: 12,
    image: "/images/hero-5.jpg",
    category: "Gifts",
    isGift: true
  },

  // Most Popular / Travelers Choice
  {
    name: "Noise Cancelling Headphones",
    description: "Best seller. Immersive sound for long flights.",
    price: 250,
    image: "/images/hero-5.jpg",
    category: "Electronics",
    isPopular: true,
    isHot: true
  },
  {
    name: "Universal Travel Adapter",
    description: "Essential for every traveler. Selling fast!",
    price: 25,
    image: "/images/hero-1.jpg",
    category: "Travel",
    isPopular: true
  },
  {
    name: "Action Camera 4K",
    description: "Capture every moment in high definition. Top rated.",
    price: 199,
    image: "/images/hero-2.jpg",
    category: "Electronics",
    isPopular: true,
    isHot: true
  },
  {
    name: "Collapsible Water Bottle",
    description: "Space-saving and eco-friendly. Customer favorite.",
    price: 15,
    image: "/images/hero-3.jpg",
    category: "Travel",
    isPopular: true
  },
  {
    name: "Travel First Aid Kit",
    description: "Compact medical kit for emergencies. Highly recommended.",
    price: 30,
    image: "/images/hero-4.jpg",
    category: "Travel",
    featured: true,
    isPopular: true
  },
  {
    name: "Digital Luggage Scale",
    description: "Avoid overweight baggage fees with this handy tool.",
    price: 12,
    image: "/images/hero-5.jpg",
    category: "Travel",
    isPopular: true
  },
  {
    name: "Quick-Dry Travel Towel",
    description: "Microfiber towel, packs small and dries fast.",
    price: 18,
    image: "/images/hero-1.jpg",
    category: "Travel",
    isPopular: true
  },
  {
    name: "Passport Document Holder",
    description: "RFID blocking family organizer wallet.",
    price: 28,
    image: "/images/hero-2.jpg",
    category: "Travel",
    isPopular: true
  },
  {
    name: "Inflatable Neck Pillow",
    description: "Ergonomic support for sleeping on planes.",
    price: 15,
    image: "/images/hero-3.jpg",
    category: "Travel",
    isPopular: true
  },
  {
    name: "Travel Shoe Bags (3 Pack)",
    description: "Keep your shoes separate from clean clothes.",
    price: 10,
    image: "/images/hero-4.jpg",
    category: "Travel",
    isPopular: true
  },
  {
    name: "Compression Packing Cubes",
    description: "Maximize suitcase space with these organizers.",
    price: 35,
    image: "/images/hero-5.jpg",
    category: "Travel",
    isPopular: true
  },
    {
    name: "Bluetooth Tracker Tag",
    description: "Never lose your keys or bag again.",
    price: 20,
    image: "/images/hero-1.jpg",
    category: "Electronics",
    isPopular: true
  }
];

async function main() {
  console.log('Start seeding ...');
  // First clean up
  await prisma.product.deleteMany({});
  
  for (const item of items) {
    const product = await prisma.product.create({
      data: item,
    });
    console.log(`Created product: ${product.name}`);
  }
  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
