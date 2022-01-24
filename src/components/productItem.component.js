import React from "react";
function ProductItem({ title, image, desc, index }) {
  return (
    <div className="col-3 d-flex justify-content-center align-items-center">
      <div className="card text-center" style={{ width: "18rem" }}>
        <img
          src={image}
          height={"200px"}
          width={"200px"}
          className="card-img-top"
          alt={title}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <a href={"/product-details/" + index} className="btn btn-primary">
            View
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
