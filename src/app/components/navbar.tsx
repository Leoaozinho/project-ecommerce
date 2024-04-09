import Link from "next/link";
import { SignInButton, SignedIn,SignedOut  } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import Cart from "./cart";

function navbar() {
   
  
// Exibindo o carrinho
return (
  // Barra de navegação fixa no topo
  <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300">
      {/* Link para a página inicial */}
      <Link href={"/"} className="uppercase font-bold text-md h-12 flex items-center">
          Next Store
      </Link>
      {/* Container para os elementos à direita da barra de navegação */}
      <div className='flex items-center gap-8'>
          {/* Container para o carrinho */}
          <div className='flex items-center relative'>
              {/* Componente do carrinho */}
              <Cart />
          </div>
          {/* Container para os botões de usuário */}
          <div>
              {/* Verifica se o usuário está autenticado */}
              <SignedIn>
                  {/* Botão de usuário autenticado */}
                  <UserButton />
              </SignedIn>
              {/* Verifica se o usuário não está autenticado */}
              <SignedOut>
                  {/* Botão de login */}
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