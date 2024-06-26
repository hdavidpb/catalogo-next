'use client'

import React, { createContext, useReducer } from "react";

import { StepsContextType } from "./interfaces";
import { initialState, stepReducer } from "./stepReducer/reducer";

export const stepsContext = createContext<StepsContextType>({
  state: initialState,
  dispatch: () => {},
});

const StepsProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(stepReducer, initialState);

  return (
    <stepsContext.Provider value={{ state, dispatch }}>
      {children}
    </stepsContext.Provider>
  );
};

export default StepsProvider;
