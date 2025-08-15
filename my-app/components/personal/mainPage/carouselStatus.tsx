import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { X } from "lucide-react";
import Image from "next/image";

import { useToast } from "@/context/toastContext";

export function CarouselDemo() {
  const { setStatusAdviceProvider } = useToast();
  return (
    <Carousel className=" max-w-xs w-[330px]  absolute top-[30%] right-[50%] translate-x-[50%] z-40 ">
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
            <div>
              <Card className="bg-white border-none   h-[530px]">
                <button
                  className=" rounded-md ml-[92%] mt-2 text-zinc-500"
                  onClick={() => setStatusAdviceProvider(false)}
                >
                  <X size={17} />
                </button>
                <CardTitle className="text-purple-600 text-xl text-center my-3">
                  {index === 0 ? "Pendente" : ""}
                  {index === 1 ? "Em desenvolvimento" : ""}
                  {index === 2 ? "No Cofre" : ""}
                </CardTitle>
                {index === 0 ? (
                  <Image
                    src="/completed.svg"
                    width={150}
                    height={150}
                    alt=""
                    className="lg:w-[300px] mx-auto"
                  />
                ) : null}
                {index === 1 ? (
                  <Image
                    src="/development.svg"
                    width={150}
                    height={150}
                    alt=""
                    className="lg:w-[300px] mx-auto"
                  />
                ) : null}
                {index === 2 ? (
                  <Image
                    src="/archived.svg"
                    width={159}
                    height={150}
                    alt=""
                    className="lg:w-[300px] mx-auto"
                  />
                ) : null}
                <CardContent className="flex aspect-square items-center justify-center p-6 ">
                  <CardDescription>
                    {index === 0
                      ? "Ao marcar seu status da ideia como Pendente, significa que você ainda não iniciou esse projeto, que ele provavelmente ainda está no rascunho ou na fase inicial, que muito em breve irá para o status de desenvolvimento!"
                      : index === 1
                      ? "Ao marcar esse status, como o próprio nome diz, seu projeto está desenvolvimento. E bom, acho que essa parte não tem muita explicação. Apenas colocar a mão na massa!"
                      : index === 2
                      ? "Ao marcar esse status, você verá uma cor diferente em seu card, significa que por algum motivo seu projeto precisou dar um tempo e vai precisar esperar um pouco, seja por alguma outra prioridade do momento, seja por simplesmente não se identificar mais com ele. Mas lembre-se que sempre que quiser, ele estará lá e você poderá alterá-lo para outro status!"
                      : ""}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
