import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Box } from '@mui/material';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);  

  const getProducts = async ()=>{
    try {
      const url = `https://my-json-server.typicode.com/mcaria0215/shop-react-router-test/products`;
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
    <div className='container'> 
      <Box sx={{ 
          padding: 0,
          display: 'grid',
          gap: 0,          
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
        }}
      >
        {productList.length > 0 ? (
          productList.map((product)=>(            
            <Box key={product.id}>
              <ProductCard product={product} />
            </Box>
          ))
        ) : (<p>상품을 불러오는 중입니다...</p>)}
      </Box>
    </div>
  )
}

export default ProductAll