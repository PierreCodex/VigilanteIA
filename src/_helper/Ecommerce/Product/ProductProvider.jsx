import React, { useEffect, useState } from 'react';
import { ProductsApi } from '../../../api';
import Context from './index';
import axios from 'axios';


const ProductProvider = (props) => {
    const [productItem, setProductItem] = useState([]);
    const symbol = '$';

    const fetchProducts = async () => {
        try {
            await axios.get(ProductsApi).then((resp) => {
                setProductItem(resp.data);
            });
        } catch (error) {
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [setProductItem]);

    return (
        <Context.Provider value={{ ...props, productItem, symbol }}>
            {props.children}
        </Context.Provider>
    );
};

export default ProductProvider;
