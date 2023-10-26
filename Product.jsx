import React, { useEffect, useState } from "react";
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // all product with axios
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data.products);
      })
      .catch((error) => setError(error.message));
    // console.log(response);
  }, []);

  return (
    <div>
      {error !== "" && error}
      {products.map((productitem, index) => {
        return (
          <h3 key={index}>
            {productitem.title} - ${productitem.price}
          </h3>
        );
      })}
    </div>
  );
}

export default Product;
