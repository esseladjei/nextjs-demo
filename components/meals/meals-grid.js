import styles from './css/meals-grid.module.css'
import MealItem from './meal-items'
export default function MealsPage({ meals }) {
  return (
    <>
      <ul className={styles.meals}>
        {meals.map(meal => <li key={meal.id}>

            <MealItem {...meal}/>
        </li>)}
      </ul>

    </>

  )

}