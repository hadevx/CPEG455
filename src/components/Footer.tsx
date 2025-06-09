export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} | By Hussain Al-Osaimi</p>
        </div>
      </div>
    </footer>
  );
}
