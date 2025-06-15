import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./home/components/Footer";
import NavBar from "./components/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "AI-Powered Career Coach | Smart Job Preparation Platform",
  description:
    "An AI-powered job preparation platform to help you crack interviews, build resumes, and plan your career with intelligent guidance.",
  keywords: [
    "AI career coach",
    "job preparation",
    "AI interview help",
    "resume builder",
    "career platform",
  ],
  authors: [{ name: "avasarmarga" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "AI-Powered Career Coach",
    description:
      "Crack interviews and plan your career with AI-driven insights.",
    url: "https://avasarmarga.ai",
    siteName: "AI Career Coach",
    images: [
      {
        url: "/gcoey.jpg",
        width: 1200,
        height: 630,
        alt: "AI Career Coach Hero",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Career Coach",
    description:
      "Your AI-driven assistant for career planning and job preparation.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          {/* <Header /> */}
          <NavBar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
        {/* <NetworkStatus /> */}
      </body>
    </html>
  );
}
