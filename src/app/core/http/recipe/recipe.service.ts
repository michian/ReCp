import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private apiService: ApiService) { }


  getRecipeList(): any {
    return this.apiService.get('/recipes/', new HttpParams());
  }
}
