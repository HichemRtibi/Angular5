import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {CharacterListComponent} from './components/character-list/character-list.component';
import {RouterModule} from "@angular/router";
import { MovieComponent } from './components/movie/movie.component';
import { CharacterComponent } from './components/character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    CharacterListComponent,
    MovieComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'movies', component: MovieListComponent},
      {path: 'characters', component: CharacterListComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
