import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store";
import Image from "next/image";
import { useStore } from "zustand";

export default function CartDrawer() {
    const cartStore = useCartStore();

    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if ((e.target as Element).classList.contains('cart-overlay')) {
            cartStore.toggleCart();
        }
    };

    return (
        <div
            onClick={handleClickOutside}
            className='fixed w-full h-screen bg-black/25 left-0 top-0 z-50 cart-overlay'>
            <div
                onClick={(e) => e.stopPropagation()}
                className='absolute bg-slate-600 right-0 top-0 w-1/3 h-screen p-12 overflow-y-scroll cart-drawer'
            >
                <button
                onClick={() => cartStore.toggleCart()}
                className='font-bold text-sm text-teal-600'
                >
                    Voltar para loja
                </button>
                <div className='border-t border-gray-400 my-4'></div>
                {cartStore.cart?.map((item: any) => (
                    <div key={item.id} className='flex gap-4 py-4'>
                        <Image 
                            src={item.image}
                            alt={item.name}
                            width={120}
                            height={120}
                            className='objetic-cover w-24' />
                            <div>
                                <h2 className='w-42 truncate'>
                                {item.name}
                                </h2>
                                <h2>Quantidade: {item.quantity}</h2>
                                <p className='text-teal-600 text-sm font-bold'>{formatPrice(item.price)}</p>
                                <button className='py-1 px-2 border rounded-md mt-2 text-sm mr-1' onClick={() => cartStore.addProduct(item)}>
                                    Adicionar
                                </button>
                                <button className='py-1 px-2 border rounded-md mt-2 text-sm mr-1'>
                                    Remover
                                </button>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
