import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useIdeas } from "@/context/IdeasContext";

export default function Status() {
  const [status, setStatus] = useState("em Desenvolvimento");
  const { setIdeaStatusProvider } = useIdeas();
  return (
    <div>
      <Label className="text-zinc-500 text-md font-semibold">Status</Label>
      <RadioGroup
        className="flex gap-3 justify-center my-2"
        value={status}
        onValueChange={(value) => {
          setStatus(value);
          setIdeaStatusProvider(value);
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
    </div>
  );
}
