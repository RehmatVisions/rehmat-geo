import "./globals.css";
import "./hero-background.css";
import "./interaction-polish.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ScrollReveal from "@/components/ScrollReveal";
export const metadata = {
  title: { default: "Rehmat Ali | GEO, AEO & AI Search Consultant", template: "%s | Rehmat Ali" },
  description: "Lahore-based GEO and AEO consultant. Website audits, AI visibility research and practical content recommendations for businesses."
};
export default function RootLayout({ children }) {
  return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap"/></head><body><SiteHeader/><main>{children}</main><ScrollReveal/><SiteFooter/></body></html>;
}