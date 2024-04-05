'use client'
import { useCartStore } from "@/store";
import { useStore } from "zustand";

export default function Cart() {
    const useStore = useCartStore();
    return (
        <div 
            onClick={() => useStore.toggleCart()}
            className='flex items-center relative'>
            <svg 
                cursor='pointer'
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                width='24'
                height='24'
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
             <path 
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4.559 7l4.701-4.702c.198-.198.459-.298.72-.298.613 0 1.02.505 1.02 1.029 0 .25-.092.504-.299.711l-3.26 3.26h-2.882zm12 0h2.883l-4.702-4.702c-.198-.198-.459-.298-.72-.298-.613 0-1.02.505-1.02 1.029 0 .25.092.504.299.711l3.26 3.26zm3.703 4l-.016.041-3.598 8.959h-9.296l-3.597-8.961-.016-.039h16.523zm3.738-2h-24v2h.643c.535 0 1.021.304 1.256.784l4.101 10.216h12l4.102-10.214c.234-.481.722-.786 1.256-.786h.642v-2zm-14 5c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3zm3 0c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3zm3 0c0-.552-.447-1-1-1s-1 .448-1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3z'
             />   
            </svg>
            <span className='bg-blue-600 text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center absolute left-3 bottom-3'>
                2
            </span>
            {
                useStore.isOpen && (
            <div className='fixed w-full h-screen bg-black/25 left-0 top-0 z-50'>
                <div className='absolute bg-slate-600 right-0 top-0 w-1/3 h-screen p-12 overflow-y-scroll'>
                    <h1>Meu Carrinho</h1>
                </div>
            </div>
                )}
        </div>
    );
}