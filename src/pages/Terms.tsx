import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import useSEO from "@/hooks/useSEO";

const Terms = () => {
  useSEO({
    title: "Terms of Service | DMV Pass",
    description: "Read the DMV Pass Terms of Service. Understand your rights and responsibilities when using our DMV test preparation application.",
    canonical: "https://dmvpass.app/terms",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Terms of Service",
      url: "https://dmvpass.app/terms",
      publisher: { "@type": "Organization", name: "DMV Pass", url: "https://dmvpass.app" },
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-16 md:pt-32 md:pb-24">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-8">Terms of Service</h1>
        <div className="prose prose-muted-foreground max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm">Last updated: March 20, 2026</p>

          <h2 className="text-xl font-bold text-foreground">1. Acceptance of Terms</h2>
          <p>By downloading, installing, or using DMV Pass, you agree to be bound by these Terms of Service. If you do not agree, please do not use the app.</p>

          <h2 className="text-xl font-bold text-foreground">2. Description of Service</h2>
          <p>DMV Pass is a study tool designed to help users prepare for their DMV permit test. The app provides practice questions, adaptive learning, test simulations, and pass probability predictions. DMV Pass is not affiliated with any state DMV.</p>

          <h2 className="text-xl font-bold text-foreground">3. No Guarantee of Results</h2>
          <p>While DMV Pass is designed to maximize your chances of passing, we do not guarantee that you will pass your DMV test. Pass rates and scores displayed in the app are estimates based on your practice performance.</p>

          <h2 className="text-xl font-bold text-foreground">4. User Accounts</h2>
          <p>You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate information and to notify us immediately of any unauthorized use of your account.</p>

          <h2 className="text-xl font-bold text-foreground">5. Subscriptions & Payments</h2>
          <p>Some features may require a paid subscription. Subscriptions auto-renew unless cancelled before the renewal date. Refunds are handled in accordance with the policies of the App Store or Google Play.</p>

          <h2 className="text-xl font-bold text-foreground">6. Intellectual Property</h2>
          <p>All content in DMV Pass, including questions, explanations, images, and software, is owned by DMV Pass and protected by copyright and intellectual property laws. You may not reproduce or distribute any content without permission.</p>

          <h2 className="text-xl font-bold text-foreground">7. Prohibited Use</h2>
          <p>You may not use DMV Pass for any unlawful purpose, attempt to reverse-engineer the app, share your account with others, or use automated tools to access the service.</p>

          <h2 className="text-xl font-bold text-foreground">8. Limitation of Liability</h2>
          <p>DMV Pass is provided "as is" without warranties. We are not liable for any damages arising from your use of the app, including but not limited to failure to pass a DMV test.</p>

          <h2 className="text-xl font-bold text-foreground">9. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the app after changes constitutes acceptance of the updated terms.</p>

          <h2 className="text-xl font-bold text-foreground">10. Contact Us</h2>
          <p>For questions about these terms, contact us at <a href="mailto:contact@dmvpass.net" className="text-primary hover:underline">contact@dmvpass.net</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
