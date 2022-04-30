import { useContext, useEffect, useState } from 'react';

import styles from './HeaderCartButton.module.css';

import CartIcon from '../Cart/CartIcon';
import Header from './Header';

import CartContext from '../../store/cart-context';

function HeaderCartButton(props) {
  const [btnIsHighLighted, setbtn] = useState(false);

  const cartCtx = useContext(CartContext);

  // to get number of items in cart
  console.log(cartCtx.items);

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const showCartHandler = () => {
    props.showCart(true);
  };

  const btnClasses = `${styles.button} ${btnIsHighLighted ? styles.bump : ''}`;

  const { items } = cartCtx;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setbtn(true);
    const timer = setTimeout(() => {
      setbtn(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={showCartHandler} className={btnClasses}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
