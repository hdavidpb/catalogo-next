'use client'
import { useContext } from "react";
import { stepsContext } from "@/context/StepsProvider";
import { Product } from "@/context/interfaces";
import { increaseBy, unSelectProduct, selectOrUnselectProduct, selectedImage } from "@/context/stepReducer/actions";
import { parsePrice } from "@/utils/parsePrice";
import * as SC from "../styled-components/styles";
import Image from "next/image";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const { isSelected, imagen, nombre, precio, count } = product;
  const { dispatch } = useContext(stepsContext);

  const handleIncreaseBy = (increaseNumber: number) => {
    dispatch(increaseBy(nombre, increaseNumber));
    if (count === 1 && increaseNumber === -1) {
      dispatch(unSelectProduct(nombre));
      return;
    }

    dispatch(selectOrUnselectProduct(nombre));
  };
const handleViewImage = ()=>dispatch(selectedImage(imagen))
  return (
    <SC.ProductCard isSelected={isSelected! && count !== 0} key={nombre}>
      {count !== 0 && (
        <SC.SelectedCount>
          <h1>{count}</h1>
        </SC.SelectedCount>
      )}
      <SC.Img src={imagen} alt={nombre} width={250} height={100} onClick={handleViewImage} />
      <SC.CardDescription>
        <h4>{nombre}</h4>
        <span>{parsePrice(precio)}</span>
      </SC.CardDescription>
      <SC.CardFooter>
        <button disabled={count === 0} onClick={() => handleIncreaseBy(-1)}>
          -
        </button>
        <span>{count}</span>
        <button onClick={() => handleIncreaseBy(1)}>+</button>
      </SC.CardFooter>
    </SC.ProductCard>
  );
};
