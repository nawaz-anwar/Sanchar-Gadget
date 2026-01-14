import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const valuePoints = [
  "Brand-friendly name",
  "Suitable for electronics, gadgets, or tech businesses",
  "Easy to remember and SEO-friendly",
];

export function DomainInfoSection() {
  return (
    <section className="w-full max-w-2xl opacity-0 animate-fade-in-up [animation-delay:200ms]">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl text-center font-semibold tracking-tight font-code">
            sanchargadget.com
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {valuePoints.map((point, index) => (
              <li key={index} className="flex items-start gap-4 text-left">
                <Check className="size-5 text-primary mt-1 shrink-0" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
