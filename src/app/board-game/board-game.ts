import { Component, inject } from '@angular/core';
import { GameManeger } from '../services/game-maneger';
import { Gift } from '../gift/gift';

@Component({
  imports: [Gift],
  selector: 'app-board-game',
  styleUrl: './board-game.scss',
  templateUrl: './board-game.html',
})
export class BoardGame {


  srv=inject(GameManeger)

}
