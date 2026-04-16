import { Component, EventEmitter, input, output, signal } from "@angular/core";
import { Character } from "../../../interfaces/character.interface";


@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.html'
})

export class DragonballCharacterAdd {

  name = signal<string>('')
  power = signal<number>(0)

  eventNewCharacter = output<Character>();

  addCharacter() {
      const newCharacter: Character = {
        id: Math.floor(Math.random() * 1000),
        name: this.name(),
        power: this.power()
      };

      this.eventNewCharacter.emit(newCharacter);
      this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

}
