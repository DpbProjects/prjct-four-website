import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white text-white py-4">
      <div className=" mx-auto flex flex-col justify-between items-center">
        <Image
          src="https://scontent.cdninstagram.com/v/t51.2885-19/378671285_744613437429644_3338336800182949203_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=S4HLvqyrwGsQ7kNvgH68gUG&edm=APs17CUBAAAA&ccb=7-5&oh=00_AYCgbbe0IoKv4_NzdibfA0-Gelax_ASzboVIT6TCwteM5Q&oe=6649C1B9&_nc_sid=10d13b"
          alt=""
          width={300}
          height={300}
        />
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-300 text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300 text-black">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
