"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import useLocalStorage from "@/components/saveData/useLocalStorage";

// Define o formato de uma ideia
type Idea = {
  title: string;
  description: string;
  status: string;
  type: string;
  createdAt: string;
};

// Interface do contexto, garantindo que todas as propriedades do 'value' sejam tipadas
type IdeasContextType = {
  titleIdeaProvider: string | null;
  setTitleIdeaProvider: (name: string | null) => void;
  ideaDescriptionProvider: string | null;
  setIdeaDescriptionProvider: (name: string | null) => void;
  ideaTypeProvider: string;
  setIdeaTypeProvider: React.Dispatch<React.SetStateAction<string>>;
  ideaStatusProvider: string;
  setIdeaStatusProvider: (name: string) => void;
  startDateProvider: Date | undefined;
  setStartDateProvider: (date: Date | undefined) => void;
  ideaArray: Idea[];
  setIdeaArray: React.Dispatch<React.SetStateAction<Idea[]>>;
};

const ideasContext = createContext<IdeasContextType | undefined>(undefined);

export const IdeasProvider = ({ children }: { children: ReactNode }) => {
  const [titleIdeaProvider, setTitleIdeaProvider] = useState<string | null>(
    null
  );
  const [ideaDescriptionProvider, setIdeaDescriptionProvider] = useState<
    string | null
  >(null);
  const [ideaTypeProvider, setIdeaTypeProvider] = useState("");
  const [ideaStatusProvider, setIdeaStatusProvider] = useState("");
  const [startDateProvider, setStartDateProvider] = useState<Date | undefined>(
    undefined
  );

  const [ideaArray, setIdeaArray] = useLocalStorage<Idea[]>("ideas", []) as [
    Idea[],
    React.Dispatch<React.SetStateAction<Idea[]>>
  ];

  return (
    <ideasContext.Provider
      value={{
        titleIdeaProvider,
        setTitleIdeaProvider,
        ideaDescriptionProvider,
        setIdeaDescriptionProvider,
        ideaTypeProvider,
        setIdeaTypeProvider,
        ideaStatusProvider,
        setIdeaStatusProvider,
        startDateProvider,
        setStartDateProvider,
        ideaArray,
        setIdeaArray,
      }}
    >
      {children}
    </ideasContext.Provider>
  );
};

export const useIdeas = () => {
  const context = useContext(ideasContext);
  if (!context) {
    // A mensagem de erro aponta para 'UserProvider' mas o contexto é 'IdeasProvider'
    // Considere mudar a mensagem para ser mais precisa
    throw new Error("useIdeas deve ser usado dentro de um IdeasProvider");
  }
  return context;
};
