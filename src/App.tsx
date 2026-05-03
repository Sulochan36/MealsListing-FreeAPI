import React, { useEffect, useState } from 'react'
import { fetchMeals } from './utils/meals';
import type { Meal } from './types/meal';

const App = () => {

  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadMeals = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await fetchMeals(2, 20);
      setMeals(result.meals);
    } catch (err) {
      setError("Failed to load meals");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMeals();
  }, []);

  { loading && <p>Loading meals...</p> }
  { error && <p>{error}</p> }

  return (
    <div>
      {meals.map((meal) => (
        <div key={meal.id}>
          <img src={meal.thumbnail} width={200} />
          <h3>{meal.name}</h3>
          <p>{meal.category} • {meal.area}</p>

          <ul>
            {meal.ingredients.map((ing, i) => (
              <li key={i}>
                {ing.name} - {ing.measure}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default App