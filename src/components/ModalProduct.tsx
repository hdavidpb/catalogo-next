import { useContext } from "react";

import {Overlay,Modal} from "../styled-components/styles"
import { selectedImage } from "@/context/stepReducer/actions";
import { stepsContext } from "@/context/StepsProvider";


export const ModalProduct = () => {
   const { state ,dispatch} = useContext(stepsContext);
  return (
    <Overlay onClick={() => dispatch(selectedImage(""))}>
      <Modal>
        <button>X</button>
        <img src={state.selectedImage} alt="Imagen completa" />
      </Modal>
    </Overlay>
  );
}
