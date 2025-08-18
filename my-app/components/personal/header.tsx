import { Lightbulb } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center w-full px-4 bg-purple-700">
      <div className="flex mt-10 mb-5">
        <h1 className="text-white text-2xl font-semibold">Idea Vault</h1>
        <Lightbulb color="#fff" className="my-2 font-bold" size={25} />
      </div>

      {pathname === "/mainScreen" ? (
        <Link href="/ideas">
          <Button className="bg-purple-700 text-white mr-10 mt-4">
            Minhas ideias
          </Button>
        </Link>
      ) : null}
    </div>
  );
}
