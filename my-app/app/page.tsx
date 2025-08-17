"use client";

import { Lightbulb } from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Start() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/login");
    }, 3000);
  });
  return (
    <div className="flex justify-center w-screen h-screen bg-white">
      <Lightbulb
        size={45}
        color="purple"
        className={` transition-all duration-1000 mt-32`}
      />
    </div>
  );
}
