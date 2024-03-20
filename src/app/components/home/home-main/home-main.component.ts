import {Component} from '@angular/core';
import {GameCardComponent} from "../game-card/game-card.component";

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
  doSomething(): void {

  }
}
