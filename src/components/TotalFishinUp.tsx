'use-client'

import useGetDetailsInfo from "@/hooks/useGetDetailsInfo";
import * as SC from "../styled-components/styles";

export const TotalFishinUp = () => {
  const { finishinTotal } = useGetDetailsInfo();
  return (
    <SC.TotalContainer>
      <span>TOTAL</span>
      <h3>{finishinTotal.total}</h3>
    </SC.TotalContainer>
  );
};
