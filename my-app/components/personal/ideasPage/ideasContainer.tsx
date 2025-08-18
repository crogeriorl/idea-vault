"use client";

import { useIdeas } from "@/context/IdeasContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lightbulb, Trash2 } from "lucide-react";
import { CircleDot } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import StatusInBox from "./statusInBox";
import { useToast } from "@/context/toastContext";
import { motion, AnimatePresence } from "framer-motion";
import { AlertDialogDemo } from "../mainPage/alert";

export default function IdeasContainer() {
  const { ideaArray, setIdeaArray } = useIdeas();
  const { setBlurOnOpenIdeaProvider } = useToast();
  const [openIdeaIndex, setOpenIdeaIndex] = useState<number | null>(null);

  const cardRef = useRef<HTMLDivElement>(null);

  const [statusInBoxExists, setStatusInBoxExists] = useState<number | null>(
    null
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setOpenIdeaIndex(null);
        setBlurOnOpenIdeaProvider(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpenIdeaIndex, setBlurOnOpenIdeaProvider]);

  const RemoveIdeaBox = (id: number) => {
    setIdeaArray(ideaArray.filter((_, index) => index !== id));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {ideaArray.map((idea, index) => (
          <div
            key={index}
            className="w-[330px] mb-4 z-50"
            ref={openIdeaIndex === index ? cardRef : null}
          >
            <Card
              className={` ${
                idea.status === "No Cofre" ? "bg-zinc-300" : "bg-white"
              } text-zinc-400 border-none shadow-lmd z-50 ${
                openIdeaIndex === index ? "absolute  w-[330px] shadow-2xl" : ""
              }`}
            >
              {openIdeaIndex === index ? (
                <>
                  <CardHeader>
                    <Lightbulb size={38} className="text-purple-600" />
                    <CardTitle className="text-2xl text-purple-500">
                      {idea.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-sm text-zinc-500 font-semibold">
                        Um pouco sobre o projeto:
                      </p>
                      <CardDescription>{idea.description}</CardDescription>
                    </div>
                    <p className="text-md text-zinc-500 font-semibold">
                      Categoria:
                      <span className="text-purple-600 font-semibold mx-2">
                        {idea.type}
                      </span>
                    </p>
                    <div
                      className={`w-[190px] flex items-center gap-1 my-4 cursor-pointer ${
                        idea.status === "No Cofre"
                          ? "bg-transparent border-2 border-zinc-200"
                          : idea.status === "Pendente"
                          ? "bg-red-400"
                          : "bg-green-400"
                      } text-white p-2 rounded-lg`}
                      onClick={() => setStatusInBoxExists(index)}
                    >
                      <CircleDot size={20} />
                      <span>{idea.status}</span>
                    </div>

                    {statusInBoxExists === index ? (
                      <StatusInBox
                        click={() => setStatusInBoxExists(null)}
                        ideaIndex={index}
                      />
                    ) : null}

                    <span className="text-sm">
                      Essa ideia foi criada em {idea.createdAt}
                    </span>
                  </CardContent>
                </>
              ) : (
                <>
                  <CardHeader>
                    <div className="flex justify-between ">
                      <CardTitle className="text-2xl text-purple-500">
                        {idea.title}
                      </CardTitle>
                      <div className=" flex flex-col justify-center gap-2 text-purple-600 font-semibold">
                        <button
                          onClick={() => {
                            setOpenIdeaIndex(index);
                            setBlurOnOpenIdeaProvider(index);
                          }}
                        >
                          Ver mais
                        </button>
                        <AlertDialogDemo click={() => RemoveIdeaBox(index)} />
                      </div>
                    </div>
                  </CardHeader>
                </>
              )}
            </Card>
          </div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
