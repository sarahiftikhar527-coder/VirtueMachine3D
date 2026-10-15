export const CURRENCY = "$"; // Rs chahiye to "Rs " likh do
export const RUSH_MULTIPLIER = 1.4; // rush = standard x 1.4

export const DELIVERY = {
  standard: { label: "Standard", note: "5–10 days" },
  rush: { label: "Rush", note: "2–3 days" },
};

export const PLANS = [
  {
    id: "prototype",
    name: "Prototype",
    tagline: "One part to test a design before you commit.",
    price: 49,
    unit: "per part",
    quantity: "1 – 9 parts",
    features: [
      "Free drawing review",
      "Aluminium, mild steel, or plastic",
      "Tolerance ±0.05 mm",
      "Photo update before dispatch",
    ],
    cta: "Start a prototype",
  },
  {
    id: "batch",
    name: "Small batch",
    tagline: "The sweet spot for pilots and first runs.",
    price: 24,
    unit: "per part",
    quantity: "10 – 199 parts",
    badge: "Most chosen",
    featured: true,
    features: [
      "Everything in Prototype",
      "Stainless steel and brass included",
      "Inspection sheet with every batch",
      "Tracked courier delivery",
      "Free redo if the fault is ours",
    ],
    cta: "Get a batch quote",
  },
  {
    id: "production",
    name: "Production",
    tagline: "Repeat orders with prices locked in.",
    price: 12,
    unit: "per part",
    quantity: "200+ parts",
    features: [
      "Everything in Small batch",
      "Locked price for 12 months",
      "Scheduled monthly dispatch",
      "Dedicated project contact",
    ],
    cta: "Talk to our team",
  },
];

export const PERKS = ["No setup fees", "Free drawing review", "NDA on request"];

/* per-part price (rush ho to zyada) */
export const unitPrice = (plan, mode) =>
  Math.round(plan.price * (mode === "rush" ? RUSH_MULTIPLIER : 1));