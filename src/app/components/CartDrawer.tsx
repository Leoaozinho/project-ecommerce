import { useCartStore } from "@/store";

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
                {cartStore.cart?.map((item: any) => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </div>
        </div>
    );
}
