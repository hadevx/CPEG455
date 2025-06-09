import { Button } from "@/shadcn/ui/button";
import { useState } from "react";
import "katex/dist/katex.min.css";
import Chapter13 from "./Chapter13";
import Chapter12 from "./Chapter12";
import { Calculator } from "lucide-react";

const categories = ["Chapter 13", "Chapter 12"];

/* ─── Component ─────────────────────────────────────────────────────────── */
export default function HomeContent() {
  const [selectedCategory, setSelectedCategory] = useState("Chapter 13");

  return (
    <>
      <div className="text-center space-y-4 py-12">
        <div className="flex justify-center mb-4">
          <Calculator className="h-16 w-16 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-gray-900">
          Wireless Networks and Mobile Systems
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Multidisciplinary, project-oriented design course that considers aspects of wireless and
          mobile systems. Including wireless networks and link protocols.
        </p>
      </div>
      {/* Category Filter */}
      <div className="flex space-y-8 flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className={
              selectedCategory === category
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
            }>
            {category}
          </Button>
        ))}
      </div>
      {selectedCategory == "Chapter 13" ? <Chapter13 /> : <Chapter12 />}
    </>
  );
}
