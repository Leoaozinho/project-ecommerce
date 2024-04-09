import { ProductType } from "../../../types/ProductType";
import ProductImage from "./productImage";
import { formatPrice } from "@/lib/utils";
import AddCart from "./addCart";

type ProductProps = {
    product: ProductType;
}

// Componente para exibir um produto
export default function Product({ product }: ProductProps) {
    return (
        // Container principal do produto
        <div className='flex flex-col shadow-lg h-96 bg-slate-800 p-5 text-gray-300'>
            {/* Container para a imagem do produto */}
            <div className='relative max-h-72 flex-1'>
                {/* Componente para exibir a imagem do produto */}
                <ProductImage product={product} fill />
            </div>
            {/* Container para o nome e preço do produto */}
            <div className='flex justify-between font-bold my-3'>
                {/* Parágrafo para o nome do produto */}
                <p className='w-40 truncate'>
                    {/* Nome do produto */}
                    {product.name}
                </p>
                {/* Parágrafo para o preço do produto */}
                <p className='text-md text-orange-400'>
                    {/* Preço do produto */}
                    {formatPrice(product.price)}
                </p>
            </div>
            {/* Componente para adicionar o produto ao carrinho */}
            <AddCart product={product} />
        </div>
    );
}
