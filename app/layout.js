import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Dhamika",
  description: "MRO & Electrical Exports",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="mt-[9rem] md:mt-[8rem] lg:mt-[4rem]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
