import { useState } from "react";
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import { ToastContainer } from "react-toastify";

export default function App() {
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Main activeSection={activeSection} />
      <Footer />
      <ToastContainer />
    </div>
  );
}
