'use-client'
import { useContext } from "react";


import * as SC from "../styled-components/styles";
import { stepsContext } from "@/context/StepsProvider";
import { editProductOrder } from "@/context/stepReducer/actions";
import { parsePrice } from "@/utils/parsePrice";
import Link from "next/link";

export const PlanFinishinDetail = () => {
  const { state, dispatch } = useContext(stepsContext);

  const { productSelected ,stepOneformValues} = state;
  const {payMethod,description,address} = stepOneformValues

  return (
    <SC.FinishingDetailCard>
      {productSelected.map((plan) => (
        <SC.OrderDescriptionContainer key={plan.nombre}>
          <h3>{plan.count}</h3>
          <p>{plan.nombre}</p>
          <h3>{parsePrice(plan.precio * plan.count)}</h3>
        </SC.OrderDescriptionContainer>
      ))}
      <SC.OrderDescription >
        <span>
          <strong>Método de pago: </strong>
          {payMethod}
        </span>
        <span>
          <strong>Dirección: </strong>
          {address}
        </span>
        <span>
          <strong>Descripción: </strong>
          {description}
        </span>
      </SC.OrderDescription>
      <Link href="/catalogo" onClick={() => dispatch(editProductOrder())}>
        Editar orden
      </Link>
    </SC.FinishingDetailCard>
  );
};
