import "./globals.css";
import "./hero-background.css";
import "./interaction-polish.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ScrollReveal from "@/components/ScrollReveal";
const SITE_URL = "https://geo-by-rehmat.vercel.app";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Rehmat Ali",
      url: SITE_URL,
      jobTitle: "GEO and AEO Consultant",
      description: "Lahore-based consultant focused on Generative Engine Optimization, Answer Engine Optimization and AI search visibility research.",
      sameAs: ["https://www.fiverr.com/s/7j12Wa1"],
      knowsAbout: [
        "Generative Engine Optimization",
        "Answer Engine Optimization",
        "AI search visibility",
        "Technical SEO",
        "Content strategy"
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressCountry: "PK"
      }
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Rehmat Geo",
      publisher: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en"
    }
  ]
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Rehmat Ali | GEO, AEO & AI Search Consultant", template: "%s | Rehmat Ali" },
  description: "Lahore-based GEO and AEO consultant. Website audits, AI visibility research and practical content recommendations for businesses.",
  other: {
    "google-site-verification": "O8ep_k2HdbdWHR0ORg5Wq5IwwjT8SRD47aEED3CERao"
  },
  openGraph: {
    type: "website",
    siteName: "Rehmat Geo",
    title: "Rehmat Ali | GEO, AEO & AI Search Consultant",
    description: "Lahore-based GEO and AEO consultant. Website audits, AI visibility research and practical content recommendations for businesses.",
    url: SITE_URL,
    images: [{ url: "/assets/hero.webp", width: 1672, height: 941, alt: "Rehmat Geo — GEO, AEO and AI search consulting" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rehmat Ali | GEO, AEO & AI Search Consultant",
    description: "Website audits, AI visibility research and practical GEO/AEO recommendations.",
    images: ["/assets/hero.webp"]
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/png" },
      { url: "/assets/icon-192.webp", sizes: "192x192", type: "image/webp" }
    ],
    apple: [
      { url: "/apple-icon.webp", sizes: "180x180", type: "image/webp" }
    ]
  }
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Performance: preconnect to font origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Fonts: display=swap prevents invisible text during load */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Manrope:wght@400;500;600;700;800&display=swap"
        />
        {/* Performance hints */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
      </head>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <ScrollReveal />
        <SiteFooter />
      </body>
    </html>
  );
}