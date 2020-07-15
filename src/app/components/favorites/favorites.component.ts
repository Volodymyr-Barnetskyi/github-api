import { Component, OnInit } from '@angular/core';
import {GetReposService} from "../repos/get-repos.service";
import {FavoritesService} from "./favorites.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
 listFavorites : any;
 constructor(private favoritesService: FavoritesService) {
 }
 ngOnInit() {
   this.listFavorites = this.favoritesService.getFavRepos();
 }
}
