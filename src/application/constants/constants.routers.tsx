import ProductsPage from '../../presentation/pages/products/productsPage';
import DetailProductPage from '../../presentation/pages/detailProduct/detailProductPage';

interface Route {
    [key: string]: {
        name: string;
        path: string;
        element?: JSX.Element;
    }
}

export const routes: Route = {

    // route for home page
    home: {
        name: 'home',
        path: '/',
        element: <ProductsPage />
    },

    // route for detail product page
    detail: {
        name: 'detail',
        path: '/detail',
        element: <DetailProductPage />
    },

    // route for category products page
    category: {
        name: 'category',
        path: '/category',
        element: <ProductsPage />
    },

    // route for products for api
    products: {
        name: 'products',
        path: '/products',
    },
};
