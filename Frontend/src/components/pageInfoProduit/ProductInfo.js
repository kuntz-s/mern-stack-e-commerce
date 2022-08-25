import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router';
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import axios from "axios"

const ProductInfo = () => {
    const params = useParams();
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            const productInfo = await axios.get(`/api/products/${params.productId}`);
            console.log(productInfo)
            setProductData(productInfo.data);
        }

        getProduct();
    },[params])

    if(!productData) {
        return(
            <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
            height:"20vh"
          }}
        >
          <CircularProgress />
        </Box>
        )
    } else {
        return(
            <div>
                stephane
            </div>
        )
    }
}

export default ProductInfo