import { useCartStore } from "@/store";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";

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
                <h1>Carrinho</h1>
                <div className='border-t border-gray-400 my-4'></div>
                {cartStore.cart?.map((item) => (
                    <div key={item.id} className='flex gap-4 py-4'>
                        <Image 
                            src={item.image}
                            alt={item.name}
                            width={120}
                            height={120}
                            className='object-cover w-24' 
                        />
                        <div className='flex flex-col justify-between'>
                            <h2 className='w-42 truncate'>
                                {item.name}
                            </h2>
                            <div className='flex items-center'>
                                <button 
                                    className='py-1 px-2 border rounded-md text-sm mr-2' 
                                    onClick={() => cartStore.addProduct(item)}
                                >
                                    +
                                </button>
                                <h2 className='mx-2'>
                                    {item.quantity}
                                </h2>
                                <button 
                                    className='py-1 px-2 border rounded-md text-sm text-red-500 ml-2' 
                                    onClick={() => cartStore.removeProduct(item.id)}
                                >
                                    -
                                </button>
                            </div>
                            <p className='text-teal-600 text-sm font-bold'>
                                {formatPrice(item.price)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}



