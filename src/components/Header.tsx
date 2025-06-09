import { Calculator, Home, User, Mail } from "lucide-react";
import { Button } from "@/shadcn/ui/button";

export default function Header({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: (section: string) => void;
}) {
  return (
    <header className="sticky mx-auto px-2 lg:w-3/4 w-full top-0 z-50  border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Calculator className="h-6 w-6" />
          <span className="font-bold text-xl">CPEG 455</span>
        </div>
        <nav className="flex items-center space-x-2 lg:space-x-6">
          <Button
            variant={activeSection === "Home" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveSection("Home")}
            className="flex items-center space-x-2">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Button>
          <Button
            variant={activeSection === "About" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveSection("About")}
            className="flex items-center space-x-2">
            <User className="h-4 w-4" />
            <span>About</span>
          </Button>
          <Button
            variant={activeSection === "Contact" ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveSection("Contact")}
            className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>Contact</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}
