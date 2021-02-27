import { Component, OnInit } from '@angular/core';
import { RecipeService } from '@core/http/recipe/recipe.service';
import { Recipe } from '@shared/models/recipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  recipeList: Recipe[] = [];

  ngOnInit(): void {

    this.getRecipeList();
  }

  getRecipeList(): any {
    const list = this.recipeService.getRecipeList().subscribe((res: Recipe[]) => {
      this.recipeList = res;
      console.log('recipeList', this.recipeList);
    });
  }
}
