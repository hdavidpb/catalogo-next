'use client'

import StepsProvider from "@/context/StepsProvider";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import * as SC from "../styled-components/styles"

export const SideBarLayout = ({ children }: { children:React.ReactNode }) => {
  const pathname = usePathname()
  return (
    <SC.StepFormContainer>
      <SC.SideStepContainer
        bg="/bg-sidebar-desktop.svg"
        responsiveBg="/bg-sidebar-mobile.svg"
      >
        {sidebarOptions.map(({ index, caption, href }) => (
          <Link href={href} key={caption} style={{width:"100%",textDecoration:"none"}}>
            <SC.StepContainer isStep={pathname === href}>
              <p>{index}</p>
              <SC.StepDetialContainer>
                <span>{`PASO ${index}`}</span>
                <h5>{caption}</h5>
              </SC.StepDetialContainer>
            </SC.StepContainer>
          </Link>
        ))}
      </SC.SideStepContainer>
      <StepsProvider>{children}</StepsProvider>
    </SC.StepFormContainer>
  );
};
const sidebarOptions = [
  { index: 1, caption: "SELECCIONA TU ORDEN", href: "/catalogo" },
  { index: 2, caption: "REGISTRA TUS DATOS", href: "/formulario-de-orden" },
  { index: 3, caption: "FINALIZA TU ORDEN", href: "/finalizar-orden" },
];