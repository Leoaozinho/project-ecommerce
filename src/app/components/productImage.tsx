'use client'
import { useState } from "react";
import Image from "next/image";
import { ProductType } from "../../../types/ProductType";

type ProductImageProps = {
    product: ProductType;
    fill?: boolean;
}

// Componente para exibir a imagem do produto
export default function ProductImage({ product, fill }: ProductImageProps) {
    // Estado para controlar o carregamento da imagem
    const [loading, setLoading] = useState(true);

    // Renderização condicional da imagem
    return fill ? (
        // Se fill for true, a imagem preencherá o espaço disponível
        <Image 
            src={product.image}
            fill
            alt={product.title}
            className={`object-cover ${
                // Aplica classes condicionais para adicionar efeitos visuais enquanto a imagem está carregando
                loading ? 'scale-110 blur-3xl grayscale' : 'scale-100 blur-0 grayscale-0'
            }`}
            // Callback chamado quando a imagem termina de carregar
            onLoadingComplete={() => setLoading(false)}
        />
    ) : (
        // Se fill for false, a imagem terá uma largura e altura específicas
        <Image 
            src={product.image}
            width={400}
            height={700}
            alt={product.title}
            className={`object-cover ${
                // Aplica classes condicionais para adicionar efeitos visuais enquanto a imagem está carregando
                loading ? 'scale-110 blur-3xl grayscale' : 'scale-100 blur-0 grayscale-0'
            }`}
            // Callback chamado quando a imagem termina de carregar
            onLoadingComplete={() => setLoading(false)}
        />
    );
}