import React, { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import styles from './Header.module.css';
import mealsImg from '../Assets/meals.jpg';
const Header = (props) => {
  const showCartHandler = () => {
    props.onClickShow();
  };
  return (
    <Fragment>
      <header className={`${styles.header}`}>
        <h1>ReactMeals</h1>
        <HeaderCartButton showCart={showCartHandler} />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImg} alt="A table full of meals" />
      </div>
    </Fragment>
  );
};
export default Header;
