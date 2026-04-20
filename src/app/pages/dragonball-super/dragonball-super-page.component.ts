import { Component, inject } from "@angular/core";
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { Character } from "../../interfaces/character.interface";
import { DragonballCharacterAdd } from "../../components/dragonball/character-add/character-add";
import { DragonballService } from "../../services/dragonball.service";

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterList, DragonballCharacterAdd]
})

export class DragonballSuperPageComponent {

  public dragonballService = inject(DragonballService);

}
