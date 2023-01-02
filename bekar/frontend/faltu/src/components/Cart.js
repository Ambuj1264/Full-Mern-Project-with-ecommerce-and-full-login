import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";
const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  const navigate=useNavigate();
  console.log(cartData);
  let amount =
    cartData.length &&
    cartData.map((item) => item.realprice).reduce((prev, next) => prev + next);
  console.log(amount);
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-lg-evenly">
        <h1 style={{ display: "inline-block" }}>Cart Page</h1>
        <Link to="/product" className="btn btn-primary">Go to Products Link</Link>
      </div>
      <div className="cart-page-container">
        <table>
          <tr>
            <td>Name</td>
            <td>Description</td>
            <td>realprice</td>
            <td>Brand</td>
            <td>Category</td>
          </tr>
          {cartData.map((item) => (
            <tr key={item.key}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.realprice} ₹</td>
              <td>{item.brand}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </table>
        <div className="price-details">
          <div className="adjust-price">
            <span>Amount : </span>
            <span>{amount}</span>
          </div>
          <div className="adjust-price">
            <span>Discount : </span>
            <span> {(amount / 10).toFixed(0)}</span>
          </div>
          <div className="adjust-price">
            <span>Tax : </span>
            <span>  18%</span>
          </div>
          <div className="adjust-price">
            <span>Total : </span>
            <span>{(amount - amount / 10 + (amount * 18) / 1000).toFixed(0)}</span>
          </div>
          <div className="adjust-price">
            <button className="btn btn-success" onClick={()=>navigate("/payment")}>Buy Now</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Cart;
