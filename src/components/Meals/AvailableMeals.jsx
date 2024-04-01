import { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import app from "../../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";

const AvailableMeals = () => {
  const [DUMMY_MEALS, setDUMMY_MEALS] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const db = getDatabase(app);
        const mealsRef = ref(db, "reactMeals/meals");
        const mealsSnapshot = await get(mealsRef);
        if (mealsSnapshot.exists()) {
          const mealsData = mealsSnapshot.val();
          const loadedMeals = [];
          for (const mealKey in mealsData) {
            loadedMeals.push({
              id: mealKey,
              name: mealsData[mealKey].name,
              description: mealsData[mealKey].description,
              price: mealsData[mealKey].price,
            });
          }
          setDUMMY_MEALS(loadedMeals);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching data: ", error);
      }
    })();
  }, []);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
