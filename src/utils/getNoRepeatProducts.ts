import { Product } from "@/context/interfaces";

export const noRepeatProducts = (productSelected:Product[]) => {
  let noRepeatArr: Product[] = [];
  let productName = "";
  productSelected.forEach((product) => {
    if (!productName.includes(product.nombre)) {
      productName = product.nombre;
      noRepeatArr.push(product);
    }
  });
  return noRepeatArr;
};
