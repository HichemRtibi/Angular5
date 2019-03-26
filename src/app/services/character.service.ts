import {Injectable} from '@angular/core';
import {Character} from "../classes/character";
import {CHARACTERS} from "../classes/data-character";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() {
  }

  getCharacters(): Promise<Character[]> {
    return Promise.resolve(CHARACTERS);

  }
}
