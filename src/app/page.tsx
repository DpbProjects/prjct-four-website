import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center">
      <div className="animate-fadeIn transition-opacity duration-4000 ease-out">
        <Image
          src="https://scontent.cdninstagram.com/v/t51.2885-19/378671285_744613437429644_3338336800182949203_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=S4HLvqyrwGsQ7kNvgH68gUG&edm=APs17CUBAAAA&ccb=7-5&oh=00_AYCgbbe0IoKv4_NzdibfA0-Gelax_ASzboVIT6TCwteM5Q&oe=6649C1B9&_nc_sid=10d13b"
          alt=""
          width={600}
          height={600}
          // className="m-auto"
        />
      </div>
    </main>
  );
}
