import type { MealsResponse } from "../types/api";
import type { Meal } from "../types/meal";
import { transformMeal } from "./transformMeal";


export async function fetchMeals(
    page = 1,
    limit = 10,
    query = ""
): Promise<{
    meals: Meal[];
    totalPages: number;
    currentPage: number;
}> {
    const url = `https://api.freeapi.app/api/v1/public/meals?page=${page}&limit=${limit}&query=${query}`;

    const res = await fetch(url);
    const mealData: MealsResponse = await res.json();

    return {
        meals: mealData.data.data.map(transformMeal),
        totalPages: mealData.data.totalPages,
        currentPage: mealData.data.page,
    };
}