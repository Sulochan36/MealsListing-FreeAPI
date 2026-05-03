
export type Ingredient = {
    name: string;
    measure: string;
};

export type Meal = {
    id: string;
    name: string;
    category: string;
    area: string;
    instructions: string;
    thumbnail: string;
    tags: string[];
    youtube: string | null;
    ingredients: Ingredient[];
};