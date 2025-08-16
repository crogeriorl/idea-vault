//funcao para controlar a persistencia de algum component ou elemento entre páginas
import React from "react";
import SideBar from "../personal/mainPage/sideBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Persists = ({ children }: LayoutProps) => {
  return (
    <>
      {children}
      <SideBar />
    </>
  );
};

export default Persists;

//ao ativar o componente abaixo de children, ao chamá-o na screen ele irá persistir nela
