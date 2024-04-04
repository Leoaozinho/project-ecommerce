import Link from "next/link";
import { SignInButton, SignedIn,SignedOut  } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

function navbar() {
    return (
        <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300">
        <Link href={"/"} className="uppercase font-bold text-md h-12 flex items-center">
          Next Store
        </Link>
        <div className='flex items-center gap-8'>
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
      </nav>
    );
}

export default navbar;