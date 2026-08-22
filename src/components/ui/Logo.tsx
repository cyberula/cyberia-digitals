import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center justify-center">
      <Image
        src="/assets/234013230.png"
        alt="Cyberia Digitals"
        width={240}
        height={60}
        priority
        className="hover:opacity-90 transition-opacity"
      />
    </Link>
  );
}
