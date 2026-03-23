import { Download, Target, Trophy, Star, ChevronRight, Smartphone, Users, MapPin, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PhoneMockup from "@/components/PhoneMockup";
import FeatureSection from "@/components/FeatureSection";
import Navbar from "@/components/Navbar";
import useSEO from "@/hooks/useSEO";

const steps = [
{ num: "01", icon: Download, title: "Download the App", desc: "Free to start. Available on iOS and Android." },
{ num: "02", icon: Target, title: "Practice Smart", desc: "Take adaptive tests that focus on your weak spots." },
{ num: "03", icon: Trophy, title: "Pass Your Test", desc: "Walk into the DMV confident and ready to pass." }];


const testimonials = [
{ name: "Sarah M.", role: "First-time driver", rating: 5, text: "I was so nervous about the test but DMV Pass made it feel easy. Passed on my first try with a perfect score!" },
{ name: "James K.", role: "Failed twice before", rating: 5, text: "After failing twice, I found DMV Pass. The smart learning system identified exactly what I was getting wrong. Passed!" },
{ name: "Priya R.", role: "Busy professional", rating: 5, text: "With my schedule, I needed something efficient. 15 minutes a day on DMV Pass and I was ready in a week." }];


const stats = [
{ value: "500K+", label: "Downloads", icon: Download },
{ value: "98%", label: "First-Try Pass Rate", icon: Trophy },
{ value: "50", label: "States Covered", icon: MapPin },
{ value: "1,000+", label: "Questions", icon: HelpCircle }];


const homeSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "DMV Pass",
  description: "DMV Pass helps you ace your driver's permit test with real DMV test simulations, smart learning, and a pass probability engine. 98% first-try pass rate.",
  url: "https://dmvpass.app",
  applicationCategory: "EducationApplication",
  operatingSystem: "iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "500000" },
  publisher: { "@type": "Organization", name: "DMV Pass", url: "https://dmvpass.app" },
};

const Index = () => {
  useSEO({
    title: "DMV Pass – Pass Your DMV Test on the First Try",
    description: "DMV Pass helps you ace your driver's permit test with real DMV test simulations, smart learning, and a pass probability engine. 98% first-try pass rate.",
    canonical: "https://dmvpass.app",
    schema: homeSchema,
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-primary text-primary" />
              Rated 4.9 by 500K+ learners
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight mb-5">
              Pass Your DMV Test{" "}
              <span className="text-primary">on the First Try</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Smart test simulations, adaptive learning, and a pass probability engine that tells you exactly when you're ready. Study smarter, not harder.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a href="#" aria-label="Download on the App Store">
                <img src="/badges/appstore.svg" alt="Download on the App Store" style={{ height: "54px", width: "auto" }} />
              </a>
              <a href="#" aria-label="Get it on Google Play">
                <img src="/badges/googleplay.png" alt="Get it on Google Play" style={{ height: "80px", width: "auto", marginTop: "-15px", marginBottom: "-15px" }} />
              </a>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-primary" />
                <span>500K+ Users</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-primary" />
                <span>98% Pass Rate</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span>4.9 Rating</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/feature2.png"
              alt="App preview"
              className="w-[300px] md:w-[400px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <FeatureSection />

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm mb-2 tracking-wide uppercase">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">Ready in 3 simple steps</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) =>
            <div key={s.num} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="font-bold text-primary mb-2 text-3xl">{s.num}</div>
                <h3 className="font-bold text-foreground text-lg mb-2">{s.title}</h3>
                <p className="text-base text-slate-700">{s.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 sm:px-6 bg-primary">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) =>
          <div key={s.label} className="text-center">
              <s.icon className="w-6 h-6 text-primary-foreground/70 mx-auto mb-2" />
              <div className="text-3xl sm:text-4xl font-extrabold text-primary-foreground">{s.value}</div>
              <div className="text-sm text-primary-foreground/80 mt-1">{s.label}</div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm mb-2 tracking-wide uppercase">Reviews</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">Loved by learners everywhere</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) =>
            <Card key={t.name} className="border-border/50 shadow-sm bg-card">
                <CardContent className="p-6">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) =>
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  )}
                  </div>
                  <p className="text-foreground mb-5 leading-relaxed text-sm">"{t.text}"</p>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-accent/30">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6">
            <Smartphone className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">Start studying for free today</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Join 500,000+ learners who passed their DMV test with confidence. No credit card required.</p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a href="#" aria-label="Download on the App Store">
              <img src="/badges/appstore.svg" alt="Download on the App Store" style={{ height: "54px", width: "auto" }} />
            </a>
            <a href="#" aria-label="Get it on Google Play">
              <img src="/badges/googleplay.png" alt="Get it on Google Play" style={{ height: "80px", width: "auto", marginTop: "-15px", marginBottom: "-15px" }} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo3.png" alt="DMV Pass logo" className="w-8 h-8 object-contain rounded-lg" />
              <span className="font-extrabold text-lg">DMV Pass</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Smart DMV test prep to help you pass your driver's test on the first try, in all 50 states.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-bold text-sm tracking-widest uppercase mb-4">Links</p>
            <ul className="flex flex-col gap-3 text-sm text-primary-foreground/80">
              <li><Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-bold text-sm tracking-widest uppercase mb-4">Contact</p>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-3">
              Have questions about DMV Pass? Reach out to our support team.
            </p>
            <a href="mailto:contact@dmvpass.net" className="font-semibold text-sm hover:underline">
              contact@dmvpass.net
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 px-4 sm:px-6 py-5">
          <p className="text-center text-sm text-primary-foreground/70">© 2026 DMV Pass. All rights reserved.</p>
        </div>
      </footer>
    </div>);

};

export default Index;