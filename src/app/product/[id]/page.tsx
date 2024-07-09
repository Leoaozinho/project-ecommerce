import React, { useEffect, useState } from 'react';
import Stripe from 'stripe';
import { ProductType } from '../../../../types/ProductType';
import Image from 'next/image';
import { formatPrice } from '@/lib/utils';

// Função assíncrona para obter detalhes do produto com base em seu ID
async function getProduct(id: string) {
    // Cria uma nova instância do Stripe com a chave secreta
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: '2023-10-16', // Versão da API do Stripe
    });

    try {
        // Obtém os detalhes do produto do Stripe usando o ID fornecido
        const product = await stripe.products.retrieve(id);

        // Obtém o preço do produto do Stripe usando o ID do produto
        const price = await stripe.prices.list({
            product: product.id // Lista de preços associados ao produto
        });

        // Retorna um objeto contendo detalhes do produto
        return {
            id: product.id, // ID do produto
            price: price.data[0].unit_amount, // Preço do produto (em centavos)
            name: product.name, // Nome do produto
            image: product.images[0], // URL da imagem do produto
            description: product.description, // Descrição do produto
            currency: price.data[0].currency // Moeda do preço do produto
        };
    } catch (error) {
        // Em caso de erro, retorna null
        console.error("Erro ao obter detalhes do produto:", error);
        return null;
    }
}

// Interface para definir os tipos de props esperados pelo componente ProductPage
interface ProductPageProps {
    params: {
        id: string; // O ID do produto é uma string
    };
}

// Componente funcional ProductPage que recebe um ID de produto como parâmetro
const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
    const { id } = params; // Extrai o ID do objeto de parâmetros
    const [product, setProduct] = useState<any>(null); // Estado para armazenar detalhes do produto

    // Função para carregar os detalhes do produto ao montar o componente
    useEffect(() => {
        const fetchProduct = async () => {
            const productDetails = await getProduct(id);
            setProduct(productDetails);
        };
        fetchProduct();
    }, [id]);

    // Se não houver detalhes do produto, exibe uma mensagem de carregamento
    if (!product) {
        return <div>Carregando...</div>;
    }

    // Retorna um elemento JSX que exibe os detalhes do produto
    return (
        <div className='flex flex-col md:flex-rol items-center max-w-7xl mx-auto gap-8 p-10'>
            <div className='flex flex-col'>
            <h1 className='text-2xl font-bold'>{product.name}</h1>
            <h2 className='text-xl text-blue-600 font-bold'>{formatPrice(product.price)}</h2>
            </div>
            <div>
            <p>Preço: {product.price} {product.currency}</p>
            </div>
            <div>
            <Image src={product.image} alt={product.name} width={500} height={500} />
            </div>
            <p>{product.description}</p>
        </div>
    );
};

// Exporta o componente ProductPage
export default ProductPage;
