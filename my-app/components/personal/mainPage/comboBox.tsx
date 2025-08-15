"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useIdeas } from "@/context/IdeasContext";

const IdeaTypes = [
  { value: "Tecnologia", label: "Tecnologia" },
  { value: "Saúde", label: "Saúde" },
  { value: "Educação", label: "Educação" },
  { value: "Negócios", label: "Negócios" },
  { value: "Meio ambiente", label: "Meio Ambiente" },
  { value: "Arte & Design", label: "Arte & Design" },
  { value: "Ciência", label: "Ciência" },
  { value: "Inovação Social", label: "Inovação Social" },
  { value: "esportes", label: "Esportes" },
  { value: "Esportes", label: "Gastronomia" },
  { value: "Entretenimento", label: "Entretenimento" },
  { value: "Transporte & Mobilidade", label: "Transporte & Mobilidade" },
  { value: "Finanças", label: "Finanças & Investimentos" },
  { value: "Comunicação & Mídia", label: "Comunicação & Mídia" },
];

export function ComboboxDemo() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const { setIdeaTypeProvider } = useIdeas();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        asChild
        className="bg-white text-zinc-500 border-zinc-200 my-5"
      >
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? IdeaTypes.find((framework) => framework.value === value)?.label
            : "Selecionar categoria"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Selecione uma categoria" className="h-9" />
          <CommandList>
            <CommandEmpty>Categoria não encontrada.</CommandEmpty>
            <CommandGroup>
              {IdeaTypes.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    const newValue = currentValue === value ? "" : currentValue;
                    setValue(newValue);
                    setIdeaTypeProvider(newValue); // usa o valor já selecionado
                    setOpen(false);
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
