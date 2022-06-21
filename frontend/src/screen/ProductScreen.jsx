import React from 'react'
import products from '../products'
import { useParams } from 'react-router-dom'


const ProductScreen = () => {
  let { id } = useParams();
  const product = products.find((p) => p._id === id);
  return (
    <div>
        {product.name}
    </div>
  )
}

export default ProductScreen
