import { NavLink } from "react-router-dom";
import { routes } from "../../application/constants/constants.routers";
import { queryParams } from "../../application/constants/constants.QueryParams";

const Categories = () => {

    // console.log("Categories component"); // test re-rendering

    // const navigate = useNavigate(); // hook navigate to navigate to another page fillter by category

    const categories = [
        { id: 1, name: "beauty" },
        { id: 2, name: "fragrances" },
        { id: 3, name: "furniture" },
        { id: 4, name: "groceries" },
        { id: 5, name: "home-decoration" },
        { id: 6, name: "kitchen-accessories" },
        { id: 7, name: "laptops" },
        { id: 8, name: "mens-shirts" },
        { id: 9, name: "mens-shoes" },
        { id: 10, name: "mens-watches" },
        { id: 11, name: "mobile-accessories" },
        { id: 12, name: "motorcycle" },
        { id: 13, name: "skin-care" },
        { id: 14, name: "smartphones" },
        { id: 15, name: "sports-accessories" },
        { id: 16, name: "sunglasses" },
        { id: 17, name: "tablets" },
        { id: 18, name: "tops" },
        { id: 19, name: "vehicle" },
        { id: 20, name: "womens-bags" },
        { id: 21, name: "womens-dresses" },
        { id: 22, name: "womens-jewellery" },
        { id: 23, name: "womens-shoes" },
        { id: 24, name: "womens-watches" }
    ];

    return (
        <div className="sidebar-category">
            <div className="px-2 top-10">
                <div className="p-4">
                    <NavLink
                        to={routes.home.path}
                        className={({ isActive }) =>
                            `block w-full p-2 overflow-auto capitalize text-start ${isActive ? "text-gray-800 shadow-lg bg-slate-100" : "text-gray-600 hover:text-gray-800 hover:shadow-lg hover:bg-slate-100"
                            }`
                        }
                    >
                        All products
                    </NavLink>
                </div>
                {categories.map((category) => (
                    <div key={category.id} className="p-4">
                        <NavLink
                            to={`${routes.category.path}?${queryParams.CATEGORY_PRODUCTS}=${category.name}`}
                            className="block w-full p-2 overflow-auto text-gray-600 capitalize text-start hover:text-gray-800 hover:shadow-lg hover:bg-slate-100"
                        >
                            {category.name}
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
}

// export default memo(Categories)
export default Categories // NavLink đã chặn re-rendering nên không cần memo