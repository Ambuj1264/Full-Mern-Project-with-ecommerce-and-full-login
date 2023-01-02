import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { addToCart, removeToCart } from "../redux/action";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/productAction";

const Product = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.cartData);
  useEffect(() => {
    dispatch(productList());
  }, []);
  let star = "⭐";

  const data = useSelector((state) => state.productData);
  // console.log("data in main component",data)
  return (
    <>
      <div className="container-fluid">
        <h1 className="about">Our Product</h1>
        <div className="header">
          <Link to="/cart">
            <div className="cart-div d-flex justify-content-end">
              <span style={{ postion: "fixed", right: "30px" }}>
                {result.length}
              </span>
              <img
                style={{
                  postion: "fixed",
                  right: "10px",
                  width: "40px",
                  height: "40px",
                }}
                src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
              />
            </div>
          </Link>
        </div>
        <div className="product-container d-flex flex-wrap ">
          {data.map((item) => (
            <div className="product-item">
              <div className="card" style={{ width: "20rem", margin: "60px" }}>
                <img
                  src={item.image}
                  className="card-img-top"
                  alt="..."
                  style={{ width: "100%", height: "290px" }}
                />
                <div className="card-body">
                  <h5 className="card-title"> {item.brand}</h5>
                  <h5 className="card-title"> {item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <span>
                    Price:<del> {item.fakeprice} </del> {item.realprice}
                  </span>
                  <br />
                  <span>Rating:{star.repeat(item.rating)} </span>
                  <br />
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="btn btn-primary"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => dispatch(removeToCart(item._id))}
                    className="btn btn-danger mx-2"
                  >
                    Remove to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
