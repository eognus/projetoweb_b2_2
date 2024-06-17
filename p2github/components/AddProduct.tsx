'use client';

import { Product, ProductContext } from '@/context/ProductContext';
import React, {useContext, useState} from 'react';

const AddProduct = ({}) => {

    const { products, addProduct } = useContext(ProductContext);
    const [product, setProduct] = useState<Product>({categoria: '', description: '', name: '', price: 0});

    const saveProduct = (e: {preventDefault: () => void}) => {
        e.preventDefault();
        console.log('Lista antes de incluir: ' + products);
        addProduct(product);
        setProduct({categoria: '', description: '', name: '', price: 0});
    }

    return (
        <div className="text-center">
            <h3 className="mb-4 text-xl font-semibold text-gray-600">Adicionar Tarefa</h3>
            <form onSubmit={saveProduct}>
                <input 
                    type="text" 
                    placeholder="Digite o nome do produto" 
                    className="border border-gray-500 px-4 py-2 rounded-xl focus:border-blue-600 focus:outline-none focus:border-2"
                    name="name"
                    value={product.name}
                    onChange={(e) => setProduct(prevState => ({...prevState, name: e.target.value}))}
                />
                <input 
                    type="text" 
                    placeholder="Digite o nome da categoria do produto" 
                    className="border border-gray-500 px-4 py-2 rounded-xl focus:border-blue-600 focus:outline-none focus:border-2"
                    name="categoria"
                    value={product.categoria}
                    onChange={(e) => setProduct(prevState => ({...prevState, categoria: e.target.value}))}
                />
                <input 
                    type="text" 
                    placeholder="Digite a descrição do produto" 
                    className="border border-gray-500 px-4 py-2 rounded-xl focus:border-blue-600 focus:outline-none focus:border-2"
                    name="description"
                    value={product.description}
                    onChange={(e) => setProduct(prevState => ({...prevState, description: e.target.value}))}
                />
                <input 
                    type="number" 
                    placeholder="Digite o preço do produto" 
                    className="border border-gray-500 px-4 py-2 rounded-xl focus:border-blue-600 focus:outline-none focus:border-2"
                    name="price"
                    value={product.price}
                    onChange={(e) => setProduct(prevState => ({...prevState, price: parseFloat(e.target.value)}))}
                />
                <button 
                    type="submit"
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg mx-2 hover:bg-blue-600"
                >
                    Incluir
                </button>
            </form>
        </div>
    );
};
export default AddProduct;