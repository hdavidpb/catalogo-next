"use client";
import { useContext, useEffect, useMemo } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { ProductCard } from ".";
import * as SC from "../styled-components/styles";
import { stepsContext } from "@/context/StepsProvider";
import useValidateSelectedProducts from "@/hooks/useValidateSelectedProducts";
import { getProductsData } from "@/context/stepReducer/actions";
import { ModalProduct } from "./ModalProduct";
import { ButtonBadge } from "./ButtonBadge";

export const ProductsContainer = ({ products }: { products: any[] }) => {
  const { state, dispatch } = useContext(stepsContext);
  const { stepOneProducts } = state;
  useValidateSelectedProducts();

  useEffect(() => {
    if (stepOneProducts.products.length === 0) {
      dispatch(getProductsData(products));
    }
  }, [stepOneProducts.products]);

  const productsCount = useMemo(() => {
    return state.productSelected.reduce((acc, el) => {
      return acc + el.count;
    }, 0);
  }, [state.productSelected]);

  return (
    <>
      {!!state.selectedImage.trim() && <ModalProduct />}
      <SC.CardsContainer>
        {stepOneProducts.filteredProducts.map((product) => (
          <ProductCard product={product} key={product.nombre} />
        ))}

        {state.productSelected.length > 0 && (
          <ButtonBadge productsCount={productsCount} />
        )}
      </SC.CardsContainer>
    </>
  );
};
