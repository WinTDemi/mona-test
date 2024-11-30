import { ProductIDDetailReq } from "../../../presentation/pages/detailProduct/types/ProductDetail.Req";
import { CategoryProductsReq } from "../../../presentation/pages/products/types/Product.Req";
import { ProductsRes } from "../../../presentation/pages/products/types/Product.Res";
import { requestAPI } from "../../connectAPI/requestAPI";
import { routes } from "../../constants/constants.routers";
import { Product } from "../../entities/Product";

// get list products by category or all
export const getProducts = async (categoryProducts?: CategoryProductsReq): Promise<ProductsRes> => {

    const response = await requestAPI<ProductsRes>({
        path: categoryProducts ? `${routes.products.path}${routes.category.path}/${categoryProducts}` : routes.products.path,
        method: 'GET',
    });

    // throw error if no products found
    // if (response.products.length === 0) {
    //     throw new Error(categoryProducts ? `No products found in ${categoryProducts} category` : 'No products found');
    // }
    // không có sản phẩm không phải lỗi nên không cần throw error 

    return response;
};

// get detail product by id
export const getProductDetail = async (productID: ProductIDDetailReq): Promise<Product> => {

    if (!productID) {
        throw new Error('Product ID not found in query parameters');
    }

    const response = await requestAPI<Product>({
        path: routes.products.path + `/${productID}`,
        method: 'GET',
    });

    return response
}