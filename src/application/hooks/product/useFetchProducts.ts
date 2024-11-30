import { getProducts } from "../../APIs/apiProducts/getProducts";
import { queryParams } from "../../constants/constants.QueryParams";
import { useFetch } from "../common/useFetch";
import { ProductsRes } from '../../../presentation/pages/products/types/Product.Res';
import { getQueryParamFromLocation } from "../../utilities/getQueryParamFromLocation";
import { CategoryProductsReq } from "../../../presentation/pages/products/types/Product.Req";

export const useFetchProducts = () => {
    // product list is all when category is empty
    // product list is filtered by category when category is not empty
    const category = getQueryParamFromLocation<CategoryProductsReq>(queryParams.CATEGORY_PRODUCTS);
    // Get products by TanStack Query 
    return useFetch<ProductsRes>('products', category, getProducts);
};