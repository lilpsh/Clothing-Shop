export const GET_ITEMS = "GET_ITEMS";
export const ADD_ITEMS_CART = "ADD_ITEMS_CART";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const CLEAR_PRODUCT = "CLEAR_PRODUCT";

export const getItems = (data) => ({
  type: GET_ITEMS,
  payload: data,
});

export const addBasket = (item) => ({
  type: ADD_ITEMS_CART,
  payload: item,
});

export const productQuantity = (action, name) => ({
  type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
  payload: name,
});

export const clearProduct = (name) => ({
  type: CLEAR_PRODUCT,
  payload: name,
});

const initialState = {
  cartNumbers: 0,
  cartCost: 0,
  items: [],
};

export default (state = initialState, action) => {
  let itemSelected = "";
  let newItems = "";

  switch (action.type) {
    case GET_ITEMS: {
      return {
        ...state,
        items: action.payload,
      };
    }

    case ADD_ITEMS_CART:
      console.log(action.payload);
      itemSelected = action.payload;

      newItems = state.items.map((i) => {
        if (itemSelected.tagName === i.tagName) {
          i.numbers += 1;
          i.inCart = true;

          return action.payload;
        }

        return i;
      });

      return {
        ...state,
        cartNumbers: state.cartNumbers + 1,
        cartCost: state.cartCost + action.payload.price,
        items: newItems,
      };

    case INCREASE_QUANTITY:
      itemSelected = action.payload;

      newItems = state.items.map((i) => {
        if (itemSelected.tagName === i.tagName) {
          i.numbers += 1;

          return action.payload;
        }

        return i;
      });
      return {
        ...state,
        cartNumbers: state.cartNumbers + 1,
        cartCost: state.cartCost + action.payload.price,
        items: newItems,
      };

    case DECREASE_QUANTITY:
      itemSelected = action.payload;
      console.log(itemSelected);

      let newCartCost = 0;
      let newCartNumbers = 0;
      if (itemSelected.numbers === 0) {
        itemSelected.inCart = false;

        newCartCost = state.cartCost;
        newCartNumbers = state.cartNumbers;
      } else {
        newCartNumbers = state.cartNumbers - 1;
        newCartCost = state.cartCost - action.payload.price;
      }
      newItems = state.items.map((i) => {
        if (itemSelected.tagName === i.tagName) {
          i.numbers -= 1;
          if (itemSelected.numbers === 0) {
            itemSelected.inCart = false;
            newCartNumbers = state.cartNumbers - 1;
            newCartCost = state.cartCost - action.payload.price;
          }
          return action.payload;
        }

        return i;
      });

      return {
        ...state,
        cartNumbers: newCartNumbers,
        cartCost: newCartCost,
        items: newItems,
      };

    case CLEAR_PRODUCT:
      itemSelected = action.payload;
      let numbersBackup = itemSelected.numbers;

      newItems = state.items.map((i) => {
        if (itemSelected.tagName === i.tagName) {
          i.numbers = 0;
          i.inCart = false;

          return action.payload;
        }

        return i;
      });
      return {
        cartNumbers: state.cartNumbers - numbersBackup,
        cartCost: state.cartCost - numbersBackup * itemSelected.price,
        items: newItems,
      };

    default:
      return state;
  }
};
