import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Salad',
      'Simple veggie salad',
      'https://www.gorodtaraz.kz/upload/000/u1/29/57/svezhii-photo-normal.jpg',
      [
        new Ingredient("Tomato", 3),
        new Ingredient("Cucumber", 2),
        new Ingredient("Green leaf", 3)
      ]),
    new Recipe(
      'Burger',
      'Vegetarian ISKCON mahaprasad burger',
      'https://static.toiimg.com/photo/52532889.cms',
      [
        new Ingredient("Bun", 2),
        new Ingredient("Tomato", 1),
        new Ingredient("Cucumber", 1),
        new Ingredient("Paneer", 2),
        new Ingredient("Mayonaise", 1)
      ]
      )
  ];

  constructor (private slService: ShoppingListService) {}

  getRecipes () {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
