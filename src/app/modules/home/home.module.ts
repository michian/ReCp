import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { RecipeComponent } from './components/recipe/recipe.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    RecipeComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
