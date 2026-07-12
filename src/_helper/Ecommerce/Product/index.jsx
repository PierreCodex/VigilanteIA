import { createContext } from 'react';

const ProductContext = createContext({
  productItem: [],
  symbol: '$'
});

export default ProductContext;