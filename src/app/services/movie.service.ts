import { Injectable } from '@angular/core';
import {Movie} from "../classes/movie";
import {MOVIES} from "../classes/data-movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies():Promise<Movie[]>{
    return Promise.resolve(MOVIES);
  }
}
