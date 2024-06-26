import Stripe from "stripe";
import { ProductType } from "../../types/ProductType";
import Product from "./components/product";
import { API_VERSION } from "@clerk/nextjs/server";

async function getProducts(): Promise<ProductType[]> {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion:'2023-10-16'
  });

  const products = await stripe.products.list();
  const formatedProducts = await Promise.all(
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({
        product: product.id,
        active: true,
      });

      return {
        id: product.id,
        price: prices.data[0].unit_amount,
        name: product.name,
        image: product.images[0],
        description: product.description,
        currency: prices.data[0].currency,
      };
    })
  );

  return formatedProducts.map((product) => ({
    ...product,
    title: product.name,
  }));
}
export default async function Home() {
  const products = await getProducts();

  return (
    <div className='max-w-7xl mx-auto pt-8 px-8 xl:px-0'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols4 gap-10 xl:gap-6
      '>
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
    
  );
}
