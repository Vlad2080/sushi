import styles from "./MealList.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: 'Roll "Naomi"',
    description:
      "Philadelphia cheese, chicken fillet, masago, tomato, cucumber, sesame",
    price: 11.99,
  },
  {
    id: "m2",
    name: "Spice in Salmon",
    description: "Rice, salmon, spice sauce",
    price: 3.99,
  },
  {
    id: "m3",
    name: "Sushi with Eel",
    description: "Smoked eel, unagi sauce, sesame",
    price: 4.99,
  },
  {
    id: "m4",
    name: 'Salad "Poke with Salmon"',
    description:
      "Rice, salmon, cucumber, chuka, nori, tuna flakes, nut sauce",
    price: 7.99,
  },
];


const MealList = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default MealList;
