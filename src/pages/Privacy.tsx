import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import useSEO from "@/hooks/useSEO";

const Privacy = () => {
  useSEO({
    title: "Privacy Policy | DMV Pass",
    description: "Learn how DMV Pass collects, uses, and protects your personal information when you use our DMV test prep app.",
    canonical: "https://dmvpass.app/privacy",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Privacy Policy",
      url: "https://dmvpass.app/privacy",
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
        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-8">Privacy Policy</h1>
        <div className="prose prose-muted-foreground max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm">Last updated: March 20, 2026</p>

          <h2 className="text-xl font-bold text-foreground">1. Information We Collect</h2>
          <p>We collect information you provide directly, such as your name, email address, and study progress when you create an account and use DMV Pass. We also collect usage data including test scores, practice session duration, and feature interactions to improve our adaptive learning system.</p>

          <h2 className="text-xl font-bold text-foreground">2. How We Use Your Information</h2>
          <p>Your information is used to personalize your learning experience, calculate your pass probability score, adapt practice questions to your weak areas, and improve our services. We do not sell your personal information to third parties.</p>

          <h2 className="text-xl font-bold text-foreground">3. Data Storage & Security</h2>
          <p>We use industry-standard encryption and security measures to protect your data. Your study progress and personal information are stored securely on our servers and are only accessible to authorized personnel.</p>

          <h2 className="text-xl font-bold text-foreground">4. Third-Party Services</h2>
          <p>We may use third-party analytics and crash-reporting tools to improve app performance. These services may collect anonymized usage data in accordance with their own privacy policies.</p>

          <h2 className="text-xl font-bold text-foreground">5. Your Rights</h2>
          <p>You have the right to access, update, or delete your personal information at any time. You can request a copy of your data or account deletion by contacting our support team.</p>

          <h2 className="text-xl font-bold text-foreground">6. Children's Privacy</h2>
          <p>DMV Pass is intended for users who are of legal age to obtain a learner's permit in their state. We do not knowingly collect information from children under 13.</p>

          <h2 className="text-xl font-bold text-foreground">7. Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify you of significant changes through the app or via email.</p>

          <h2 className="text-xl font-bold text-foreground">8. Contact Us</h2>
          <p>If you have questions about this privacy policy, please contact us at <a href="mailto:contact@dmvpass.net" className="text-primary hover:underline">contact@dmvpass.net</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
