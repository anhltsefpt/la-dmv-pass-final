import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";


const features = [
{
  num: "01",
  title: "Pass Probability Score",
  headline: "Know exactly when you're ready to pass",
  description:
  "Stop guessing your readiness. Our pass probability score analyzes your performance and tells you when you're truly ready for the real DMV test.",
  cta: "Check your score",
  image: "/hero.png",
  reverse: false
},
{
  num: "02",
  title: "Smart Practice System",
  headline: "Focus on what you don't know",
  description:
  "Our system automatically identifies your weak areas and gives you the right questions at the right time—so you improve faster with less effort.",
  cta: "Start practicing",
  image: "/feature2.png",
  reverse: true
},
{
  num: "03",
  title: "Real Test Simulation",
  headline: "Experience the real DMV test before exam day",
  description:
  "Practice with realistic test simulations that mirror the actual DMV exam. Build confidence and eliminate surprises on test day.",
  cta: "Try the simulator",
  image: "/feature3.png",
  reverse: false
}];


const FeatureSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm mb-2 tracking-wide uppercase">Features</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">Everything you need to pass</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Built by test-prep experts and powered by smart algorithms that adapt to how you learn.
          </p>
        </div>
        <div className="flex flex-col gap-12 md:gap-16">
          {features.map((f) =>
          <div
            key={f.num}
            className={`flex flex-col ${f.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-12 bg-card rounded-3xl p-6 md:p-10 shadow-sm border border-border/50`}>
            
              <div className="flex-1 space-y-4">
                <span className="font-bold text-primary tracking-widest text-3xl">/{f.num}</span>
                <p className="font-semibold text-xl text-sidebar-primary">{f.title}</p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">{f.headline}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.description}</p>
                <Button variant="outline" className="rounded-full mt-2">
                  {f.cta}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex-1 flex justify-center">
                <img
                  src={f.image}
                  alt={f.headline}
                  width={256}
                  height={512}
                  className="w-full max-w-[256px] rounded-2xl object-cover"
                  loading={f.num === "01" ? "eager" : "lazy"}
                  decoding={f.num === "01" ? "sync" : "async"}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default FeatureSection;
