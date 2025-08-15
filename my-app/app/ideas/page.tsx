"use client";

import Header from "@/components/personal/header";
import IdeasContainer from "@/components/personal/ideasPage/ideasContainer";
import SideBar from "@/components/personal/mainPage/sideBar";
import { useIdeas } from "@/context/IdeasContext";
import { useToast } from "@/context/toastContext";
import { motion } from "framer-motion";

import Image from "next/image";

export default function IdeasPage() {
  const { ideaArray } = useIdeas();
  const { blurOnOpenIdeaProvider } = useToast();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      className="bg-white w-screen h-screen flex flex-col items-center"
    >
      <Header /> <SideBar />
      <h1 className="text-zinc-500/70 mt-10 text-lg text-center font-semibold my-10 md:text-2xl">
        {ideaArray.length === 0
          ? "Você ainda não possui ideias compartilhadas"
          : "Aqui estão suas ideias"}
      </h1>
      {ideaArray.length === 0 ? (
        <Image
          src="/empty.svg"
          alt=""
          width={400}
          height={400}
          className="my-10 opacity-90"
        />
      ) : (
        ""
      )}
      <IdeasContainer />
      {blurOnOpenIdeaProvider !== null && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />
      )}
    </motion.div>
  );
}
