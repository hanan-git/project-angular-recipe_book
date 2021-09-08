import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './feature/shopping-list/shopping-list.component';
import { RecipeBookComponent } from './feature/recipe-book/recipe-book.component';
import { RecipecardComponent } from './feature/recipe-book/recipecard/recipecard.component';
import { RecipedetailsComponent } from './feature/recipe-book/recipedetails/recipedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    RecipecardComponent,
    RecipedetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }