import Link from "next/link";
import { Button } from "./ui/button";
import { MainNav } from "./main-nav";
import { ThemeToggle } from "./theme-toggle";
import { Logo } from "./logo";

const Header = () => (
  <header className="container flex h-14 items-center">
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center space-x-2">
        <Logo />
        <Button variant="link" asChild>
          <Link className="font-bold no-underline" href="/">
            samn.dev
          </Link>
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <MainNav />
        <ThemeToggle />
      </div>
    </div>
  </header>
);

export default Header;
