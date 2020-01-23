import { dummyProducts } from "../../../../data";

function fetchAllProductsService() {
  return new Promise(resolve => setTimeout(() => resolve(dummyProducts), 1000));
}

export { fetchAllProductsService };
