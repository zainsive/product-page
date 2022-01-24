import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Product() {
  let params = useParams();
  const [productInfo, setProductInfo] = useState([]);
  useEffect(() => {
    fetch("../mock/products.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res[params.id]);
        setProductInfo(res[params.id]);
      });
  }, []);
  return (
    <div className="row mt-4">
      <div className="col-lg-4 left-side-product-box pb-3">
        <img
          src={productInfo.image + ""}
          className="border p-3"
          alt={productInfo.name}
        ></img>
      </div>
      <div className="col-lg-6">
        <div className="right-side-pro-detail border p-3 m-0">
          <div className="row">
            <div className="col-lg-12">
              <p className="m-0 p-0">{productInfo.name}</p>
            </div>
            <div className="col-lg-12">
              <p className="m-0 p-0 price-pro">${productInfo.price}</p>
              <hr className="p-0 m-0"></hr>
            </div>
            <div className="col-lg-12 pt-2">
              <h5>Product Detail</h5>
              <span>{productInfo.description}</span>
              <hr className="m-0 pt-2 mt-2"></hr>
            </div>

            <div className="col-lg-12">
              <h6>Quantity :</h6>
              <input
                type="number"
                className="form-control text-center w-100"
                value="1"
              ></input>
            </div>
            <div className="col-lg-12 mt-3">
              <div className="row">
                <div className="col-lg-6 pb-2">
                  <a href="/" className="btn btn-danger w-100">
                    Add To Cart
                  </a>
                </div>
                <div className="col-lg-6">
                  <a href="/" className="btn btn-success w-100">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
