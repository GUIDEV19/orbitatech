import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-[100] flex items-center justify-between bg-gradient-to-b from-black/95 to-transparent px-6 py-[18px] backdrop-blur-sm md:px-[60px]">
      <Link href="/" className="flex items-center gap-3 no-underline">
        <div className="relative size-10 shrink-0 overflow-hidden">
          <Image
            src="/Minha logo.png"
            alt=""
            width={200}
            height={200}
            priority
            className="absolute top-0 left-1/2 h-[118%] w-auto max-w-none -translate-x-1/2"
          />
        </div>
        <div className="font-heading text-[1.6rem] font-bold tracking-[2px] text-white">
          orbita<span className="text-orbita-blue-bright">Tech</span>
        </div>
      </Link>

      <ul className="hidden list-none items-center gap-9 md:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-heading text-[0.95rem] font-semibold tracking-[1.5px] text-orbita-silver uppercase transition-colors hover:text-orbita-blue-bright"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Button
        nativeButton={false}
        render={<Link href="#cta" />}
        variant="outline"
        className={cn(
          "h-auto rounded px-[26px] py-2.5 font-heading text-[0.9rem] font-bold tracking-[1.5px] uppercase",
          "border-orbita-blue-bright bg-transparent text-orbita-blue-bright",
          "hover:bg-orbita-blue-bright hover:text-black",
        )}
      >
        Fale Conosco
      </Button>
    </nav>
  );
}
