import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReposComponent} from "./components/repos/repos.component";
import {HomeComponent} from "./components/home/home.component";
import {FavoritesComponent} from "./components/favorites/favorites.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'repos/:detail', component: ReposComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
