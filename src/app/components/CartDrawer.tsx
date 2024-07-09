import { useCartStore } from "@/store";

export default function CartDrawer() {
    const cartStore = useCartStore();

    return (
        <div
            onClick={() => cartStore.toggleCart()}
            className='fixed w-full h-screen bg-black/25 left-0 top-0 z-50'>
            <div
                onClick={(e) => e.stopPropagation()}
                className='absolute bg-slate-600 right-0 top-0 w-1/3 h-screen p-12 overflow-y-scroll cart-drawer'
            >
                <h1>Carrinho</h1>
                {cartStore.cart?.map((item: any) => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </div>
        </div>
    );
}


