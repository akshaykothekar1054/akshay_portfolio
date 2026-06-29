import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Journey from "@/components/sections/Journey";

export const metadata = {
  title: "My Journey — Akshay Kothekar",
  description: "Education and professional experience timeline of Akshay Kothekar, Software Engineer.",
};

export default function JourneyPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#060608" }}>
        <Journey />
      </main>
      <Footer />
    </>
  );
}
