import { Mail, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shadcn/ui/card";
import { Separator } from "@/shadcn/ui/separator";

export default function ContactContent() {
  return (
    <div className="max-w-2xl mx-auto space-y-8 py-12">
      <div className="text-center space-y-4">
        <Mail className="h-16 w-16 text-primary mx-auto" />
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-xl text-muted-foreground">
          Have questions about CPEG455 or want to contribute?
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>We'd love to hear from you</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <span>S00052828@auk.edu.kw</span>
            </div>
            <div className="flex items-center space-x-3">
              <User className="h-5 w-5 text-muted-foreground" />
              <span>Hussain Al-Osaimi</span>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="font-semibold">Contribute</h3>
            <p className="text-sm text-muted-foreground">
              If you have suggestions for us to include or corrections to make, please don't
              hesitate to reach out.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
