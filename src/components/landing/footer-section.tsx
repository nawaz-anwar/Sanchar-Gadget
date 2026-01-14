export function FooterSection() {
  return (
    <footer className="w-full py-6 mt-auto">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} sanchargadget.com — Domain inquiry only.
      </div>
    </footer>
  );
}
