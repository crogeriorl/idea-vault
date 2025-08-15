"use client";

import { Card, CardContent, CardDescription, CardTitle } from "../../ui/card";
import { CircleCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Toast() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="absolute"
      //lembre de colocar estilização de posicionamento e alinhamento também na div da animação (caso haja)
    >
      <Card className="w-[300px] bg-white border-zinc-200 shadow-md relative top-5 left-[50%] translate-x-[-50%]">
        <CardContent>
          <div className="flex gap-1 p-2 items-center justify-center">
            <CardTitle className="text-zinc-500 ">
              Ideia adicionada com sucesso!
            </CardTitle>
            <CircleCheck color="green" />
          </div>

          <CardDescription>
            Para achar suas ideias clique no botão ao lado escrito Minhas ideias
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}
