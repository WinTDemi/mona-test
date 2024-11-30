import { Loading } from "../../components/loading";
import { useFetchDetailProduct } from "../../../application/hooks/product/useFetchDetailProduct";
import { Error } from "../../components/error";

const DetailProductPage = () => {

    // console.log("DetailProductPage component"); // test re-rendering

    // Fetch detail product from hook TanStack
    const { data, isLoading, error } = useFetchDetailProduct();

    return (
        <>
            <Error error={error} />
            <Loading isLoading={isLoading} />
            {data &&
                <div className="container p-4 mx-auto">
                    <h1 className="mb-4 text-2xl font-bold">{data.title}</h1>
                    <div className="flex flex-col gap-4 lg:flex-row">
                        {/* Product Image */}
                        <div className="flex-shrink-0 w-full lg:w-1/2">
                            <img
                                src={data.thumbnail}
                                alt={data.title}
                                className="object-contain w-full h-full shadow-xl rounded-2xl"
                            />
                        </div>

                        {/* Product Details */}
                        <div className="flex flex-col w-full gap-4 lg:w-1/2">
                            <p className="text-lg font-semibold">Category: {data.category}</p>
                            <p className="text-gray-700">{data.description}</p>
                            <p className="text-lg font-bold text-green-600">Price: ${data.price}</p>
                            <p className="text-sm font-semibold text-gray-500">Discount: {data.discountPercentage}%</p>
                            <p className={`text-sm font-semibold ${data.availabilityStatus === 'Low Stock' ? 'text-red-500' : 'text-green-500'}`}>
                                {data.availabilityStatus}
                            </p>

                            {/* Additional Details */}
                            <div className="pt-4 border-t">
                                <p><strong>SKU:</strong> {data.sku}</p>
                                <p><strong>Weight:</strong> {data.weight} grams</p>
                                <p><strong>Dimensions:</strong> {data.dimensions.width} x {data.dimensions.height} x {data.dimensions.depth} cm</p>
                                <p><strong>Warranty:</strong> {data.warrantyInformation}</p>
                                <p><strong>Shipping:</strong> {data.shippingInformation}</p>
                                <p><strong>Return Policy:</strong> {data.returnPolicy}</p>
                                <p><strong>Minimum Order Quantity:</strong> {data.minimumOrderQuantity}</p>
                            </div>

                            {/* Reviews */}
                            <div className="pt-4 border-t">
                                <h3 className="text-lg font-semibold">Reviews</h3>
                                {data.reviews.length > 0 ? (
                                    <ul className="space-y-2">
                                        {data.reviews.map((review, index) => (
                                            <li key={index} className="p-2 border rounded-lg shadow-sm">
                                                <p className="text-sm font-bold">{review.reviewerName} - Rating: {review.rating}</p>
                                                <p className="text-sm italic">{review.comment}</p>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No reviews available.</p>
                                )}
                            </div>

                            {/* Meta Information */}
                            <div className="pt-4 border-t">
                                <p><strong>Barcode:</strong> {data.meta.barcode}</p>
                                <a href={data.meta.qrCode} target="_blank" rel="noopener noreferrer">
                                    <img src={data.meta.qrCode} alt="QR Code" className="w-24 h-24 mt-2" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>}
        </>

    );
};

export default DetailProductPage
