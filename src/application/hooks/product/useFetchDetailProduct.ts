import { getProductDetail } from "../../APIs/apiProducts/getProducts";
import { queryParams } from "../../constants/constants.QueryParams";
import { useFetch } from "../common/useFetch";
import { getQueryParamFromLocation } from "../../utilities/getQueryParamFromLocation";
import { ProductIDDetailReq } from "../../../presentation/pages/detailProduct/types/ProductDetail.Req";
import { Product } from "../../entities/Product";

export const useFetchDetailProduct = () => {
    // Get the product ID from query string
    const productId = getQueryParamFromLocation<ProductIDDetailReq>(queryParams.DETAIL_PRODUCT_ID);
    // get products by TanStack Query 
    return useFetch<Product>('detail', productId, getProductDetail);
};