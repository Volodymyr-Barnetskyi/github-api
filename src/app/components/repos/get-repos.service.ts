import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GetReposService {
  queryFilters: string = 'items';
  constructor(private http: HttpClient) { }

  getUsers(username: string){
   return  this.http.get(`https://api.github.com/search/users?q=${username}`).pipe(map((res)=> res[this.queryFilters]));
  }
  getAllUsers(){
    return this.http.get('https://api.github.com/users').pipe(map((res)=> res));
  }
  getRepos(login){
    return this.http.get(`https://api.github.com/users/${login}/repos`).pipe(map((res)=> res));
  }
  getUserRepos(loginUser){
    this.http.get(`https://api.github.com/users/${loginUser}/repos`);
  }

}
