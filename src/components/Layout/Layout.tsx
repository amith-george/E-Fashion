import Promobar from "../Promobar/Promobar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Promobar />

      {/* Main content fills the vertical space */}
      <main className="flex-grow bg-white">{children}</main>

      {/* Footer comes last */}
      <Footer />
    </div>
  );
}
