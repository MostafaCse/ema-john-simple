import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {ProductKey}=useParams();
   // console.log(ProductKey);
   
   const proudct=fakeData.find(pd=>pd.key===ProductKey);
    return (
        <div>
            <Product addShowCart={false} singleProduct={proudct}></Product>
        </div>
    );
};

export default ProductDetail;