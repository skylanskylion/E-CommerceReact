import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.', price: '₹500', image: 'https://images-na.ssl-images-amazon.com/images/I/41Leu3gBUFL.jpg'},
    { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '₹1000', image:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=1808&hei=1686&fmt=jpeg&qlt=80&.v=1572825197207'},
]

const Products = () => {
    return(
    <main>

        <Grid container justfied="center" spacing={4}>  
            {products.map((product) =>
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            )}

        </Grid>
    </main>
    );
    

}

export default Products;