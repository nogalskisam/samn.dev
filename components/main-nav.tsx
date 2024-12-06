import Link from "next/link";
import { Button } from "@/components/ui/button";

export function MainNav() {
  return (
    <nav className="flex items-center space-x-4">
      <Button variant="link" asChild>
        <Link href="/posts">Posts</Link>
      </Button>
      <Button variant="link" asChild>
        <Link href="/services">Services</Link>
      </Button>
      <Button variant="link" asChild>
        <Link href="/contact">Contact</Link>
      </Button>
    </nav>
  );
}
