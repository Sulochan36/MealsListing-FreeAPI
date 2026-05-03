
import type { MealApi } from "../types/api";
import type { Meal } from "../types/meal";


export function transformMeal(meal: MealApi): Meal {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
        const name = meal[`strIngredient${i}` as keyof MealApi] as string;
        const measure = meal[`strMeasure${i}` as keyof MealApi] as string;

        if (name && name.trim()) {
            ingredients.push({
                name,
                measure: measure || "",
            });
        }
    }

    return {
        id: meal.idMeal,
        name: meal.strMeal,
        category: meal.strCategory,
        area: meal.strArea,
        instructions: meal.strInstructions,
        thumbnail: meal.strMealThumb,
        tags: meal.strTags ? meal.strTags.split(",") : [],
        youtube: meal.strYoutube,
        ingredients,
    };
}