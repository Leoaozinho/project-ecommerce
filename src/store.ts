import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ProductType } from '../types/ProductType';

type CartState = {
    cart: ProductType[];
    addProduct: (product: ProductType) => void;
    removeProduct: (productId: string) => void;
    isOpen: boolean;
    toggleCart: () => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            cart: [],
            addProduct: (item) =>
                set((state) => {
                    const product = state.cart.find((p) => p.id === item.id);
                    if (product) {
                        const updatedCart = state.cart.map((p) => {
                            if (p.id === item.id) {
                                return { ...p, quantity: (p.quantity || 1) + 1 };
                            }
                            return p;
                        });
                        return { cart: updatedCart };
                    } else {
                        return { cart: [...state.cart, { ...item, quantity: 1 }] };
                    }
                }),
            removeProduct: (productId) =>
                set((state) => {
                    const updatedCart = state.cart.reduce((acc, p) => {
                        if (p.id === productId) {
                            const newQuantity = (p.quantity || 1) - 1;
                            if (newQuantity > 0) {
                                acc.push({ ...p, quantity: newQuantity });
                            }
                        } else {
                            acc.push(p);
                        }
                        return acc;
                    }, [] as ProductType[]);
                    return { cart: updatedCart };
                }),
            isOpen: false,
            toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
        }),
        { name: 'cart-storage' }
    )
);