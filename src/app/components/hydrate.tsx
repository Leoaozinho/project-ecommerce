'use client'

import { ReactNode, useState, useEffect } from 'react';

// Componente que exibe um texto de carregamento enquanto a aplicação é montada
export default function Hydrate({ children } : { children: React.ReactNode}) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return isMounted ? children : <span>Loading...</span>;
}