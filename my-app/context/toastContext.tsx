"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ToastContextType = {
  toastProvider: boolean;
  setToastProvider: (name: boolean) => void;
  statusAdviceProvider: boolean;
  setStatusAdviceProvider: (name: boolean) => void;
  blurOnOpenIdeaProvider: number | null;
  setBlurOnOpenIdeaProvider: (name: number | null) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toastProvider, setToastProvider] = useState<boolean>(Boolean);
  const [statusAdviceProvider, setStatusAdviceProvider] =
    useState<boolean>(Boolean);
  const [blurOnOpenIdeaProvider, setBlurOnOpenIdeaProvider] = useState<
    number | null
  >(null);

  return (
    <ToastContext.Provider
      value={{
        toastProvider,
        setToastProvider,
        statusAdviceProvider,
        setStatusAdviceProvider,
        blurOnOpenIdeaProvider,
        setBlurOnOpenIdeaProvider,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast deve ser usado dentro de um ToastProvider");
  }
  return context;
};
