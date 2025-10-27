import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "VidyaSetu",
  description: "Premium learning experience",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#F8FAFD] text-[#111827]">
        <Navbar />
        <main className="min-h-screen pt-[90px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}