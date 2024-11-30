import { ProductsRes } from "../../../presentation/pages/products/types/Product.Res";
import { searchProducts } from "../../APIs/apiProducts/getProducts";
import { useFetch } from "../common/useFetch";

export const useFetchSearchProduct = (input: string) => {
    // Get products by TanStack Query 
    return useFetch<ProductsRes>('search', input, searchProducts);
};