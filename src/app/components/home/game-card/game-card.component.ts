import { Component, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css'
})
export class GameCardComponent implements OnInit {
  //region Properties
  gameEvent = output();
  //endregion

  //region Lifecycle methods
  ngOnInit(): void {
    this.onGamesEventHandler();
  }
  //endregion

  //region Handler methods
  onGamesEventHandler(): void {
    console.log('new ng signal based output');
    this.gameEvent.emit();
  }
  //endregion
}
