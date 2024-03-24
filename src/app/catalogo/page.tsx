import { createProductsAdapter } from "@/adapters/adapters";
import * as SC from "../../styled-components/styles";
import { FilterSection } from "@/components";
import { ProductsContainer } from "@/components/ProductsContainer";

const generateCatalogo = async () => {
  const URL = process.env.URL_API!;
    const catalogo = await fetch(URL,
      { next: { revalidate: 60 } }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const products = createProductsAdapter(data);
        return products;
      });

    return catalogo;
};

export default async function CatalogoPage() {
  const products = await generateCatalogo();

  return (
    <>
      <FilterSection />
      <SC.FieldsContainer>
        <ProductsContainer products={products} />
      </SC.FieldsContainer>
      
    </>
  );
}
