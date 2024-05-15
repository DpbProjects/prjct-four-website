import Link from "next/link";

import Image from "next/image";

import MediaGrid from "@/components/media-grid";

export default function Home() {
  return (
    <main>
      <div className="pt-9 text-center">
        <h1 className=" text-2xl font-bold text-center">Projects</h1>
      </div>
      <MediaGrid />
    </main>
  );
}
