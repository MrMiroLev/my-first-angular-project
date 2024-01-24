import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() recipesSelected = new EventEmitter<{ isRecipesSelected: boolean, isShoppingListSelected: boolean }>();
  @Output() shoppingListSelected = new EventEmitter<{ isRecipesSelected: boolean, isShoppingListSelected: boolean }>();

  onSelectRecipes() {
    this.recipesSelected.emit({
      isRecipesSelected: true,
      isShoppingListSelected: false
    });
  }

  onSelectShoppingList() {
    this.shoppingListSelected.emit({
      isRecipesSelected: false,
      isShoppingListSelected: true
    });
  }
}
