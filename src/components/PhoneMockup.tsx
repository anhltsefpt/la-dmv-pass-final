const PhoneMockup = () => {
  return (
    <div className="relative mx-auto w-[280px] h-[560px] rounded-[3rem] border-[8px] border-foreground/90 bg-background shadow-2xl overflow-hidden">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-foreground/90 rounded-b-2xl z-10" />
      
      {/* Screen Content */}
      <div className="h-full w-full bg-background pt-8 px-4 pb-4 flex flex-col">
        {/* Status bar */}
        <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
          <span className="font-semibold">9:41</span>
          <div className="flex gap-1">
            <div className="w-4 h-2 rounded-sm bg-muted-foreground/40" />
            <div className="w-4 h-2 rounded-sm bg-muted-foreground/40" />
            <div className="w-6 h-3 rounded-sm border border-muted-foreground/40 relative">
              <div className="absolute inset-[2px] right-1 bg-primary rounded-sm" />
            </div>
          </div>
        </div>

        {/* App header */}
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground text-sm font-bold">✓</span>
          </div>
          <span className="font-bold text-sm text-foreground">DMV Pass</span>
        </div>

        {/* Pass probability card */}
        <div className="bg-primary/10 rounded-2xl p-4 mb-4">
          <p className="text-xs text-muted-foreground mb-1">Pass Probability</p>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-extrabold text-primary">94%</span>
            <span className="text-xs text-primary font-medium mb-1">↑ Ready!</span>
          </div>
          <div className="w-full h-2 bg-primary/20 rounded-full mt-2">
            <div className="w-[94%] h-full bg-primary rounded-full" />
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-accent rounded-xl p-3">
            <div className="w-6 h-6 rounded-md bg-primary/20 flex items-center justify-center mb-2">
              <span className="text-primary text-xs">📝</span>
            </div>
            <p className="text-xs font-semibold text-foreground">Practice Test</p>
            <p className="text-[10px] text-muted-foreground">25 questions</p>
          </div>
          <div className="bg-accent rounded-xl p-3">
            <div className="w-6 h-6 rounded-md bg-primary/20 flex items-center justify-center mb-2">
              <span className="text-primary text-xs">🎯</span>
            </div>
            <p className="text-xs font-semibold text-foreground">Weak Areas</p>
            <p className="text-[10px] text-muted-foreground">3 topics</p>
          </div>
        </div>

        {/* Recent activity */}
        <div className="flex-1">
          <p className="text-xs font-semibold text-foreground mb-2">Recent</p>
          {["Road Signs", "Right of Way", "Parking Rules"].map((topic, i) => (
            <div key={topic} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-[8px] text-primary font-bold">{[92, 78, 85][i]}%</span>
                </div>
                <span className="text-xs text-foreground">{topic}</span>
              </div>
              <span className="text-[10px] text-muted-foreground">{["2m ago", "1h ago", "Today"][i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
