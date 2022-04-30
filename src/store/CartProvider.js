import { act } from '@testing-library/react';
import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    let updatedItems;

    const itemIndex = state.items.findIndex((item) => {
      return action.item.id === item.id;
    });
    const itemExist = state.items[itemIndex];
    if (itemExist) {
      let updatedItem;
      updatedItem = {
        ...itemExist,
        amount: itemExist.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    // console.log(updatedTotalAmount, updatedItem);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  // remove item from car logic
  if (action.type === 'REMOVE') {
    const itemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });
    const itemExist = state.items[itemIndex];
    const updatedTotalAmount = state.totalAmount - itemExist.price;
    let updatedItems;
    if (itemExist.amount === 1) {
      updatedItems = state.items.filter((item) => {
        return item.id !== action.id;
      });
    } else {
      let updatedItem = { ...itemExist, amount: itemExist.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartState({ type: 'ADD', item: item });
    console.log('item added', item, defaultCartState.items);
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartState({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
