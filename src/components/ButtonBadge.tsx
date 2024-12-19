"use client";
import React from "react";
import * as SC from "../styled-components/styles";
import { FaCartShopping } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export const ButtonBadge = ({ productsCount }: { productsCount: number }) => {

    const router = useRouter()
    const handleNavigate = ()=>{
        router.push("/formulario-de-orden")
    }

  return (
    <SC.ButtonShopBadgeContainer onClick={handleNavigate}>
      <FaCartShopping color="#000000" />
      <SC.ShopBadgeContainer>
        <span>{productsCount}</span>
      </SC.ShopBadgeContainer>
    </SC.ButtonShopBadgeContainer>
  );
};
