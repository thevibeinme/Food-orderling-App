import { useContext } from 'react';
import MealItemForm from './MealItemForm';

import styles from './MealItems.module.css';

import CartContext from '../../../store/cart-context';

const MealItems = (props) => {
  const cartCtx = useContext(CartContext);

  const amountChangeHandler = (amount) => {
    console.log(amount);
    cartCtx.addItem({
      name: props.name,
      price: props.price,
      amount: amount,
      id: props.id,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{props.price}</div>
      </div>
      <div>
        <MealItemForm
          onAddAmount={amountChangeHandler}
          id={props.id}
          price={props.price}
        />
      </div>
    </li>
  );
};
export default MealItems;
