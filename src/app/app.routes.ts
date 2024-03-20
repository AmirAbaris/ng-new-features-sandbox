import { Routes } from '@angular/router';
import {HomeMainComponent} from "./components/home/home-main/home-main.component";
import {GameCardComponent} from "./components/home/game-card/game-card.component";

export const routes: Routes = [
  { path: '', component: HomeMainComponent },
  { path:'game-card', component: GameCardComponent },
];
