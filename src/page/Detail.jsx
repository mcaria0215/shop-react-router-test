import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Box, Typography, FormControl, InputLabel, Select, MenuItem, Button, Divider, Alert, CircularProgress } from '@mui/material';

const Detail = () => {  
  const { id } = useParams();   
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState(''); 

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const getProductDetail = async () => {
    try {    
      const url = `https://my-json-server.typicode.com/mcaria0215/shop-react-router-test/products/${id}`; 
      const response = await fetch(url);
      
      if (!response.ok) {          
        throw new Error(`상품을 불러오지 못했습니다. 상태 코드: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!data || Object.keys(data).length === 0) {
        throw new Error("요청하신 상품을 찾을 수 없습니다.");
      }

      setProduct(data);
      setLoading(false);
      setError(null);
    } catch (err) {
      console.error("데이터 로딩 실패:", err.message);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
      getProductDetail();
  }, [id]);
  
  if (loading) {
    return (
      <Container sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ ml: 2 }}>상품 정보를 로딩 중입니다...</Typography>
      </Container>
    );
  }

  if (error || !product) {
    return (
      <Container sx={{ mt: 5 }}>
        <Alert severity="error">
          {error || "요청하신 상품을 찾을 수 없습니다."}
        </Alert>
      </Container>
    );
  }

  const hasStock = product.size && product.size.length > 0;
  
  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      <Grid container spacing={5} className="product-info">
        {/* 좌측: 상품 이미지 */}
        <Grid item xs={12} md={6}>
            <Box 
              component="img"
              sx={{ 
                  width: '100%', 
                  height: 'auto',                   
                  objectFit: 'contain',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              }}
              src={product.img} 
              alt={product.title}
            />
        </Grid>

        {/* 우측: 상품 정보 및 구매 버튼 */}
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 2 }}>            
            <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
                {product.title}
            </Typography>
            
            <Divider sx={{ my: 3 }} />
            
            <Typography variant="h4" color="primary.main" fontWeight="medium" sx={{ my: 2 }}>
                ₩{product.price.toLocaleString()}
            </Typography>

            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="size-select-label">Size</InputLabel>
              <Select
                labelId="size-select-label"
                id="size-select"
                value={selectedSize}
                label="Size"
                onChange={handleSizeChange}
              >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                {product.size.map((s)=>{
                 return (                    
                  <MenuItem key={s} value={s}>{s}</MenuItem>
                  );
                })}                               
              </Select>
            </FormControl>
            
            <Button 
              variant="contained" 
              color="primary" 
              size="large" 
              fullWidth
              disabled={product.stock === 0}
              sx={{ py: 1.5, fontSize: '1.2rem', mt: 4 }}
            >
              구매하기
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Detail;