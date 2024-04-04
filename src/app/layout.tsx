import "./globals.css";
import clsx from "clsx";
import { Inter } from 'next/font/google';
import Navbar from "./components/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next E-Commerce 13 utilizando versão 14",
  description: "Feito por Leo",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="en">
        <body className={clsx(inter.className, 'bg-slate-700')}>
          <Navbar />
          <main className='h-screen p-16'>
          {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
