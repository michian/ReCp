import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '@shared/models/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  @Input() recipeList!: Recipe[];

  constructor() { }

  ngOnInit(): void {
  }

}
