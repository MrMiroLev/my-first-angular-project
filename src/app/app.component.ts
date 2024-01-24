import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isRecipesSelected: boolean = true;
  isShoppingListSelected: boolean = false;

  onSelectedFeature(result: { isRecipesSelected: boolean, isShoppingListSelected: boolean }) {
    this.isRecipesSelected = result.isRecipesSelected;
    this.isShoppingListSelected = result.isShoppingListSelected;
  }
}
