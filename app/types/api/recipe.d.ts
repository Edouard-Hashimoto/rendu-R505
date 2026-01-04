type Recipe = {
    recipe_id: number;
    title: string;
    description: string;
    image_url: string;
    cuisine_name: Cuisine["name"];
    goal_name: Goal["name"];
    diet_name: Diet["name"];
    allergy_name: Allergy["name"];
}

type FullRecipe = Recipe & {
    instructions: {
        instruction_id: number;
        step_number: number;
        description: string;
    }[];
    ingredients: {
        ingredient_id: number;
        name: string;
        unit: string;
        quantity: number;
    }[]; // ← ICI, très important
};