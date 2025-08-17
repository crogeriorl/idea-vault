"use client";

import { CardDemo } from "@/components/personal/login/form";
import Image from "next/image";
import { Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
export default function Login() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-white ">
      <motion.div
        initial={{ x: -700, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.8 }}
      >
        <h1 className="text-4xl text-purple-700 font-semibold mt-[13%] mb-14 md:text-4xl">
          Idea Vault
        </h1>
      </motion.div>
      <Lightbulb className="text-purple-600" size={45} />

      <motion.div
        initial={{ x: 700, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        className=" md:flex items-center gap-5 shadow-lg rounded-xl p-4 text-xl"
      >
        <CardDemo />
        <Image
          src="/mainIcon.svg"
          alt=""
          width={300}
          height={300}
          className="opacity-80"
        />
      </motion.div>
    </div>
  );
}
