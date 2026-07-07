export type ProjectFeature = {
  title: string;
  description: string;
};

export type ProjectGalleryItem = {
  src: string;
  caption: string;
};

export type ProjectStat = {
  label: string;
  value: string;
};

export type ProjectDetail = {
  slug: string;
  title: string;
  client: string;
  tagline: string;
  accent: string;
  cover: string;
  liveUrl: string;
  stats: ProjectStat[];
  overview: string[];
  features: ProjectFeature[];
  tech: string[];
  gallery: ProjectGalleryItem[];
};

/*
  Keyed by the same `id` used in components/sections/Projects.tsx so a
  project card can link straight to `/projects/${id}`. Add the next
  project's write-up here and point its card's `link`/`cover` at it —
  the /projects/[slug] route and layout are already generic.
*/
export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  "gym-saas": {
    slug: "gym-saas",
    title: "Gym Management SaaS Platform",
    client: "Spartan",
    tagline: "The complete OS for modern gyms",
    accent: "#EC4899",
    cover: "/gym_home.png",
    liveUrl: "https://spartan-seven-amber.vercel.app/",
    stats: [
      { label: "Gyms", value: "500+" },
      { label: "Collected", value: "₹2Cr+" },
      { label: "Check-ins", value: "1M+" },
    ],
    overview: [
      "Spartan is a multi-tenant SaaS platform that gives gym owners a single dashboard to manage members, automate plan renewals, track payments, and monitor day-to-day operations across one or more branches.",
      "It replaces the spreadsheets and register books most independent gyms still run on — with real-time attendance, revenue and member-status data surfaced the moment a gym owner logs in.",
    ],
    features: [
      { title: "Member Lifecycle", description: "Every member is tracked across Active, Expired and Frozen states, with plan, phone number and renewal date visible at a glance." },
      { title: "Plans & Payments", description: "Configurable pricing tiers — Starter, Power, Strong, Iron — with pending-dues tracking and monthly revenue (MRR) reporting." },
      { title: "Attendance Tracking", description: "Daily check-ins logged per member with a 30-day attendance trend chart, filterable by method and date range." },
      { title: "Multi-Branch Support", description: "A single owner account can switch between individual branches or view all branches combined." },
      { title: "Staff & Leads", description: "Manages staff accounts alongside a leads pipeline for tracking prospective members before they convert." },
      { title: "Reports & Inventory", description: "Revenue and attendance reporting, plus inventory tracking for gym equipment and stock." },
    ],
    tech: ["React.js", "Node.js", "Supabase", "PostgreSQL"],
    gallery: [
      { src: "/gym_dashboard.png", caption: "Dashboard — revenue, attendance and member status at a glance" },
      { src: "/gym_member.png", caption: "Members — lifecycle tracking with plans, status and renewal dates" },
      { src: "/gym_attendance.png", caption: "Attendance — daily check-ins with a 30-day trend" },
    ],
  },

  "frontend-dashboard": {
    slug: "frontend-dashboard",
    title: "Frontend Admin Dashboard",
    client: "UI Template",
    tagline: "A complete, reusable dashboard UI kit for any project",
    accent: "#ef4444",
    // TODO: swap in dashboard1.png once it's uploaded — using dashboard2.png as a placeholder cover.
    cover: "/dashboard2.png",
    liveUrl: "https://gym-management-system-lyart.vercel.app/login",
    stats: [
      { label: "UI Pages", value: "15+" },
      { label: "Components", value: "40+" },
      { label: "Responsive", value: "100%" },
    ],
    overview: [
      "A fully built frontend admin dashboard — a complete UI kit rather than a single-purpose app, meant to be dropped into any project that needs an authenticated admin panel.",
      "It ships with a login flow, a component library covering nearly every common admin UI pattern, and a set of productivity modules (calendar, email, chat, kanban) already wired into a shared sidebar and layout shell.",
    ],
    features: [
      { title: "Login & Auth UI", description: "A polished sign-in screen with email/password, remember-me and forgot-password flows, ready to connect to any auth backend." },
      { title: "UI Component Library", description: "Cards, alerts, buttons, badges, carousels, dropdowns, modals and grid layouts — built once and reused across every page." },
      { title: "Productivity Modules", description: "Calendar, email, chat and a kanban board are included as fully laid-out pages, not just mockups." },
      { title: "Responsive Sidebar Navigation", description: "A collapsible sidebar with nested menus and notification badges that adapts down to mobile." },
      { title: "Data Visualization", description: "Chart widgets for metrics like items sold and balance, ready to bind to real data." },
    ],
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    gallery: [
      { src: "/dashboard_login.png", caption: "Login — sign-in flow with remember-me and password recovery" },
      { src: "/dashboard2.png", caption: "UI Elements — the reusable card component library" },
    ],
  },

  "gym-website": {
    slug: "gym-website",
    title: "Gym Marketing Website",
    client: "ZYMZOO",
    tagline: "Time to get fit — classes, trainers, shop and membership plans",
    accent: "#eab308",
    cover: "/gym1web.png",
    liveUrl: "https://gym-website-af98.vercel.app/",
    stats: [
      { label: "Since", value: "2005" },
      { label: "Plans", value: "3 Tiers" },
      { label: "Pages", value: "7+" },
    ],
    overview: [
      "ZYMZOO is a full marketing website for a gym brand — built to convert visitors into members, not just inform them. It covers everything from the hero pitch to checkout-ready merchandise.",
      "The site is structured around Home, About, Classes, Shop, Trainers, Blog and Contact, with a three-tier membership pricing section and a shopping cart for gym gear front and center.",
    ],
    features: [
      { title: "Hero & Brand Intro", description: "A bold \"Time to Get Fit\" hero section with a strong visual identity and clear call to action." },
      { title: "Classes & Trainers", description: "Dedicated sections showcasing available classes and the trainers who run them." },
      { title: "Membership Pricing", description: "Basic, Standard and Premium plans laid out side by side, with the recommended tier visually highlighted." },
      { title: "Integrated Shop", description: "A cart-enabled shop section for gym equipment and merchandise, built into the same navigation." },
      { title: "Blog & Contact", description: "A blog for content marketing plus a contact page for inquiries and sign-ups." },
    ],
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    gallery: [
      { src: "/gym2web.png", caption: "About — brand story and \"Best Equipments & Fitness Trainers\" pitch" },
      { src: "/gym3web.png", caption: "Pricing — Basic, Standard and Premium membership plans" },
    ],
  },

  grocify: {
    slug: "grocify",
    title: "Grocify — Online Grocery Store",
    client: "Grocify",
    tagline: "Tasty organic fruits & veggies, delivered to your city",
    accent: "#f97316",
    cover: "/grocify1.png",
    liveUrl: "https://grocify-flame.vercel.app/",
    stats: [
      { label: "Categories", value: "4+" },
      { label: "Reviews", value: "5★" },
      { label: "Delivery", value: "City-wide" },
    ],
    overview: [
      "Grocify is an e-commerce storefront for fresh, organic groceries — designed to make ordering fruits, vegetables, dairy and seafood feel as simple as browsing a few product cards.",
      "It pairs a warm, product-first homepage with a filterable catalog, wishlist and cart, and closes the loop with real customer reviews to build trust before checkout.",
    ],
    features: [
      { title: "Organic Produce Hero", description: "A homepage built around \"Tasty Organic Fruits & Veggies\", leading straight into a Shop Now call to action." },
      { title: "Category-Filtered Catalog", description: "Products filterable by All, Fruits, Vegetables, Dairy and SeaFood, each with price and a one-click add." },
      { title: "Wishlist & Cart", description: "Heart-to-wishlist and quick-add-to-cart controls on every product card." },
      { title: "Customer Reviews", description: "A dedicated reviews section with star ratings and named testimonials to build buyer confidence." },
      { title: "Search", description: "A prominent search bar for finding specific products quickly." },
    ],
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    gallery: [
      { src: "/grocify2.png", caption: "Our Products — category-filtered catalog with quick add-to-cart" },
      { src: "/grocify3.png", caption: "Customer Reviews — ratings and testimonials" },
    ],
  },
};
