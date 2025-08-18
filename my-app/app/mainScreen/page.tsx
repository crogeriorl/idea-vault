"use client";

import Image from "next/image";
import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import Modal from "@/components/personal/mainPage/modal";

import { useState } from "react";
import Header from "@/components/personal/header";
import Toast from "@/components/personal/mainPage/toast";
import { CarouselDemo } from "@/components/personal/mainPage/carouselStatus";
import { useToast } from "@/context/toastContext";
import { motion, AnimatePresence } from "framer-motion";
import SideBar from "@/components/personal/mainPage/sideBar";
import Footer from "@/components/personal/footer";

export default function Home() {
  const { nickName } = useUser();

  //condiçao de existencia do carrossel que explica cada status
  const { toastProvider, statusAdviceProvider } = useToast();
  //condçao de existencia do modal
  const [modalExists, setModalExists] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      className=" min-h-screen flex flex-col items-center  bg-white
      "
    >
      <div className="w-full">
        <Header /> <SideBar />
      </div>

      <div className="flex gap-1 mt-10 mb-5">
        <h1 className="text-purple-700 text-4xl font-semibold lg:text-5xl">
          Idea Vault
        </h1>
        <Lightbulb color="#8968cd" className="my-2 font-bold" size={33} />
      </div>
      <h2 className="text-zinc-600 font-semibold text-md md:text-xl">
        Olá, {nickName}, seja bem vindo ao Idea Vault!
      </h2>
      <div className=" md:flex justify-center items-center gap-2">
        <h3 className="text-sm md:text-lg w-[250px] text-purple-700/80  m-3 font-semibold  lg:text-xl">
          Esse projeto foi pensado para você que quer tirar suas ideias do papel
          e colocá-las em prática, desenvolvê-las ou até mesmo manter os
          principais conceitos dela guardados para um futuro próximo. Comece já!
        </h3>

        <Image
          src="/Thinking.svg"
          width={250}
          height={250}
          alt=""
          className="mx-auto"
        />
      </div>
      <Button
        className="bg-purple-700 text-white my-10 lg:p-5"
        onClick={() => setModalExists(true)}
      >
        Começar
      </Button>
      <h2 className="text-purple-700 font-semibold text-2xl mx-5 mt-[20%] md:mt-[10%] lg:text-4xl">
        Por que tirar as ideias do papél é tão importante?
      </h2>
      <Image
        src="/undraw_ideas_vn7a.svg"
        width={250}
        height={250}
        alt=""
        className="lg:w-[300px] my-5"
      />
      <p className="font-semibold text-md mx-6 my-10 text-zinc-700/80 md:text-lg max-w-2xl ">
        Tirar as ideias do papel é o primeiro passo para transformá-las em algo
        real e palpável. É nesse momento que você deixa de sonhar e começa a
        construir, gerando impacto de verdade. Cada tentativa traz aprendizado,
        novas habilidades e experiências que só a prática oferece. Além disso,
        validar uma ideia na vida real mostra se ela realmente funciona e onde
        pode melhorar. No fim, projetos realizados se tornam conquistas,
        motivação e até oportunidades para o futuro.
      </p>
      <AnimatePresence>
        {modalExists && <Modal click={() => setModalExists(false)} />}
      </AnimatePresence>
      {statusAdviceProvider && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />
      )}
      {statusAdviceProvider && <CarouselDemo />}
      <AnimatePresence>
        {toastProvider && <Toast key="toast-id-unico" />}
      </AnimatePresence>

      <Footer />
    </motion.div>
  );
}
