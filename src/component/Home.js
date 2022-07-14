import React from 'react'
import './style.css';
import { CartState } from '../context/Context'
import SingleProduct from "./SingleProduct";
import Filters from './Filters';

const Home = () => {

  const { state: { products }, productState: { byStock, byFastDelivery, sort, byRating, searchQuery } } = CartState();

  const transformProducts = () => {
    let sortedProduct = products;

    if (sort) {
      sortedProduct = sortedProduct.sort((a, b) =>
        sort === "highToLow" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProduct = sortedProduct.filter((prod) => prod.instock)
    }

    if (byFastDelivery) {
      sortedProduct = sortedProduct.filter((prod) => prod.fastDelivery)
    }

    if (byRating) {
      sortedProduct = sortedProduct.filter((prod) => prod.ratings >= byRating);
    }

    if (searchQuery) {
      sortedProduct = sortedProduct.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
       )
    }
return sortedProduct;
  }

return (
  <div className="home">
    <Filters />
    <div className="productContainer">
      {transformProducts().map((prod) => (
        <SingleProduct prod={prod} key={prod.id} />
      ))}
    </div>
  </div>
)
}

export default Home