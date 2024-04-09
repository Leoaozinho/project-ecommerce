import React from 'react';
import Stripe from 'stripe';
import { ProductType } from '../../../../types/ProductType';

// Interface para definir os tipos de props esperados pelo componente ProductPage
interface ProductPageProps {
    params: {
        id: string; // O ID do produto é uma string
    };
}

// Componente funcional ProductPage que recebe um ID de produto como parâmetro
const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
    const { id } = params; // Extrai o ID do objeto de parâmetros

    // Retorna um elemento JSX que exibe o ID do produto
    return <div>Product {id}</div>;
};

// Exporta o componente ProductPage
export default ProductPage;

// Função assíncrona para obter detalhes do produto com base em seu ID
async function getProduct(id: string) {
    // Cria uma nova instância do Stripe com a chave secreta
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: '2023-10-16', // Versão da API do Stripe
    });

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
}
