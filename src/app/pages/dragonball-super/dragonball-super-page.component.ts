import { Component, computed, signal } from "@angular/core";
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { Character } from "../../interfaces/character.interface";
import { DragonballCharacterAdd } from "../../components/dragonball/character-add/character-add";

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterList, DragonballCharacterAdd]
})

export class DragonballSuperPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    {id: 2, name: 'Vegeta', power: 8000},
  ]);

  addCharacter(newCharacter: Character) {
    this.characters.update(list => [...list, newCharacter])
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }



}
