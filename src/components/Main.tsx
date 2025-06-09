import HomeContent from "./HomeContent.tsx";
import AboutContent from "./AboutContent.tsx";
import ContactContent from "./ContactContent.tsx";

export default function Main({ activeSection }: { activeSection: string }) {
  return (
    <main className="container mx-auto px-4 py-8">
      {activeSection === "Home" && <HomeContent />}
      {activeSection === "About" && <AboutContent />}
      {activeSection === "Contact" && <ContactContent />}
    </main>
  );
}
