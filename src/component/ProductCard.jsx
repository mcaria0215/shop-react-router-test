import React from 'react'

const ProductCard = ({product}) => {
  return (
   <div key={product.id} className='product-card'>
      <div className='thumb'>
        <img src={product.img} alt={product.title} />
      </div>
      <div className="info">
        <p className='title'>{product.title}</p>
        <p className="price">{product.price}원</p>
        <p className='size'>{product.size}</p>
      </div>
    </div>
  )
}

export default ProductCard