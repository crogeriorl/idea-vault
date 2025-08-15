import { X } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { useIdeas } from "@/context/IdeasContext";
import { motion } from "framer-motion";
type ModalProps = {
  click: () => void;
  ideaIndex: number;
};

export default function StatusInBox({ click, ideaIndex }: ModalProps) {
  const { ideaArray, setIdeaArray } = useIdeas();

  const initialStatus = ideaArray[ideaIndex]?.status || "";
  const [status, setStatus] = useState(initialStatus);

  function handleConfirm() {
    setIdeaArray((prev) =>
      prev.map((idea, id) => (id === ideaIndex ? { ...idea, status } : idea))
    );
    click(); // fecha o modal
  }
  return (
    <motion.div
      className="shadow-lg p-1 rounded-lg absolute top-[84%] bg-white"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 92 }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div>
        <X
          className="absolute right-1 cursor-pointer"
          size={13}
          onClick={click}
        />
        <Label className="text-zinc-500 text-md font-semibold">Status</Label>
        <RadioGroup
          className="flex gap-3 justify-center my-2"
          value={status}
          onValueChange={(value) => {
            setStatus(value);
          }}
        >
          <div className="flex items-center gap-1 text-zinc-400">
            <RadioGroupItem
              value="Pendente"
              className=" data-[state=checked]:border-purple-700 border-2"
            />
            <Label className="text-sm">Pendente</Label>
          </div>
          <div className="flex items-center gap-1 text-zinc-400">
            <RadioGroupItem
              value="Em Desenvolvimento"
              className=" data-[state=checked]:border-purple-700 border-2"
            />
            <Label className="text-sm">Em Dev</Label>
          </div>
          <div className="flex gap-1 items-center text-zinc-400">
            <RadioGroupItem
              value="No Cofre"
              className=" data-[state=checked]:border-purple-700 border-2"
            />
            <Label className="text-sm">No Cofre</Label>
          </div>
        </RadioGroup>
        <button
          className="bg-purple-600 text-white text-xs font-semibold p-1 rounded-md"
          onClick={handleConfirm}
        >
          Confirmar
        </button>
      </div>
    </motion.div>
  );
}
