import { BookOpen } from "lucide-react";

export default function AboutContent() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-12">
      <div className="text-center space-y-4">
        <BookOpen className="h-16 w-16 text-primary mx-auto" />
        <h1 className="text-4xl font-bold">About CPEG455</h1>
        <p className="text-xl text-muted-foreground">
          Multidisciplinary, project-oriented design course that considers aspects of wireless and
          mobile systems. Including wireless networks and link protocols, mobile networking
          including support for the Internet Protocol suite, mobile middleware, and mobile
          applications.
        </p>
      </div>
    </div>
  );
}
