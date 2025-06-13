import React, {useEffect} from 'react'
import './ProductList.css'
import {ProductCard} from "../ProductCard/ProductCard.tsx";

export interface Product {
    id: number;
    title: string;
    description: string;
    tags: string[];
    thumbnail: string;
    images: string[];
}

interface ProductResponse {
    products: Product[];
}

export const ProductList = () => {
  const [products, setProducts] = React.useState<Product[]>([])
  const [documentTitle, setDocumentTitle] = React.useState<string>("Fetching Products")
  
  useEffect(() => {
    document.title = documentTitle;
  }, []);
  
  useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: ProductResponse = await response.json();
                setProducts(data.products);
                setDocumentTitle(`${data.products.length} Products`);
            } catch (err: any) {
                console.log(err)
            }
        }

        fetchProducts();
    }, []);


  return (
    <div>
      <header>
        <h2>Shop</h2>
      </header>
      <div>
          {products.map((product, index) => (<ProductCard product={product} key={index} />))}
      </div>
    </div>
  );
};


