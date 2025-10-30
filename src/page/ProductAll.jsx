import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [originalProductList, setOriginalProductList] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState([]);

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");

  const getProducts = async ()=>{
    try {
      const url = `https://my-json-server.typicode.com/mcaria0215/shop-react-router-test/products`;
      const response = await fetch(url);
      const data = await response.json();

      setOriginalProductList(data);
    } catch (error) {      
      console.log("데이터 로딩 실패:", error);
    }  
  };

  useEffect(()=>{
    getProducts();
  },[]);

  useEffect(() => {
    if (searchQuery) {
      const filteredList = originalProductList.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
      );
      setFilteredProductList(filteredList);
    } else {      
      setFilteredProductList(originalProductList);
    }
  }, [originalProductList, searchQuery]);

  return (
    <div className='container'> 
      {searchQuery && (
        <h2 style={{ textAlign: 'center', padding: '20px' }}>
          '{searchQuery}'에 대한 검색 결과
        </h2>
      )}
      <Box sx={{ 
          padding: 0,
          display: 'grid',
          gap: 0,          
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
        }}
      >
        {filteredProductList.length > 0 ? (
          filteredProductList.map((product)=>(
            <Box key={product.id}>
              <ProductCard product={product} />
            </Box>
          ))
        ) : (            
          originalProductList.length === 0 ? (
            <p>상품을 불러오는 중입니다...</p>
          ) : (
            searchQuery ? (
              <p>'{searchQuery}'에 해당하는 상품이 없습니다.</p>
            ) : (
              <p>상품을 불러오는 중입니다...</p>
            )
          )
        )}
      </Box>
    </div>
  )
}

export default ProductAll