import { Component, OnInit } from '@angular/core';

import {MovieService} from "../../modules/movie/services/movie.service";
import {Character} from "../../classes/character";
import {CharacterService} from "../../services/character.service";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters:Character[];

  constructor(private characterservices:CharacterService) { }
  getCharacter(){
    this.characterservices.getCharacters().then(data=>this.characters=data);
  }

  ngOnInit() {
    this.getCharacter();
  }

}
