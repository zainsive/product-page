import React, { useState, useEffect } from "react";
import ProductItem from "../components/productItem.component";

function Home() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch("./mock/products.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res.slice(0, 4));
        setproducts(res.slice(0, 4));
      });
  }, []);

  return (
    <>
      <div
        className="row w-100 d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        {products.map((item, index) => {
          return (
            <ProductItem
              title={item.name}
              image={item.image}
              desc={item.description}
              key={index}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
