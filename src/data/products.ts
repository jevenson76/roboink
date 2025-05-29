export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  productType: string;
  description?: string;
  featured?: boolean;
  createdAt?: Date;
  rating: number;
  reviewCount: number;
}

export const products: Product[] = [
  // Robots - Tee Shirts
  {
    id: 1,
    title: "Victorian Clockwork Automaton",
    price: 35.99,
    image: "https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "robots",
    productType: "tee-shirts",
    description: "A stunning Victorian-era automaton design featuring intricate gears and brass mechanisms",
    featured: true,
    rating: 4.8,
    reviewCount: 234
  },
  {
    id: 3,
    title: "Brass Gear Engineer",
    price: 39.99,
    image: "https://images.pexels.com/photos/6045031/pexels-photo-6045031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "robots",
    productType: "tee-shirts",
    description: "Showcase your engineering spirit with this detailed brass gear robot design",
    rating: 4.5,
    reviewCount: 89
  },
  {
    id: 15,
    title: "Steam-Powered Sentinel",
    price: 34.99,
    image: "https://images.pexels.com/photos/6045028/pexels-photo-6045028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "robots",
    productType: "tee-shirts",
    rating: 4.2,
    reviewCount: 45
  },
  
  // Vehicles - Hoodies
  {
    id: 2,
    title: "Steampunk Airship Navigator",
    price: 42.99,
    image: "https://images.pexels.com/photos/6045028/pexels-photo-6045028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "vehicles",
    productType: "hoodies",
    description: "Navigate the skies in style with this airship-themed hoodie",
    featured: true,
    rating: 4.9,
    reviewCount: 312
  },
  {
    id: 16,
    title: "Brass Submarine Explorer",
    price: 47.99,
    image: "https://images.pexels.com/photos/6045242/pexels-photo-6045242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "vehicles",
    productType: "hoodies",
    rating: 4.3,
    reviewCount: 67
  },
  
  // Clockwork Creatures - Mugs
  {
    id: 4,
    title: "Mechanical Owl Companion",
    price: 37.99,
    image: "https://images.pexels.com/photos/6045215/pexels-photo-6045215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "clockwork-creatures",
    productType: "mugs",
    description: "Enjoy your morning brew with this wise mechanical owl companion",
    rating: 4.6,
    reviewCount: 156
  },
  {
    id: 17,
    title: "Brass Dragon Mug",
    price: 19.99,
    image: "https://images.pexels.com/photos/6045031/pexels-photo-6045031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "clockwork-creatures",
    productType: "mugs",
    rating: 4.4,
    reviewCount: 92
  },
  
  // Typographic Treasures - Posters
  {
    id: 5,
    title: "Steam Engine Typography",
    price: 34.99,
    image: "https://images.pexels.com/photos/6045020/pexels-photo-6045020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "typographic-treasures",
    productType: "posters",
    description: "Inspiring steampunk quotes rendered in Victorian typography",
    rating: 4.7,
    reviewCount: 78
  },
  {
    id: 18,
    title: "Cogwheel Wisdom",
    price: 29.99,
    image: "https://images.pexels.com/photos/6045241/pexels-photo-6045241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "typographic-treasures",
    productType: "posters",
    rating: 4.1,
    reviewCount: 34
  },
  
  // Retro Futurism - Tote Bags
  {
    id: 6,
    title: "Retro Future Vision",
    price: 41.99,
    image: "https://images.pexels.com/photos/6045242/pexels-photo-6045242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "retro-futurism",
    productType: "tote-bags",
    description: "Carry your essentials in this retro-futuristic designed tote",
    rating: 4.5,
    reviewCount: 103
  },
  {
    id: 19,
    title: "Neo-Victorian Carryall",
    price: 38.99,
    image: "https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "retro-futurism",
    productType: "tote-bags",
    rating: 4.0,
    reviewCount: 28
  },
  
  // Skulls - Phone Cases
  {
    id: 7,
    title: "Cogwheel Skull Design",
    price: 38.99,
    image: "https://images.pexels.com/photos/6045033/pexels-photo-6045033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "skulls",
    productType: "phone-cases",
    description: "Protect your phone with this edgy mechanical skull design",
    rating: 4.8,
    reviewCount: 187
  },
  {
    id: 20,
    title: "Brass Bone Phone Case",
    price: 35.99,
    image: "https://images.pexels.com/photos/6045215/pexels-photo-6045215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "skulls",
    productType: "phone-cases",
    rating: 4.3,
    reviewCount: 56
  },
  
  // Gadgetry & Gizmos - Canvas Prints
  {
    id: 8,
    title: "Victorian Time Machine",
    price: 44.99,
    image: "https://images.pexels.com/photos/6045241/pexels-photo-6045241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "gadgetry-gizmos",
    productType: "canvas-prints",
    description: "A stunning canvas print of an elaborate Victorian time machine",
    rating: 4.9,
    reviewCount: 223
  },
  {
    id: 21,
    title: "Brass Telescope Observatory",
    price: 49.99,
    image: "https://images.pexels.com/photos/6045020/pexels-photo-6045020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "gadgetry-gizmos",
    productType: "canvas-prints",
    rating: 4.4,
    reviewCount: 71
  },
  
  // Victorian Vanguard - Various Products
  {
    id: 9,
    title: "Victorian Gentleman Portrait",
    price: 32.99,
    image: "https://images.pexels.com/photos/6045028/pexels-photo-6045028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "victorian-vanguard",
    productType: "tee-shirts",
    featured: true,
    rating: 4.7,
    reviewCount: 298
  },
  {
    id: 10,
    title: "Lady Mechanica",
    price: 45.99,
    image: "https://images.pexels.com/photos/6045033/pexels-photo-6045033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "victorian-vanguard",
    productType: "hoodies",
    rating: 4.6,
    reviewCount: 134
  },
  {
    id: 22,
    title: "Victorian Corset Design",
    price: 36.99,
    image: "https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "victorian-vanguard",
    productType: "tank-tops",
    rating: 4.2,
    reviewCount: 61
  },
  
  // More Robots - Different Product Types
  {
    id: 11,
    title: "Mechanical Butler Sweatshirt",
    price: 48.99,
    image: "https://images.pexels.com/photos/6045031/pexels-photo-6045031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "robots",
    productType: "sweatshirts",
    rating: 4.5,
    reviewCount: 98
  },
  {
    id: 12,
    title: "Steam Bot Water Bottle",
    price: 24.99,
    image: "https://images.pexels.com/photos/6045215/pexels-photo-6045215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "robots",
    productType: "water-bottles",
    rating: 4.3,
    reviewCount: 76
  },
  {
    id: 23,
    title: "Gear Head Beanie",
    price: 28.99,
    image: "https://images.pexels.com/photos/6045242/pexels-photo-6045242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "robots",
    productType: "beanies",
    rating: 3.9,
    reviewCount: 23
  },
  
  // Vehicles - Different Product Types
  {
    id: 13,
    title: "Airship Captain Baseball Cap",
    price: 26.99,
    image: "https://images.pexels.com/photos/6045020/pexels-photo-6045020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "vehicles",
    productType: "baseball-caps",
    rating: 4.4,
    reviewCount: 89
  },
  {
    id: 14,
    title: "Steam Train Backpack",
    price: 54.99,
    image: "https://images.pexels.com/photos/6045241/pexels-photo-6045241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "vehicles",
    productType: "backpacks",
    rating: 4.7,
    reviewCount: 145
  },
  {
    id: 24,
    title: "Dirigible Pilot Sticker Pack",
    price: 12.99,
    image: "https://images.pexels.com/photos/6045033/pexels-photo-6045033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "vehicles",
    productType: "stickers",
    rating: 4.1,
    reviewCount: 34
  },
  
  // Clockwork Creatures - Different Product Types
  {
    id: 25,
    title: "Mechanical Cat Pillow",
    price: 32.99,
    image: "https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "clockwork-creatures",
    productType: "pillows",
    rating: 4.6,
    reviewCount: 112
  },
  {
    id: 26,
    title: "Brass Bird Pet Bandana",
    price: 18.99,
    image: "https://images.pexels.com/photos/6045028/pexels-photo-6045028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "clockwork-creatures",
    productType: "pet-bandana",
    rating: 4.2,
    reviewCount: 45
  },
  {
    id: 27,
    title: "Gear Wolf Blanket",
    price: 58.99,
    image: "https://images.pexels.com/photos/6045031/pexels-photo-6045031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "clockwork-creatures",
    productType: "blankets",
    rating: 4.8,
    reviewCount: 201
  },
  
  // Home Decor Items
  {
    id: 28,
    title: "Victorian Gear Wall Art",
    price: 42.99,
    image: "https://images.pexels.com/photos/6045215/pexels-photo-6045215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "gadgetry-gizmos",
    productType: "wall-art",
    rating: 4.5,
    reviewCount: 87
  },
  {
    id: 29,
    title: "Steampunk Clock Metal Print",
    price: 67.99,
    image: "https://images.pexels.com/photos/6045242/pexels-photo-6045242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "gadgetry-gizmos",
    productType: "metal-prints",
    rating: 4.9,
    reviewCount: 167
  },
  {
    id: 30,
    title: "Brass Gear Coaster Set",
    price: 22.99,
    image: "https://images.pexels.com/photos/6045020/pexels-photo-6045020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "gadgetry-gizmos",
    productType: "coasters",
    rating: 4.0,
    reviewCount: 39
  },
  {
    id: 999,
    title: "Custom Design Request",
    price: 50.00,
    image: "/src/assets/CUSTOM.png",
    category: "custom-requests",
    productType: "custom",
    description: "Commission a one-of-a-kind steampunk design tailored to your vision. Our artists will work with you to bring your ideas to life.",
    featured: false,
    rating: 5.0,
    reviewCount: 0
  }
];