export interface IRecipe {
    id: number;
    title: string;
    image: string;
    imageType: string;
    usedIngredientCount: number;
    missedIngredientCount: number;
    missedIngredients?: IIngredient[];
    usedIngredients?: IIngredient[];
    unusedIngredients?: IIngredient[];
    likes: number;

}

export interface IIngredient {
    id: number;
    amount: number;
    unit: string;
    unitLong: string;
    unitShort: string;
    aisle: string;
    name: string;
    original: string;
    originalString: string;
    originalName: string;
    metaInformation: any[];
    meta: any[];
    image: string;
}

