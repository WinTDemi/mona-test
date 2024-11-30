import { Product } from "../../../application/entities/Product";
import { Error } from "../../components/error";
import { Loading } from "../../components/loading";
import ProductCard from "../../components/productCard";
import { useFetchProducts } from "../../../application/hooks/product/useFetchProducts";

const ProductsPage = () => {

    // Fetch products from hook TanStack 
    // error is message error
    const { data, isLoading, error } = useFetchProducts();

    return (
        <>
            <Error error={error} />
            <Loading isLoading={isLoading} />
            {
                data &&
                (<div className="container p-4 mx-auto">
                    <h2 className="mb-4 text-2xl font-bold capitalize">{data.total} products</h2>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {data.products?.map((product: Product) => (
                            <ProductCard key={product.id} product={product} /> // Use ProductCard here
                        ))}
                    </div>
                </div>)
            }

        </>

    )
}

export default ProductsPage