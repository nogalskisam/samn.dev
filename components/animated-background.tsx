export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute left-1/3 top-1/4 h-56 w-56 animate-float rounded-full bg-primary/10" />
      <div className="absolute right-1/4 top-1/2 h-64 w-64 animate-float-delay rounded-full bg-secondary/20" />
      <div className="absolute bottom-1/4 left-1/2 h-72 w-72 animate-float-slow rounded-full bg-accent/10" />
    </div>
  );
}
