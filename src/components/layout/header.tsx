"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();

  return (
    <header className="py-4 px-4 w-full">
      <nav>
        <ul className="flex justify-between items-center space-x-4">
          <li>
            <Link
              href="/contact"
              className="hover:text-gray-300 text-black font-medium"
            >
              WHO WE ARE
            </Link>
          </li>
          {path !== "/" ? (
            <li>
              <Link href="/" className="hover:text-gray-300 text-black">
                Home
              </Link>
            </li>
          ) : null}
          <li>
            <Link
              href="/projects"
              className="hover:text-gray-300 text-black font-medium"
            >
              PROJECTS
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
