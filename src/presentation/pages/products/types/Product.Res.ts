import { Product } from "../../../../application/entities/Product";

// Interface for the response of products
export interface ProductsRes {
    products: Product[]; // Array of products
    total: number; // Total number of products
    skip: number; // Number of products skipped
    limit: number; // Maximum number of products to return
}