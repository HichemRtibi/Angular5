import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharacterComponent} from "./components/character/character.component";
import {MovieListComponent} from "./modules/movie/components/movie-list/movie-list.component";
import {CharacterListComponent} from "./components/character-list/character-list.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path:'',component:CharacterListComponent
  },
  {
    path:'movies',component:MovieListComponent
  },
  {
    path: 'characters',
    component: CharacterListComponent
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
