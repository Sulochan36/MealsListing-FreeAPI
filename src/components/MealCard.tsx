import type { Meal } from "../types/meal";

const MealCard = ({ meal }: { meal: Meal }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">

            {/* IMAGE */}
            <img
                src={meal.thumbnail}
                alt={meal.name}
                className="w-full h-72 object-cover"
            />

            {/* CONTENT */}
            <div className="p-6 space-y-4">

                {/* TITLE */}
                <h2 className="text-2xl font-semibold text-gray-800">
                    {meal.name}
                </h2>

                {/* META */}
                <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-md">
                        {meal.category}
                    </span>
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-md">
                        {meal.area}
                    </span>
                </div>

                {/* INGREDIENTS */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">
                        🥗 Ingredients
                    </h3>

                    <ul className="text-sm text-gray-600 space-y-1">
                        {meal.ingredients.map((ing, i) => (
                            <li key={i} className="flex justify-between border-b pb-1">
                                <span>{ing.name}</span>
                                <span className="text-gray-500">{ing.measure}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* INSTRUCTIONS */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">
                        👨‍🍳 Instructions
                    </h3>

                    <ol className="space-y-2 text-sm text-gray-600 list-decimal list-inside">
                        {meal.instructions
                            .split(". ")
                            .filter((step) => step.trim().length > 0)
                            .map((step, i) => (
                                <li key={i} className="leading-relaxed">
                                    {step.trim()}
                                </li>
                            ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default MealCard;