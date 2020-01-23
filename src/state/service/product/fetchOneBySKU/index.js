import { dummyProducts } from "../../../../data";

function fetchOneProductBySKUService(sku) {
  return new Promise(resolve =>
    setTimeout(
      () => resolve(dummyProducts.find(product => product.sku === sku)),
      1000
    )
  );
}

export { fetchOneProductBySKUService };
