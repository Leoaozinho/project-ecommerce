import { ProductType } from "../../types/ProductType";
import Product from "./components/product";

async function getProducts() {
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();
  return products;
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className='max-w-7xl mx-auto pt-8 px-8 xl:px-0'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols4 gap-10 xl:gap-6
      '>
        {products.map((product: ProductType) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
    
  );
}
