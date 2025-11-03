import products from "../data/product";
import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
export default function Home() {
    return (
        <div className="home-container">

            <PageHeading title="Explore Eazy Stickers!">
                Add a touch of creativity to your world with our vibrant stickers. Perfect for any occasion!
            </PageHeading>
            <ProductListings products={products} />
        </div>
    );
}