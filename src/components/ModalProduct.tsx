'use client'

import { useContext } from "react";

import {Overlay,Modal} from "../styled-components/styles"
import { selectedImage } from "@/context/stepReducer/actions";
import { stepsContext } from "@/context/StepsProvider";
import Image from "next/image";


export const ModalProduct = () => {
   const { state ,dispatch} = useContext(stepsContext);
  return (
    <Overlay onClick={() => dispatch(selectedImage(""))} >
      <Modal>
        <button>X</button>
        <Image src={state.selectedImage} alt="Imagen completa" width={350} height={500}/>
      </Modal>
    </Overlay>
  );
}
