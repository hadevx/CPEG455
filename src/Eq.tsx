import { useState } from "react";
import { Button } from "@/shadcn/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shadcn/ui/card";
import { Badge } from "@/shadcn/ui/badge";
import { Separator } from "@/shadcn/ui/separator";
import { Calculator, Home, User, Mail, BookOpen } from "lucide-react";

const equations = [
  {
    id: 1,
    title: "Pythagorean Theorem",
    equation: "a^2 + b^2 = c^2",
    description:
      "Fundamental relation in Euclidean geometry among the three sides of a right triangle.",
    category: "Geometry",
  },
  {
    id: 2,
    title: "Quadratic Formula",
    equation: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
    description: "Formula that provides the solution(s) to a quadratic equation.",
    category: "Algebra",
  },
  {
    id: 3,
    title: "Einstein's Mass-Energy Equivalence",
    equation: "E = mc^2",
    description: "Relationship between mass and energy in the theory of special relativity.",
    category: "Physics",
  },
  {
    id: 4,
    title: "Euler's Identity",
    equation: "e^{i\\pi} + 1 = 0",
    description:
      "Mathematical equation considered to be the most beautiful equation in mathematics.",
    category: "Complex Analysis",
  },
  {
    id: 5,
    title: "Newton's Second Law",
    equation: "F = ma",
    description:
      "The acceleration of an object is directly proportional to the net force acting on it.",
    category: "Physics",
  },
  {
    id: 6,
    title: "Area of a Circle",
    equation: "A = \\pi r^2",
    description: "Formula for calculating the area of a circle given its radius.",
    category: "Geometry",
  },
];

const categories = ["All", "Geometry", "Algebra", "Physics", "Complex Analysis"];

export default function Component() {
  const [activeSection, setActiveSection] = useState("Home");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEquations =
    selectedCategory === "All"
      ? equations
      : equations.filter((eq) => eq.category === selectedCategory);

  const renderContent = () => {
    switch (activeSection) {
      case "Home":
        return (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-4 py-12">
              <div className="flex justify-center mb-4">
                <Calculator className="h-16 w-16 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Wireless Networks and Mobile Systems
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore the beauty and elegance of mathematics through fundamental equations that
                shape our understanding of the world.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}>
                  {category}
                </Button>
              ))}
            </div>

            {/* Equations Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredEquations.map((eq) => (
                <Card key={eq.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{eq.title}</CardTitle>
                      <Badge variant="secondary">{eq.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center py-6 bg-muted/30 rounded-lg">
                      <div className="text-2xl font-mono">{"$$" + eq.equation + "$$"}</div>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">
                      {eq.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case "About":
        return (
          <div className="max-w-4xl mx-auto space-y-8 py-12">
            <div className="text-center space-y-4">
              <BookOpen className="h-16 w-16 text-primary mx-auto" />
              <h1 className="text-4xl font-bold">About Mathematical Equations</h1>
              <p className="text-xl text-muted-foreground">
                Understanding the language of the universe
              </p>
            </div>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p>
                Mathematics is often called the universal language, and equations are its most
                eloquent expressions. Each equation tells a story, reveals a pattern, or unlocks a
                mystery about our world.
              </p>

              <h2>Why Equations Matter</h2>
              <p>
                From the simple elegance of {"$E = mc^2$"} to the profound beauty of Euler's
                identity {"$$e^{i\\pi} + 1 = 0$$"}, mathematical equations provide us with tools to
                understand everything from the motion of planets to the behavior of subatomic
                particles.
              </p>

              <h2>Categories We Explore</h2>
              <ul>
                <li>
                  <strong>Geometry:</strong> Equations that describe shapes, spaces, and spatial
                  relationships
                </li>
                <li>
                  <strong>Algebra:</strong> Fundamental relationships between variables and
                  constants
                </li>
                <li>
                  <strong>Physics:</strong> Mathematical descriptions of natural phenomena
                </li>
                <li>
                  <strong>Complex Analysis:</strong> Advanced mathematical concepts involving
                  complex numbers
                </li>
              </ul>
            </div>
          </div>
        );

      case "Contact":
        return (
          <div className="max-w-2xl mx-auto space-y-8 py-12">
            <div className="text-center space-y-4">
              <Mail className="h-16 w-16 text-primary mx-auto" />
              <h1 className="text-4xl font-bold">Get in Touch</h1>
              <p className="text-xl text-muted-foreground">
                Have questions about mathematics or want to contribute?
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  We'd love to hear from fellow mathematics enthusiasts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span>equations@mathematics.edu</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <span>Dr. Mathematics Team</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold">Contribute</h3>
                  <p className="text-sm text-muted-foreground">
                    If you have suggestions for equations to include or corrections to make, please
                    don't hesitate to reach out. Mathematics is a collaborative endeavor!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calculator className="h-6 w-6" />
            <span className="font-bold text-xl">CPEG 455</span>
          </div>

          <nav className="flex items-center space-x-6">
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">{renderContent()}</main>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} | By Hussain Al-Osaimi</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
