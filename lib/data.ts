export const products = [
  {
    id: "snap-bar-wax-melts",
    name: "Snap Bar Wax Melts",
    price: "£3 each or 7 for £20",
    shortPrice: "From £3",
    image: "/images/snap-bar-wax-melts.png",
    description:
      "Hand-poured snap bars with rich, long-lasting fragrance. Break off a segment and melt to fill your space with luxury scent.",
  },
  {
    id: "room-sprays",
    name: "Room Sprays",
    price: "£5",
    shortPrice: "£5",
    image: "/images/room-sprays.png",
    description:
      "Instant refresh for any room. A fine mist of premium fragrance that transforms your home in seconds.",
  },
  {
    id: "reed-diffusers",
    name: "Reed Diffusers",
    price: "£15",
    shortPrice: "£15",
    image: "/images/reed-diffusers.png",
    description:
      "Continuous, elegant fragrance diffusion. Beautifully presented diffusers that elevate every corner of your home.",
  },
  {
    id: "reed-diffuser-refills",
    name: "Reed Diffuser Refills",
    price: "£10",
    shortPrice: "£10",
    image: "/images/reed-diffuser-refills.png",
    description:
      "Keep your favourite diffuser flowing. Premium refill oils in the same exquisite scents you love.",
  },
] as const;

export const scents = [
  "Avo Bath",
  "Baby Powder",
  "Clothesline",
  "Coconut and Lemongrass",
  "Cucumber and Cactus Water",
  "Clean Cotton",
  "Fairy Outdoor",
  "Fairy Laundry",
  "Frosted Eucalyptus",
  "Forest Fresh",
  "Fresh Unstoppables",
  "Gold Orchid",
  "Spring Awakening",
  "Sandalwood & Eucalyptus",
  "Japanese Garden",
  "Rose Wonderland",
  "Rockin Ruby Razz",
  "Savage",
  "Vie Est La Belle",
  "Paradoxe",
] as const;

export const ORDER_PLACEHOLDER = `Example: 2 x Savage, 1 x Alien, 1 x Million. Delivery to Belfast.`;

export const trustSignals = [
  {
    title: "Local Belfast Business",
    description: "Proudly based in Belfast, serving customers across Northern Ireland.",
  },
  {
    title: "Fast WhatsApp Ordering",
    description: "Place your order in seconds. We confirm quickly and personally.",
  },
  {
    title: "Premium Quality Scents",
    description: "Handcrafted with quality fragrance oils for a long-lasting, luxury finish.",
  },
  {
    title: "Collection & Delivery",
    description: "Flexible collection and local delivery options across Belfast and NI.",
  },
] as const;

export const orderSteps = [
  {
    step: "01",
    title: "Choose Your Scents",
    description: "Browse our collection and pick your favourite products and fragrances.",
  },
  {
    step: "02",
    title: "Select Your Items",
    description: "Choose a product and scent from the dropdowns, then tap Add to Order.",
  },
  {
    step: "03",
    title: "Send via WhatsApp",
    description: "Tap the button — your order opens in WhatsApp, ready to send.",
  },
  {
    step: "04",
    title: "We Confirm & Deliver",
    description: "We reply to confirm availability, total, and collection or delivery.",
  },
] as const;

export const reviews = [
  {
    name: "Sarah M.",
    location: "Belfast",
    text: "The scents are absolutely gorgeous — my home smells like a luxury boutique. Ordering through WhatsApp was so easy.",
    rating: 5,
  },
  {
    name: "Emma K.",
    location: "Lisburn",
    text: "Best wax melts I've ever bought. Long-lasting fragrance and beautiful presentation. Will definitely order again.",
    rating: 5,
  },
  {
    name: "Claire D.",
    location: "Bangor",
    text: "Love supporting a local Belfast business. The reed diffuser looks premium and the Savage scent is incredible.",
    rating: 5,
  },
] as const;

export const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Fill in the Order Now form with your details and scent choices, then tap Send via WhatsApp. We'll confirm your order and arrange collection or delivery.",
  },
  {
    question: "Do you deliver across Northern Ireland?",
    answer:
      "Yes — we offer local delivery across Belfast and Northern Ireland, as well as collection. Delivery details are confirmed when we reply to your WhatsApp order.",
  },
  {
    question: "How many scents are available?",
    answer:
      "We currently offer 20 signature scents across all product types, from fresh and clean to warm and exotic. View the full list on our Products page.",
  },
  {
    question: "How long do wax melts last?",
    answer:
      "Each segment of our snap bar wax melts provides several hours of beautiful fragrance. Many customers enjoy multiple sessions from a single bar.",
  },
  {
    question: "Can I mix scents in one order?",
    answer:
      "Absolutely. List each product and scent in your order details — for example, room sprays, wax melts, and diffusers in different fragrances.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Payment is arranged when we confirm your order via WhatsApp. We keep the process simple and personal for every customer.",
  },
] as const;
