// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = "https://app.alterrazzo.it";

// Import and set font for each variant
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

import { Lora } from "next/font/google";
import { Poppins } from "next/font/google";    


const primaryFont = Poppins({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const secondaryFont = Lora({
  variable: "--font-secondary",
  subsets: ["latin"],
  display: "swap",
});

const tertiaryFont = Geist({
  variable: "--font-tertiary",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const font = {
  primary: primaryFont,
  secondary: secondaryFont,
  tertiary: tertiaryFont,
  code: monoFont,
};

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark", // dark | light - not needed when using ThemeProvider
  neutral: "gray", // sand | gray | slate
  brand: "green", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "orange", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast | inverse
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "filled", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

const effects = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: false,
    x: 50,
    y: 0,
    width: 100,
    height: 100,
    tilt: 0,
    colorStart: "brand-background-strong",
    colorEnd: "static-transparent",
    opacity: 50,
  },
  dots: {
    display: true,
    size: "2",
    color: "brand-on-background-weak",
    opacity: 40,
  },
  lines: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
    thickness: 1,
    angle: 45,
    size: "8",
  },
  grid: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
    width: "2",
    height: "2",
  },
};

// metadata for pages
const meta = {
  home: {
    path: "/",
    title: "Ristorante Al Terrazzo",
    description:
      "Ristorante e Pizzeria Al Terrazzo - Gambarie di Santo Stefano in Aspromonte",
    image: "/og/home.jpg",
    canonical: "https://app.alterrazzo.it",
    robots: "index,follow",
    alternates: [{ href: "https://app.alterrazzo.it", hrefLang: "it" }],
  },
  // add more routes and reference them in page.tsx
};

// default schema data
const schema = {
  logo: "",
  type: "Ristorante",
  name: "Al Terrazzo",
  description: meta.home.description,
  email: "info@alterrazzo.it",
};

// social links
const social = {
  instagram: "https://www.instagram.com/alterrazzo",
  facebook: "https://www.facebook.com/alterrazzo",
};

export { baseURL, font, style, meta, schema, social, effects };
