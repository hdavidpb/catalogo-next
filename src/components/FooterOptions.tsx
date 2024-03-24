"use client";

import { useContext } from "react";
import { stepsContext } from "@/context/StepsProvider";
import { Button } from "@/styled-components/Button";

import * as SC from "../styled-components/styles";
import { usePathname, useRouter } from "next/navigation";
import { isDisabledButton } from "@/utils/getValidateButton";
export const FooterOptions = () => {
  const { state } = useContext(stepsContext);
  const { wappText } = state;
  const router = useRouter();
  const pathName = usePathname() as string;
  const handleClick = () => {
    if(pathName === "/finalizar-orden"){
      window.open(
        `https://api.whatsapp.com/send?phone=+${
          process.env.NEXT_PUBLIC_PHONE_NUMBER
        }&text=${encodeURIComponent(wappText)}`
      );
     return
    }
//@ts-ignore
     router.push(paths[pathName.slice(1)].pathNamePush ?? "/");
  };
  return (
    <SC.FooterOptions>
      <Button
        disabled={isDisabledButton(
          //@ts-ignore
          pathName,
          state.productSelected,
          state.stepOneformValues.address,
          state.stepOneformValues.payMethod
        )}
        onClick={handleClick}
      >
        {/*@ts-ignore */}
        {pathName !== "/finalizar-orden"? "Siguiente":"Ordenar"}
      </Button>
    </SC.FooterOptions>
  );
};



export const paths: PathsObject = {
  catalogo: {
    pathNamePush: "/formulario-de-orden",
  },
  "formulario-de-orden": {
    pathNamePush: "/finalizar-orden",
   
  },

};


export interface PathsObject {
  catalogo: Catalogo;
  "formulario-de-orden": Catalogo;
}

export interface Catalogo {
  pathNamePush:string;
}