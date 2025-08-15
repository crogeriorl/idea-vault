"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

export function CardDemo() {
  const [username, setUsername] = useState("");
  const [nickName, setNickname] = useState("");
  const { setUsernameProvider, setNickNameProvider } = useUser();
  const [advice, setAdvice] = useState("");
  const router = useRouter();

  const SubmitUser = () => {
    if (username.trim() === "") {
      setAdvice("Preencha o campo acima para prosseguir");
    } else {
      setUsernameProvider(username);
      setNickNameProvider(nickName);
      setAdvice("");
      setTimeout(() => {
        router.push("/mainScreen");
      }, 2000);
    }
  };
  return (
    <Card className="w-[310px] bg-white border-none shadow-md my-10">
      <CardHeader>
        <CardTitle className="text-purple-700">Vamos Começar?</CardTitle>
        <CardDescription>Digite abaixo</CardDescription>
      </CardHeader>
      <CardContent>
        <Input
          placeholder="Seu Nome"
          className="mb-7 border-purple-600 border-2 text-zinc-400 text-sm"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="Seu Apelido"
          className="mb-7 border-purple-600 border-2 text-zinc-400 text-sm"
          value={nickName}
          onChange={(e) => setNickname(e.target.value)}
        />
        <span className="text-red-400 text-sm font-semibold">{advice}</span>{" "}
        <br />
        <Button className="my-5 bg-purple-700 text-white" onClick={SubmitUser}>
          Submit
        </Button>
      </CardContent>
    </Card>
  );
}
