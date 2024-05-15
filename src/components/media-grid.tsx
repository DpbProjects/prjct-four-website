import Image from "next/image";

import { client } from "@/lib/pexels";

export default async function MediaGrid() {
  const imageUrls = [
    "https://source.unsplash.com/random/500x500",
    "https://source.unsplash.com/random/600x600",
    "https://source.unsplash.com/random/700x700",
    "https://source.unsplash.com/random/800x800",
    "https://source.unsplash.com/random/900x900",
    "https://source.unsplash.com/random/1000x1000",
    "https://source.unsplash.com/random/1100x1100",
    "https://source.unsplash.com/random/1200x1200",
    "https://source.unsplash.com/random/1300x1300",
    "https://source.unsplash.com/random/1400x1400",
    "https://source.unsplash.com/random/1500x1500",
    "https://source.unsplash.com/random/1600x1600",
    "https://source.unsplash.com/random/1700x1700",
    "https://source.unsplash.com/random/1800x1800",
    "https://source.unsplash.com/random/1900x1900",
  ];

  const imageUrlsTwo = [
    "https://picsum.photos/500/500",
    "https://picsum.photos/600/600",
    "https://picsum.photos/700/700",
    "https://picsum.photos/800/800",
    "https://picsum.photos/900/900",
    "https://picsum.photos/1000/1000",
    "https://picsum.photos/1100/1100",
    "https://picsum.photos/1200/1200",
    "https://picsum.photos/1300/1300",
    "https://picsum.photos/1400/1400",
    "https://picsum.photos/1500/1500",
    "https://picsum.photos/1600/1600",
    "https://picsum.photos/1700/1700",
    "https://picsum.photos/1800/1800",
    "https://picsum.photos/1900/1900",
  ];

  return (
    <section className="py-16 w-full m-auto px-3">
      <h1 className=" text-2xl font-bold text-center mb-6">Projects</h1>

      {/* One */}

      <video width={"100%"} autoPlay loop muted className=" py-3">
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" />
      </video>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {imageUrls.map((photo, i) => {
          return (
            <div key={i}>
              <Image src={photo} alt="" width={600} height={600} />
            </div>
          );
        })}
      </div>

      {/* Two */}

      <video width={"100%"} autoPlay loop muted className=" py-3">
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4" />
      </video>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {imageUrlsTwo.map((photo, i) => {
          return (
            <div key={i}>
              <Image src={photo} alt="" width={600} height={600} />
            </div>
          );
        })}
      </div>

      {/* <pre>{JSON.stringify(photos, null, 2)}</pre> */}
    </section>
  );
}
