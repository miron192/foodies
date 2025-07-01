import styles from "./MealsGrid.module.css";
import MealItem from "./MealsItem";

const MealsGrid = ({ meals }) => {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <>
          <MealItem {...meal} />
        </>
      ))}
    </ul>
  );
};

export default MealsGrid;
