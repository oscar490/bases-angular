import { NgClass } from "@angular/common";
import { Component, computed, signal } from "@angular/core";
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { Character } from "../../interfaces/character.interface";
import { DragonballCharacterAdd } from "../../components/dragonball/character-add/character-add";


@Component({
  templateUrl: './dragonball-page.component.html',
  imports: [CharacterList, DragonballCharacterAdd]
})

export class DragonballPageComponent {

  name = signal('Gohan');
  power = signal(100);

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    /*
    {id: 2, name: 'Vegeta', power: 8000},
    {id: 3, name: 'Piccolo', power: 3000},
    {id: 4, name: 'Yamcha', power: 500}
    */
  ]);

  addCharacter(newCharacter: Character) {
    this.characters.update(
      list => [...list, newCharacter]
    )
  }

}
