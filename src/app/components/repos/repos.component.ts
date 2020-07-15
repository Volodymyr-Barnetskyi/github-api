import {Component, Input, OnInit} from '@angular/core';
import {GetReposService} from "./get-repos.service";
import {FavoritesService} from "../favorites/favorites.service";

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  listFavoriteRepos: any;
  reposDetail: any;
  @Input() login: string = "cwinsi";
  constructor(private _getReposService: GetReposService, private favoritesService: FavoritesService) { }
  AddFavoriteRepos(repos){
    this.listFavoriteRepos.push(repos);
  }
  ngOnInit(): void {
    this.favoritesService.setFavRepos(this.listFavoriteRepos);
    this._getReposService.getRepos(this.login).subscribe((data)=>{
      this.reposDetail = data;
    });
  }
}
