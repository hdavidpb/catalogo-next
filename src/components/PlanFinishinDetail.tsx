'use-client'
import { useContext, useEffect, useState } from "react";


import * as SC from "../styled-components/styles";
import { stepsContext } from "@/context/StepsProvider";
import { editProductOrder } from "@/context/stepReducer/actions";
import { parsePrice } from "@/utils/parsePrice";
import Link from "next/link";
import { Product } from "@/context/interfaces";
import { noRepeatProducts } from "@/utils/getNoRepeatProducts";

export const PlanFinishinDetail = () => {
  const [finalProducts, setFinalProducts] = useState <Product[]>([]);
  const { state, dispatch } = useContext(stepsContext);

  const { productSelected ,stepOneformValues} = state;
  const {payMethod,description,address} = stepOneformValues


useEffect(()=>{
  setFinalProducts(noRepeatProducts(productSelected));
},[])
  return (
    <SC.FinishingDetailCard>
      {finalProducts.map((plan) => (
        <SC.OrderDescriptionContainer key={plan.nombre}>
          <h3>{plan.count}</h3>
          <p>{plan.nombre}</p>
          <h3>{parsePrice(plan.precio * plan.count)}</h3>
        </SC.OrderDescriptionContainer>
      ))}
      <SC.OrderDescription>
        <span>
          <strong>Método de pago: </strong>
          {payMethod}.
        </span>
        <span>
          <strong>Dirección: </strong>
          {address}.
        </span>
        <span>
          <strong>Descripción: </strong>
          {description}.
        </span>
      </SC.OrderDescription>
      <Link href="/catalogo" onClick={() => dispatch(editProductOrder())}>
        Editar orden
      </Link>
    </SC.FinishingDetailCard>
  );
};
