"use client";

import { useContext } from "react";
import { stepsContext } from "@/context/StepsProvider";
import { Button } from "@/styled-components/Button";

import * as SC from "../styled-components/styles";
import { usePathname, useRouter } from "next/navigation";
import { isDisabledButton } from "@/utils/getValidateButton";
import { RiWhatsappFill } from "react-icons/ri";
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2px",
        }}
      >
        <Button
          disabled={isDisabledButton(
            //@ts-ignore
            pathName,
            state.productSelected,
            state.stepOneformValues.address,
            state.stepOneformValues.payMethod
          )}
          onClick={handleClick}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {/*@ts-ignore */}
          {pathName !== "/finalizar-orden" ? "Siguiente" : "Ordenar"}
          {pathName === "/finalizar-orden" && (
            <RiWhatsappFill color="white" size={16} />
          )}
        </Button>
      </div>
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