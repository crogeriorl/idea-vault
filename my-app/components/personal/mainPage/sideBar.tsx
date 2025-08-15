import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { User } from "lucide-react";
import { Pencil } from "lucide-react";
import Image from "next/image";

import { useIdeas } from "@/context/IdeasContext";
import { useUser } from "@/context/UserContext";
import { useState } from "react";

export default function SideBar() {
  const { ideaArray } = useIdeas();
  const { username, nickName, setNickNameProvider } = useUser();
  const [isClicked, setIsClicked] = useState(true);
  const [nickNameInput, setNickNameInput] = useState("");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className=" text-white/85 absolute top-12 right-4">
          <User size={25} />
        </button>
      </SheetTrigger>
      <SheetContent className="bg-white">
        <SheetHeader>
          <SheetTitle className="text-purple-600">Seu perfil</SheetTitle>
          <SheetDescription>
            Aqui você pode fazer a alteração de seu nome caso queira, e também
            consegue ver quantas ideias voce tem no momento.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3 my-5">
            <Label htmlFor="sheet-demo-name" className="text-zinc-400">
              Seu Nome
            </Label>

            <span className="border-none shadow-sm text-zinc-400 text-sm p-2 rounded-md">
              {username}
            </span>
            <Label htmlFor="sheet-demo-name" className="text-zinc-400">
              Seu apelido
            </Label>

            {isClicked ? (
              <div
                className="relative w-full border-none shadow-sm text-zinc-400 text-sm p-2 rounded-md"
                onClick={() => setIsClicked(false)}
              >
                <span>{nickName}</span>
                <Pencil
                  color="#af69ee"
                  className="absolute top-1 right-2 cursor-pointer"
                  size={17}
                />
              </div>
            ) : (
              <Input
                className="border-none shadow-sm text-zinc-300 text-sm"
                placeholder="Seu apelido"
                value={nickNameInput}
                onChange={(e) => setNickNameInput(e.target.value)}
              />
            )}

            <Button
              type="submit"
              className="w-1/3 bg-purple-600 text-whtie"
              onClick={() => {
                setIsClicked(true);
                setNickNameInput(nickName);
                setNickNameProvider(nickNameInput);
              }}
            >
              Salvar
            </Button>
          </div>
          <div className="grid gap-3">
            <span className="text-zinc-400 text-sm">
              O seu total de projetos criados até agora foram:
            </span>

            <span className="text-purple-600 text-5xl font-bold mx-auto">
              {ideaArray.length}
            </span>
          </div>
        </div>
        <SheetFooter>
          <p className="text-sm text-zinc-400  my-5">
            Não tenha medo de criar novas ideias e tirá-las do papel, pense alto
            e deixe sua criatividade trabalhar! Lembre-se que um dia elas podem
            ser uma contribuição para o mundo!
          </p>{" "}
        </SheetFooter>
        <Image
          src="/undraw_solution-mindset_pit7.svg"
          alt=""
          width={300}
          height={300}
        />
      </SheetContent>
    </Sheet>
  );
}
