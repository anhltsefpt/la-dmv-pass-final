import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronDown, Loader2, AlertTriangle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useSEO from "@/hooks/useSEO";

const STATE_DATA: Record<string, { name: string; abbr: string; file?: string }> = {
  alabama:        { name: "Alabama",        abbr: "AL", file: "AL-Handbook" },
  alaska:         { name: "Alaska",         abbr: "AK" },
  arizona:        { name: "Arizona",        abbr: "AZ" },
  arkansas:       { name: "Arkansas",       abbr: "AR" },
  california:     { name: "California",     abbr: "CA" },
  colorado:       { name: "Colorado",       abbr: "CO" },
  connecticut:    { name: "Connecticut",    abbr: "CT" },
  delaware:       { name: "Delaware",       abbr: "DE" },
  florida:        { name: "Florida",        abbr: "FL" },
  georgia:        { name: "Georgia",        abbr: "GA" },
  hawaii:         { name: "Hawaii",         abbr: "HI" },
  idaho:          { name: "Idaho",          abbr: "ID" },
  illinois:       { name: "Illinois",       abbr: "IL" },
  indiana:        { name: "Indiana",        abbr: "IN" },
  iowa:           { name: "Iowa",           abbr: "IA" },
  kansas:         { name: "Kansas",         abbr: "KS" },
  kentucky:       { name: "Kentucky",       abbr: "KY" },
  louisiana:      { name: "Louisiana",      abbr: "LA" },
  maine:          { name: "Maine",          abbr: "ME" },
  maryland:       { name: "Maryland",       abbr: "MD" },
  massachusetts:  { name: "Massachusetts",  abbr: "MA" },
  michigan:       { name: "Michigan",       abbr: "MI" },
  minnesota:      { name: "Minnesota",      abbr: "MN" },
  mississippi:    { name: "Mississippi",    abbr: "MS" },
  missouri:       { name: "Missouri",       abbr: "MO" },
  montana:        { name: "Montana",        abbr: "MT" },
  nebraska:       { name: "Nebraska",       abbr: "NE" },
  nevada:         { name: "Nevada",         abbr: "NV" },
  "new-hampshire":{ name: "New Hampshire",  abbr: "NH" },
  "new-jersey":   { name: "New Jersey",     abbr: "NJ" },
  "new-mexico":   { name: "New Mexico",     abbr: "NM" },
  "new-york":     { name: "New York",       abbr: "NY" },
  "north-carolina":{ name: "North Carolina",abbr: "NC" },
  "north-dakota": { name: "North Dakota",   abbr: "ND" },
  ohio:           { name: "Ohio",           abbr: "OH" },
  oklahoma:       { name: "Oklahoma",       abbr: "OK" },
  oregon:         { name: "Oregon",         abbr: "OR" },
  pennsylvania:   { name: "Pennsylvania",   abbr: "PA" },
  "rhode-island": { name: "Rhode Island",   abbr: "RI" },
  "south-carolina":{ name: "South Carolina",abbr: "SC" },
  "south-dakota": { name: "South Dakota",   abbr: "SD" },
  tennessee:      { name: "Tennessee",      abbr: "TN" },
  texas:          { name: "Texas",          abbr: "TX" },
  utah:           { name: "Utah",           abbr: "UT" },
  vermont:        { name: "Vermont",        abbr: "VT" },
  virginia:       { name: "Virginia",       abbr: "VA" },
  washington:     { name: "Washington",     abbr: "WA" },
  "west-virginia":{ name: "West Virginia",  abbr: "WV" },
  wisconsin:      { name: "Wisconsin",      abbr: "WI" },
  wyoming:        { name: "Wyoming",        abbr: "WY" },
};

const STATE_SLUGS = Object.keys(STATE_DATA);

const Handbook = () => {
  const { state } = useParams<{ state: string }>();
  const navigate = useNavigate();
  const stateData = state ? STATE_DATA[state] : null;

  const [pdfStatus, setPdfStatus] = useState<"loading" | "ready" | "error">("loading");
  const pdfSrc = stateData
    ? `/handbooks/${stateData.file ?? `${stateData.abbr}_Handbook`}.pdf`
    : null;

  // Reset to loading whenever the state changes
  useEffect(() => {
    if (stateData) setPdfStatus("loading");
  }, [state]);

  const seoTitle = stateData
    ? `${stateData.name} Driver Handbook 2026 | DMV Pass`
    : "Driver Handbook | DMV Pass";

  const seoDescription = stateData
    ? `Read the official ${stateData.name} driver handbook online. Study ${stateData.name} DMV rules, road signs, and traffic laws to pass your permit test on the first try.`
    : "Browse official driver handbooks for all 50 US states. Study DMV rules and traffic laws with DMV Pass.";

  const seoCanonical = stateData
    ? `https://dmvpass.app/handbook/${state}`
    : "https://dmvpass.app/handbook";

  const schema = stateData
    ? {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: `${stateData.name} Driver Handbook`,
        description: seoDescription,
        url: seoCanonical,
        publisher: {
          "@type": "Organization",
          name: "DMV Pass",
          url: "https://dmvpass.app",
          logo: "https://dmvpass.app/logo3.png",
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://dmvpass.app" },
            { "@type": "ListItem", position: 2, name: "Handbook", item: "https://dmvpass.app/handbook" },
            { "@type": "ListItem", position: 3, name: stateData.name, item: seoCanonical },
          ],
        },
      }
    : undefined;

  useSEO({ title: seoTitle, description: seoDescription, canonical: seoCanonical, schema });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="border-b border-border px-4 sm:px-6 py-4 flex items-center gap-4 flex-wrap">
        <Link to="/" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ChevronLeft className="w-4 h-4" />
          Home
        </Link>

        <h1 className="text-lg font-bold text-foreground flex-1">
          {stateData ? `${stateData.name} Driver Handbook` : "Driver Handbook"}
        </h1>

        {/* State switcher */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium hover:bg-accent transition-colors outline-none">
            {stateData ? stateData.name : "Select State"}
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="max-h-80 overflow-y-auto w-52" align="end">
            {STATE_SLUGS.map((slug) => (
              <DropdownMenuItem
                key={slug}
                className={slug === state ? "bg-accent font-semibold" : ""}
                onSelect={() => navigate(`/handbook/${slug}`)}
              >
                {STATE_DATA[slug].name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1 relative">

        {/* State not found */}
        {!stateData && (
          <div className="flex flex-col items-center justify-center h-96 text-muted-foreground gap-3">
            <AlertTriangle className="w-10 h-10 text-destructive" />
            <p className="text-lg font-medium text-foreground">Handbook not found</p>
            <p className="text-sm">The requested state handbook could not be found.</p>
            <Link to="/" className="mt-2 text-primary hover:underline text-sm">Return home</Link>
          </div>
        )}

        {/* Loading spinner — shown while iframe is loading */}
        {stateData && pdfStatus === "loading" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">
              Loading {stateData.name} Driver Handbook…
            </p>
          </div>
        )}

        {/* PDF load error */}
        {stateData && pdfStatus === "error" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background text-muted-foreground">
            <AlertTriangle className="w-10 h-10 text-destructive" />
            <p className="text-lg font-medium text-foreground">Could not load the handbook</p>
            <p className="text-sm">The {stateData.name} handbook file may be missing or unavailable.</p>
            <Link to="/" className="mt-2 text-primary hover:underline text-sm">Return home</Link>
          </div>
        )}

        {/* The actual PDF iframe */}
        {stateData && pdfSrc && (
          <iframe
            key={pdfSrc}
            src={pdfSrc}
            title={`${stateData.name} Driver Handbook`}
            className="w-full h-full"
            style={{
              minHeight: "calc(100vh - 61px)",
              visibility: pdfStatus === "ready" ? "visible" : "hidden",
            }}
            onLoad={() => setPdfStatus("ready")}
            onError={() => setPdfStatus("error")}
          />
        )}
      </div>
    </div>
  );
};

export default Handbook;
