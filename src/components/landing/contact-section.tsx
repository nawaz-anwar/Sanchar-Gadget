import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section className="flex flex-col items-center gap-4 text-center opacity-0 animate-fade-in-up [animation-delay:400ms]">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
        Interested in buying this domain?
      </h2>
      <Button asChild size="lg" className="shadow-md transition-transform hover:scale-105">
        <a href="mailto:sanchargadget@gmail.com">
          <Mail className="mr-2 h-5 w-5" />
          Contact Owner
        </a>
      </Button>
      <p className="text-sm text-muted-foreground">
        Email: <a href="mailto:sanchargadget@gmail.com" className="font-medium text-primary hover:underline">sanchargadget@gmail.com</a>
      </p>
    </section>
  );
}
