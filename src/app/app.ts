import { Component, signal } from '@angular/core';
import { Buttons } from './buttons/buttons';
import { BoardGame } from './board-game/board-game';

@Component({
  selector: 'app-root',
  imports: [Buttons, BoardGame],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
}

