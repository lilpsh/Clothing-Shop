import React from "react";
import { connect } from "react-redux";
import {
  productQuantity,
  clearProduct,
} from "../../redux/reducers/itemsReducer";

function Cart({ cartNumbers, cartCost, items, productQuantity, clearProduct }) {
  return (
    <div className="cart">
      <h3 className="cart-h3">Shopping Cart</h3>
      {items.map(
        (item, i) =>
          item.inCart === true && (
            <div className="cart-one" key={i}>
              <div className="cart-item">
                <div className="cart-item-div">
                  <img className="cart-item-img" src={item.image} alt="" />
                  <span className="cart-item-name">{item.name}</span>
                </div>
                <button
                  className="cart-item-btn"
                  onClick={() => clearProduct(item)}
                  name="close-circle"
                >
                  &#215;
                </button>
              </div>
              <div className="cart-quantity">
                <div className="cart-quantity-adding">
                  <button
                    className="cart-quantity-btn"
                    onClick={() => productQuantity("decrease", item)}
                    name="arrow-back-circle-outline"
                  >
                    -
                  </button>
                  <span className="cart-quantity-number">{item.numbers}</span>
                  <button
                    onClick={() => productQuantity("increase", item)}
                    className="cart-quantity-btn"
                    name="arrow-forward-circle-outline"
                  >
                    +
                  </button>
                </div>
                <div className="cart-total-item">
                  ${item.numbers * item.price}
                </div>
              </div>
            </div>
          )
      )}
      {cartNumbers === 0 && <div className="cart-empty">Cart is empty</div>}
      <div className="cart-total">Total: ${cartCost}</div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartNumbers: state.itemsReducer.cartNumbers,
  cartCost: state.itemsReducer.cartCost,
  items: state.itemsReducer.items,
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(
  Cart
);
