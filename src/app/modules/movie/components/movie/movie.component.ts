import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../classes/movie";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input()
  m:Movie;

  constructor() { }

  ngOnInit() {
  }

}
