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

export const ORDER_PLACEHOLDER = `Example:
2x Room Sprays - Baby Powder
1x Reed Diffuser - Savage
7x Wax Melts - Clean Cotton`;
