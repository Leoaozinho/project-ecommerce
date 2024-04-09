import clsx from "clsx";

// Componente para exibir um cartão esqueleto enquanto os dados estão sendo carregados
export default function SkeletonCard({ isLoading }: { isLoading?: boolean }) {
    return (
        // Container principal do cartão esqueleto
        <div className={clsx(
            'flex flex-col shadow-lg h-96 bg-slate-800 p-5 text-gray-300',
            // Aplica classes condicionais para adicionar efeitos visuais de carregamento
            {
                'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite]': 
                isLoading,
            }
        )}>
            {/* Placeholder para a imagem do produto */}
            <div className='relative mah-h-72 flex-1 bg-zinc-700' />
            {/* Placeholder para o nome e preço do produto */}
            <div className='flex justify-between font-bold my-3 bg-zinc-700' />
            {/* Placeholder para o botão de adicionar ao carrinho */}
            <div className='h-3 w-8/12 rounded-md bg-zinc-700' />
        </div>
    );
}
