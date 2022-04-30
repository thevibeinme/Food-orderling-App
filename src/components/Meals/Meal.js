import React from 'react';
import MealSummary from './MealSummary';
import AvailableMeal from './AvailableMeal';
const Meals = (props) => {
  return (
    <React.Fragment>
      <MealSummary />
      <AvailableMeal />
    </React.Fragment>
  );
};
export default Meals;
