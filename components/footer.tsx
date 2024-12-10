import { Logo } from "./logo";

const Footer = () => (
  <footer className="py-6 md:py-0">
    <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
      <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
        <Logo />
        <p className="text-center text-sm leading-loose text-muted-foreground">
          Built by samn.dev. All rights reserved.
        </p>
        <p className="text-center text-sm leading-loose text-muted-foreground">
          Company number 16116652
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
