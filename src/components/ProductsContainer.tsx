"use client";
import { useContext } from "react";
import { ProductCard } from ".";
import * as SC from "../styled-components/styles";
import { stepsContext } from "@/context/StepsProvider";
import useValidateSelectedProducts from "@/hooks/useValidateSelectedProducts";
import { ModalProduct } from "./ModalProduct";

export const ProductsContainer = ({ products }: { products: any[] }) => {
  const { state } = useContext(stepsContext);
  const { stepOneProducts } = state;

  useValidateSelectedProducts();





  return (
    <>
      {!!state.selectedImage.trim() && <ModalProduct />}
      <SC.CardsContainer>
        {stepOneProducts.filteredProducts.map((product) => (
          <ProductCard product={product} key={product.nombre} />
        ))}
      </SC.CardsContainer>
    </>
  );
};
