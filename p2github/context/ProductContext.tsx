"use client";

import { request } from '@/services/request';
import { useRouter } from 'next/router';
import React, {createContext, useState} from 'react';


export type Product = {
    name: string
    description: string;
    price: number
    categoria: string
}

type ProductContextType = {
    products: Product[];
    addProduct: (product: Product) => void;
    removeProduct: (productIndex:number) => void;
    editProduct: (productIndex:number, new_product:Product)  => void;
    error: string | null;
}

export const ProductContext = createContext({} as ProductContextType);

export default function ProductContextProvider( { children }: { children: React.ReactNode } ){
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();
    
    async function addProduct(product: Product){

        let sucess: boolean = await request<boolean>('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({product}),
            referrerPolicy: 'no-referrer',
            cache: 'no-store'
        });
        if(sucess){
            setError(null);
            listProducts();
            router.push('/products');
        }
        else{
            setError("Dados de produto inválidos. Verifique e tente novamente!")
        }
    };

    async function listProducts(){
        let products: Product[] =  await request<Product[]>('http://localhost:5000/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(null),
            referrerPolicy: 'no-referrer',
            cache: 'no-store'
        });
        setProducts((products))
    };

    async function removeProduct (productIndex:number){
        let sucess: boolean = await request<boolean>('http://localhost:5000/products', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({productIndex}),
            referrerPolicy: 'no-referrer',
            cache: 'no-store'
        });
        if(sucess){
            setError(null);
            listProducts();
        }
        else{
            setError("A remoção do produto não pôde ser concluída.Tente novamente!")
        }
    };

    async function editProduct(productIndex:number, new_product:Product){
        let sucess: boolean = await request<boolean>('http://localhost:5000/products', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({productIndex, new_product}),
            referrerPolicy: 'no-referrer',
            cache: 'no-store'
        });
        if(sucess){
            setError(null);
            listProducts();
        }
        else{
            setError("Dados de produto inválidos. Verifique e tente novamente!")
        }
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, removeProduct, editProduct, error }}>
            {children}
        </ProductContext.Provider>
    );
}