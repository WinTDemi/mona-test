import { NavLink } from "react-router-dom";
import { Product } from "../../application/entities/Product";
import { routes } from "../../application/constants/constants.routers";
import { queryParams } from "../../application/constants/constants.QueryParams";

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <NavLink
            to={`${routes.detail.path}?${queryParams.DETAIL_PRODUCT_ID}=${product.id}`}
            className="flex flex-col h-full p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl"
        >
            <img
                src={product.thumbnail}
                alt={product.title}
                loading="lazy"
                className="object-contain w-full h-48 rounded-t-lg"
            />
            <div className="flex flex-col justify-between flex-grow">
                <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
                <div className="flex items-center justify-between mt-2">
                    <p className="font-bold">${product.price}</p>
                    <p className="text-green-500">{product.availabilityStatus}</p>
                </div>
            </div>
        </NavLink>
    );
};

export default ProductCard;
