import "./globals.css";
import "./hero-background.css";
import "./interaction-polish.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ScrollReveal from "@/components/ScrollReveal";
export const metadata = {
  title: { default: "Rehmat Ali | GEO, AEO & AI Search Consultant", template: "%s | Rehmat Ali" },
  description: "Lahore-based GEO and AEO consultant. Website audits, AI visibility research and practical content recommendations for businesses.",
  icons: {
    icon: [
      { url: "/assets/logo.webp", type: "image/webp" }
    ],
    apple: [
      { url: "/assets/logo.webp", type: "image/webp" }
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