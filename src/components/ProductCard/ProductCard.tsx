import React from 'react'

export const ProductCard = ({ product }: { product: any }) => {

    return (
        <>
            <img src={product.thumbnail} />
            <h1>{product.title}</h1>
            {product.tags.map((tag) => (<p>{tag}</p>))}
        </>
    )
}
