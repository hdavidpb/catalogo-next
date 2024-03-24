'use client'

import useValidateFinishingOrder from "@/hooks/useValidateFinishingOrder";
import * as SC from "../../styled-components/styles";
import { PlanFinishinDetail } from "@/components/PlanFinishinDetail";
import { TotalFishinUp } from "@/components/TotalFishinUp";

export default function FinishingOrderPage  () {
  useValidateFinishingOrder();
  return (
      <>
    <SC.FieldsContainer>
      <SC.FinishinUpContainer>
        <SC.FinishingDetailsContainer>
          <PlanFinishinDetail />
        </SC.FinishingDetailsContainer>
        <TotalFishinUp />
      </SC.FinishinUpContainer>
    </SC.FieldsContainer>

      </>
  );
};
