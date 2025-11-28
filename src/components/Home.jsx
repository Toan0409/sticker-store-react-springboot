import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import apiClient from "../api/apiClient";
import { useLoaderData } from "react-router-dom";

// Hooks
export default function Home() {
    const products = useLoaderData();
    return (
        <div className="max-w-[1152px] mx-auto px-6 py-8 ">
            <PageHeading title="Welcome to Our Store" >
                Add a touch of creativity to your space with our wide range of fun and
                unique stickers. Perfect for any occasion!
            </PageHeading>
            <ProductListings products={products} />
        </div>
    )
}

export async function productsLoader() {
    try {
        const response = await apiClient.get('/products');
        return response.data;
    } catch (error) {
        throw new Response(
            error.message || "Failed to load products. Please try again later.",
            { status: error.status || 500 }
        );
    }
}