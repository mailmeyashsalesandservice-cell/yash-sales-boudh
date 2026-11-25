// scooters.js — Multi-brand EV showroom data layer
// Every scooter carries a `brand` field so new brands can be added effortlessly.
// Zero speed figures, no promotional clutter, no outdated battery chemistry.
//
// Colour variants: each scooter exposes a `colors` array of
//   { name, hex, image }
// so the UI can swap the photo when a customer picks a shade. Every `image`
// path below matches a real file inside `images/` (verified).

const SHOWROOM_WHATSAPP = "917008603371"; // +91 7008603371, digits only for wa.me

const SCOOTER_BRANDS = [
  { id: "nij", name: "NIJ", brand: "NIJ", tagline: "Premium Electric Mobility" },
  // Future brands can be added here, e.g.:
  // { id: "hero", name: "Hero", brand: "Hero Electric", tagline: "..." },
];

const SCOOTERS = [
  {
    id: "nij-r14",
    brand: "NIJ",
    name: "NIJ R 14",
    image: "./images/r14-black.jpg",
    variants: [
      { label: "48V 25Ah", volts: 48, ah: 25, range: "45-50 km", price: 65000 },
      { label: "48V 30Ah", volts: 48, ah: 30, range: "55-60 km", price: 70000 }
    ],
    defaultVariant: 0,
    colors: [
      { name: "Black", hex: "#1a1a1a", image: "./images/r14-black.jpg" },
      { name: "Blue", hex: "#1d5ed5", image: "./images/r14-blue.jpg" },
      { name: "Green", hex: "#2e9e4a", image: "./images/r14-green.jpg" },
      { name: "Maroon", hex: "#7b1f2e", image: "./images/r14-maroon.jpg" },
      { name: "Gray", hex: "#8a8f98", image: "./images/r14-gray.jpg" },
      { name: "White", hex: "#f5f5f5", image: "./images/r14-white.jpg" }
    ],
    colorNote: null,
    brakes: "Front Disc / Rear Drum",
    tyres: "Front 90/90-12, Rear 90/90-10 Tubeless Alloy",
    kerbWeight: "82 kg",
    groundClearance: "175 mm",
    loadCapacity: "150 kg",
    motor: "Waterproof BLDC Hub Motor",
    suspension: "Telescopic Front / Hydraulic Rear",
    charging: "4-5 hrs",
    highlights: ["Waterproof BLDC Hub Motor", "Telescopic Front + Hydraulic Rear Suspension", "Charging 4-5 hrs"]
  },
  {
    id: "nij-accelero",
    brand: "NIJ",
    name: "NIJ ACCELERO+",
    image: "./images/accelero-powder-blue.jpg",
    variants: [
      { label: "48V 25Ah", volts: 48, ah: 25, range: "45-50 km", price: 68000 },
      { label: "48V 30Ah", volts: 48, ah: 30, range: "55-60 km", price: 72000 }
    ],
    defaultVariant: 0,
    colors: [
      { name: "Powder Blue", hex: "#9dc5d8", image: "./images/accelero-powder-blue.jpg" },
      { name: "Blue", hex: "#1d5ed5", image: "./images/accelero-blue.jpg" },
      { name: "Matte Green", hex: "#2e7d32", image: "./images/accelero-green.jpg" },
      { name: "Red", hex: "#c0392b", image: "./images/accelero-red.png" }
    ],
    colorNote: null,
    brakes: "Front Disc / Rear Drum",
    tyres: "Front 90/90-12, Rear 90/90-10 Tubeless Alloy",
    kerbWeight: "85 kg",
    groundClearance: "180 mm",
    loadCapacity: "150 kg",
    motor: "Waterproof BLDC Hub Motor",
    suspension: "Telescopic Front / Dual Hydraulic Rear",
    charging: "4-5 hrs",
    highlights: ["Waterproof BLDC Hub Motor", "Telescopic Front + Dual Hydraulic Rear Suspension", "Charging 4-5 hrs"]
  },
  {
    id: "nij-n9",
    brand: "NIJ",
    name: "NIJ N9",
    image: "./images/n9-black.webp",
    variants: [
      { label: "60V 25Ah", volts: 60, ah: 25, range: "60-70 km", price: 75000 },
      { label: "60V 30Ah", volts: 60, ah: 30, range: "70-80 km", price: 80000 }
    ],
    defaultVariant: 0,
    colors: [
      { name: "Black", hex: "#1a1a1a", image: "./images/n9-black.webp" },
      { name: "Blue", hex: "#1d5ed5", image: "./images/n9-blue.jpg" },
      { name: "Deep Green", hex: "#0e5a3a", image: "./images/n9-green.webp" },
      { name: "Navy Blue", hex: "#14264d", image: "./images/n9-navy.webp" },
      { name: "Red", hex: "#c0392b", image: "./images/n9-red.png" },
      { name: "Silver", hex: "#b9c0c9", image: "./images/n9-silver.webp" }
    ],
    colorNote: null,
    brakes: "Double Disc (Front & Rear Disc)",
    tyres: "Front 90/90-12, Rear 90/90-12 Tubeless Alloy",
    kerbWeight: "88 kg",
    groundClearance: "180 mm",
    loadCapacity: "150 kg",
    motor: "High-Torque BLDC Hub Motor",
    suspension: "Telescopic Front / Hydraulic Rear",
    charging: "4-5 hrs",
    highlights: ["High-Torque BLDC Hub Motor", "Double Disc Brakes (Front & Rear)", "Charging 4-5 hrs"]
  },
  {
    id: "nij-captiva",
    brand: "NIJ",
    name: "NIJ CAPTIVA 5G",
    image: "./images/captiva-5g-black.png",
    variants: [
      { label: "60V 25Ah", volts: 60, ah: 25, range: "60-70 km", price: 80000 },
      { label: "60V 35Ah", volts: 60, ah: 35, range: "80-90 km", price: 85000 }
    ],
    defaultVariant: 0,
    colors: [
      { name: "Black", hex: "#1a1a1a", image: "./images/captiva-5g-black.png" },
      { name: "Blue", hex: "#1d5ed5", image: "./images/captiva-5g-blue.jpg" },
      { name: "Green", hex: "#2e9e4a", image: "./images/captiva-5g-green.jpg" },
      { name: "Silver", hex: "#b9c0c9", image: "./images/captiva-5g-silver.png" },
      { name: "White", hex: "#f5f5f5", image: "./images/captiva-5g-white.png" }
    ],
    colorNote: null,
    brakes: "Double Disc (Front & Rear Disc)",
    tyres: "Front 90/90-12, Rear 90/90-12 Tubeless Alloy",
    kerbWeight: "90 kg",
    groundClearance: "180 mm",
    loadCapacity: "150 kg",
    motor: "High-Torque BLDC Hub Motor",
    suspension: "Telescopic Front / Hydraulic Rear",
    charging: "4-5 hrs",
    highlights: ["High-Torque BLDC Hub Motor", "Full Steel Guard Kit", "Keyless Remote + Anti-Theft Alarm"]
  },
  {
    id: "nij-ae4",
    brand: "NIJ",
    name: "NIJ AE4",
    image: "./images/ae4-white.png",
    variants: [
      { label: "60V 35Ah", volts: 60, ah: 35, range: "80-90 km", price: 88000 },
      { label: "60V 45Ah", volts: 60, ah: 45, range: "100-120 km", price: 98000 }
    ],
    defaultVariant: 0,
    colors: [
      { name: "White", hex: "#f5f5f5", image: "./images/ae4-white.png" },
      { name: "Black", hex: "#1a1a1a", image: "./images/ae4-black.jpg" },
      { name: "Red", hex: "#c0392b", image: "./images/ae4-red.jpg" },
      { name: "Green", hex: "#2e9e4a", image: "./images/ae4-green.jpg" },
      { name: "Gray", hex: "#8a8f98", image: "./images/ae4-gray.jpg" }
    ],
    colorNote: "Dual Tone",
    brakes: "Double Disc (Front & Rear Disc)",
    tyres: "Front 90/90-12, Rear 90/90-12 Tubeless Alloy",
    kerbWeight: "92 kg",
    groundClearance: "185 mm",
    loadCapacity: "150 kg",
    motor: "High-Efficiency BLDC Hub Motor",
    suspension: "Telescopic Front / Hydraulic Rear",
    charging: "4-5 hrs",
    highlights: ["High-Efficiency BLDC Hub Motor", "Projector LED Headlamp", "Reverse Mode + Auto-Repair Switch"]
  },
  {
    id: "nij-iq",
    brand: "NIJ",
    name: "NIJ IQ",
    image: "./images/iq-maroon.png",
    variants: [
      { label: "60V 25Ah", volts: 60, ah: 25, range: "60-70 km", price: 85000 },
      { label: "60V 35Ah", volts: 60, ah: 35, range: "80-90 km", price: 95000 }
    ],
    defaultVariant: 0,
    colors: [
      { name: "Maroon", hex: "#7b1f2e", image: "./images/iq-maroon.png" },
      { name: "White", hex: "#f5f5f5", image: "./images/iq-white.png" },
      { name: "Black", hex: "#1a1a1a", image: "./images/iq-black.png" },
      { name: "Bronze", hex: "#8f6b3c", image: "./images/iq-bronze.jpg" },
      { name: "Silver", hex: "#b9c0c9", image: "./images/iq-silver.jpg" }
    ],
    colorNote: null,
    brakes: "Double Disc (Front & Rear Disc)",
    tyres: "Front 90/90-12, Rear 90/90-12 Tubeless Alloy",
    kerbWeight: "86 kg",
    groundClearance: "180 mm",
    loadCapacity: "150 kg",
    motor: "BLDC Hub Motor",
    suspension: "Telescopic Front / Hydraulic Rear",
    charging: "4-5 hrs",
    highlights: ["BLDC Hub Motor", "Digital Meter", "Anti-Theft Lock"]
  },
  {
    id: "nij-lc",
    brand: "NIJ",
    name: "NIJ LC",
    image: "./images/lc-black.png",
    variants: [
      { label: "60V 25Ah", volts: 60, ah: 25, range: "60-70 km", price: 80000 },
      { label: "60V 35Ah", volts: 60, ah: 35, range: "80-90 km", price: 90000 }
    ],
    defaultVariant: 0,
    colors: [
      { name: "Black", hex: "#1a1a1a", image: "./images/lc-black.png" },
      { name: "Blue", hex: "#1d5ed5", image: "./images/lc-blue.webp" },
      { name: "Maroon", hex: "#7b1f2e", image: "./images/lc-maroon.webp" },
      { name: "White", hex: "#f5f5f5", image: "./images/lc-white.webp" }
    ],
    colorNote: null,
    brakes: "Double Disc (Front & Rear Disc)",
    tyres: "Front 90/90-12, Rear 90/90-12 Tubeless Alloy",
    kerbWeight: "88 kg",
    groundClearance: "180 mm",
    loadCapacity: "150 kg",
    motor: "BLDC Hub Motor",
    suspension: "Telescopic Front / Hydraulic Rear",
    charging: "4-5 hrs",
    highlights: ["BLDC Hub Motor", "Twin-Pod LED Headlamp", "USB Charging Port"]
  },
  {
    id: "nij-loader",
    brand: "NIJ",
    name: "NIJ LOADER",
    image: "./images/loader.png",
    variants: [
      { label: "60V 35Ah", volts: 60, ah: 35, range: "60-70 km", price: 105000 },
      { label: "60V 45Ah", volts: 60, ah: 45, range: "80-90 km", price: 115000 }
    ],
    defaultVariant: 0,
    colors: [
      { name: "Black", hex: "#1a1a1a", image: "./images/loader.png" }
    ],
    colorNote: null,
    brakes: "Double Disc (Front & Rear Disc)",
    tyres: "Front 90/90-12, Rear 90/90-12 Reinforced Tubeless",
    kerbWeight: "110 kg",
    groundClearance: "185 mm",
    loadCapacity: "350 kg",
    motor: "Heavy-Duty High-Torque BLDC Motor",
    suspension: "Heavy-Duty Double-Spring Rear Suspension",
    charging: "4-5 hrs",
    highlights: ["Heavy-Duty High-Torque BLDC Motor", "Heavy-Duty Double-Spring Rear Suspension", "Front Metal Basket + Rear Flatbed Carrier", "Loading Capacity 350 kg"]
  }
];
