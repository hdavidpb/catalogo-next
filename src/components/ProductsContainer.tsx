'use client'
import { useContext, useEffect } from "react";
import { ProductCard } from ".";
import * as SC from "../styled-components/styles"
import { stepsContext } from "@/context/StepsProvider";
import useValidateSelectedProducts from "@/hooks/useValidateSelectedProducts";
import { getProductsData } from "@/context/stepReducer/actions";
import { ModalProduct } from "./ModalProduct";

export const ProductsContainer = ({products}:{products:any[]}) => {
  const { state, dispatch } = useContext(stepsContext);
  const { stepOneProducts } = state;
  useValidateSelectedProducts();

useEffect(() => {
  if(stepOneProducts.products.length === 0){
    dispatch(getProductsData(products));
  }
}, [stepOneProducts.products]);

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
}
