import Link from "next/link";
import { SignInButton, SignedIn,SignedOut  } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { useCartStore } from "@/store";

function navbar() {
  //const useStore = useCartStore();  
  
  return (
        <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300">
        <Link href={"/"} className="uppercase font-bold text-md h-12 flex items-center">
          Next Store
        </Link>
        <div className='flex items-center gap-8'>
          <div className='flex items-center cursor-pointer relative'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M10 21.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-3.777-9h-2.168l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195zm-13.805-4c6.712 1.617 7 9 7 9h2l-4 4-4-4h2s.94-6.42-3-9z'
              />
            </svg>
            <span className='bg-blue-600 text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center
            absolute left-3 bottom-3'>
              2
            </span>

          </div>
          
          <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode='modal'>
              <button className='border rounded-md border-gray-400 px-3 py-2'>
                Fazer Login
              </button>
            </SignInButton>
          </SignedOut>
          </div>
        </div>
      </nav>
    );
}

export default navbar;