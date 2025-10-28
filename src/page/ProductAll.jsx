import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);  

  const getProducts = async ()=>{
    try {
      const url = "http://localhost:5001/products";
      const response = await fetch(url);
      const data = await response.json();

      setProductList(data);
    } catch (error) {      
      console.log("데이터 로딩 실패:", error);
    }  
  };

  useEffect(()=>{
    getProducts();
  },[]);

  return (
    <div>
      {productList.length > 0 ? (
        <div className='product-card-list'>
          {productList.map((product)=>(
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (<p>상품을 불러오는 중입니다...</p>)}
    </div>
  )
}

export default ProductAll