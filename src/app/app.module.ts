import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CharacterListComponent} from './components/character-list/character-list.component';
import {CharacterComponent} from './components/character/character.component';
import {AppRoutingModule} from "./app-routing.modules";
import {MovieModule} from "./modules/movie/movie.module";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,

    CharacterListComponent,

    CharacterComponent,

    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MovieModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
