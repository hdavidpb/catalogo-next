import {
  FECTH_LOADING,
  CHANGE_PRODUCTS_ORDER,
  CHANGE_STEP_ONE_FORM_VALUE,
  GENERATE_WAPP_TEXT,
  GET_PRODUCTS_DATA,
  GO_BACK,
  INCREASE_BY,
  IS_INVALID,
  IS_VALID,
  NEXT_STEP,
  SELECT_PRODUCT,
  GO_TO_STEP,
  UNSELECT_PRODUCT,
  SELECT_CATEGORY,
  FILTER_BY_CATEGORY_TYPE,
  FECTH_SUCCESS,
  SELECT_PRODUCT_IMAGE
} from "./types";
import { Product } from "../interfaces";

export const nextStep = (step: number = 1) => ({
  type: NEXT_STEP,
  payload: step,
});
export const goToStep = (step: number) => ({
  type: GO_TO_STEP,
  payload: step,
});
export const goBack = () => ({ type: GO_BACK, payload: -1 });

export const changeStepOneValue = (name: string, value: string) => ({
  type: CHANGE_STEP_ONE_FORM_VALUE,
  payload: {
    name,
    value,
  },
});

export const isValidStep = (index: number) => ({
  type: IS_VALID,
  payload: index,
});

export const isInValid = (index: number) => ({
  type: IS_INVALID,
  payload: index,
});

export const setValidStep = (isValid: boolean, index: number) => {
  if (isValid) return isValidStep(index);
  return isInValid(index);
};

export const selectOrUnselectProduct = (productTitle: string) => ({
  type: SELECT_PRODUCT,
  payload: productTitle,
});
export const unSelectProduct = (productTitle: string) => ({
  type: UNSELECT_PRODUCT,
  payload: productTitle,
});

export const increaseBy = (productName: string, increaseNumber: number) => {
  return {
    type: INCREASE_BY,
    payload: {
      increaseNumber,
      productName,
    },
  };
};

export const editProductOrder = () => ({
  type: CHANGE_PRODUCTS_ORDER,
  payload: 0,
});

export const generateWappText = (text: string) => ({
  type: GENERATE_WAPP_TEXT,
  payload: text,
});

export const getProductsData = (data: Product[]) => ({
  type: GET_PRODUCTS_DATA,
  payload: data,
});

export const fetchLoading = () => ({
  type: FECTH_LOADING,
  payload: true,
});

export const fetchSuccess = () => ({
  type: FECTH_SUCCESS,
  payload: false,
});

export const selectCategory = (categoryName: string) => ({
  type: SELECT_CATEGORY,
  payload: categoryName,
});
export const filterByCategorytype = (categoryName: string) => ({
  type: FILTER_BY_CATEGORY_TYPE,
  payload: categoryName,
});

export const selectedImage = (image: string) => ({
  type: SELECT_PRODUCT_IMAGE,
  payload:image
});