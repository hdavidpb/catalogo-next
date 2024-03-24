export const isDisabledButton = (
  pathName: string,
  selectedProducts: any[],
  address: string,
  payMethod: string
) => {

  if (pathName === "/catalogo" && selectedProducts.length !== 0){
    return false
  }
   if (pathName === "/catalogo" && selectedProducts.length === 0) {
     return true;
   }
    if (
      (pathName === "/finalizar-orden" && selectedProducts.length === 0) ||
      address === "" ||
      payMethod === ""
    ) {
      return true;
    }
  return false
};