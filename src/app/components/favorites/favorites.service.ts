import { Injectable } from '@angular/core';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favRepos: any;
  constructor() { }
  setFavRepos(fav){
    return this.favRepos = fav;
  }
  getFavRepos(){
    return of(this.favRepos);
  }
}
