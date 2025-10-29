import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
  const navigate = useNavigate();

  const goToDetail = () => {  
    navigate(`/detail/${product.id}`); 
  };
  
  return (
   <div onClick={goToDetail} className='product-card'>
      <div className='thumb'>
        <img src={product?.img} alt={product.title} />
      </div>
      <div className="info">
        <p className='title'>{product?.title}</p>
        <p className="price">{product?.price}원</p>
        <p className='size'>{product?.size}</p>        
        <p className='new'>{product?.new===true?"신제품":""}</p>
      </div>
    </div>
  )
}

export default ProductCard
