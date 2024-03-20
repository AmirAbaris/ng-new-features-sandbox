import { Component, signal } from '@angular/core';
import { GameCardComponent } from "../game-card/game-card.component";
import { Random } from '../models/random.model';

@Component({
  selector: 'app-home-main',
  standalone: true,
  imports: [
    GameCardComponent
  ],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.css'
})
export class HomeMainComponent {
  //#region Properties
  randomSigVar = signal<Random>({
    id: '12',
    name: 'Reza'
  });
  //#endregion

  //#region Main logic methods
  doSomething(): void {
    console.log('it works!');
  }
  //#endregion
}
