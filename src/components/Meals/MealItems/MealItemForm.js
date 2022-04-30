import { useRef } from 'react';
import Input from '../../UI/Input';

import styles from './MealItemForm.module.css';
import CartContext from '../../../store/cart-context';

const MealItemForm = (props) => {
  // const cartCtx = useContext(CartContext);
  // const [amount, setAmount] = useState();

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    console.log(enteredAmountNumber);
    props.onAddAmount(enteredAmountNumber);

    // console.log(event.target[0].value);
    // setAmount(event.target[0].value);
    // cartCtx.addItem({
    //   id: props.id,
    //   amount: event.target[0].value,
    //   price: props.price,
    // });
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};
export default MealItemForm;
