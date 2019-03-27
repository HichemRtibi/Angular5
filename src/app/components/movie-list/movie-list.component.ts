import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../classes/movie";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];

  constructor(private moviesservices: MovieService) {
  }

  ngOnInit() {
    this.getMovies();
  }


  getMovies() {
    this.moviesservices.getMovies().then(data => this.movies = data);
  }

}
