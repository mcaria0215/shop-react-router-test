import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
  const navigate = useNavigate();

  const goToDetail = () => {  
    navigate(`/detail/${product.id}`); 
  };

  const formatPrice = (price) => {
    if (price === undefined || price === null) return '';    
    return new Intl.NumberFormat('ko-KR').format(price);
  };
  
  return (
   <div onClick={goToDetail} className='product-card'>
      <div className='thumb'>
        <img src={product?.img} alt={product.title} />
        {product?.new && <p className='new'>신제품</p>}
      </div>
      <div className="info">
        <p className='title'>{product?.title}</p>
        <p className="price">{formatPrice(product?.price)}원</p>
        <p className='size'>{product?.size}</p>        
      </div>
    </div>    
  )
}

export default ProductCard
