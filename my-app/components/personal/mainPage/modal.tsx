import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";
import { ComboboxDemo } from "./comboBox";
import { useIdeas } from "@/context/IdeasContext";
import { useToast } from "@/context/toastContext";
import { useState } from "react";
import Status from "./status";
import { motion } from "framer-motion";

type ModalProps = {
  click: () => void; // função que não retorna nada
};

export default function Modal({ click }: ModalProps) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputAdvice, setInputAdvice] = useState("");

  const {
    ideaTypeProvider,
    ideaStatusProvider,
    setTitleIdeaProvider,
    setIdeaDescriptionProvider,
    setIdeaArray,
  } = useIdeas();

  const { setToastProvider, setStatusAdviceProvider } = useToast();

  const formattedDateTime = new Date().toLocaleString("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  });

  const CreateIdeaBox = () => {
    if (inputDescription.trim() === "" || inputTitle.trim() === "") {
      setInputAdvice("Preencha todos os campos");
    } else {
      setInputAdvice("");
      setInputTitle("");
      setInputDescription("");

      setTitleIdeaProvider(inputTitle);
      setIdeaDescriptionProvider(inputDescription);

      setIdeaArray((prev) => [
        ...prev,
        {
          title: inputTitle,
          description: inputDescription,
          type: ideaTypeProvider,
          status: ideaStatusProvider,
          createdAt: formattedDateTime,
        },
      ]);

      setToastProvider(true);
      setTimeout(() => {
        setToastProvider(false);
      }, 2600);

      click();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.3 }}
      className=" flex absolute top-[20%] items-center justify-center z-40"
    >
      <Card className=" w-[330px]   bg-white border-none shadow-lg shadow-zinc-400">
        <button className="text-zinc-500 ml-[94%]" onClick={click}>
          <X size={15} />
        </button>
        <CardHeader>
          <CardTitle className="text-zinc-500 text-lg">
            Compartilhe sua ideia
          </CardTitle>
          <CardDescription>
            Nos conte um pouco sobre sua ideia, você poderá dar um título a ela,
            uma descrição do que achar importante saber, a categoria dela e
            também uma marcação do status atual do projeto!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Label className="text-zinc-500 text-md">Título</Label>
          <Input
            placeholder="De um titulo à sua ideia"
            className="border-zinc-200 my-3 text-sm text-zinc-400"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
          />
          <Label className="text-zinc-500 text-md">Detalhes da ideia</Label>
          <Textarea
            placeholder="Descreve com mais detalhes como voce gostaria de seu projeto"
            className="border-zinc-200 my-3 text-sm text-zinc-400"
            value={inputDescription}
            onChange={(e) => setInputDescription(e.target.value)}
          />
          <ComboboxDemo /> <br />
          <Status />
          <button
            className="text-sm text-zinc-400 mt-5 cursor-pointer hover:underline"
            onClick={() => setStatusAdviceProvider(true)}
          >
            Para que serve cada um desses Status?
          </button>{" "}
          <br />
          <span className="text-sm text-red-400 font-semibold">
            {inputAdvice}
          </span>{" "}
          <br />
          <Button
            className="bg-purple-600 text-white my-6 hover:text-purple-600"
            onClick={CreateIdeaBox}
          >
            Salvar
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
