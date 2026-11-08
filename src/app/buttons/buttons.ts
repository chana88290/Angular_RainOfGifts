import { Component, inject, signal } from '@angular/core';
import { GameManeger } from '../services/game-maneger';

@Component({
  imports: [],
  selector: 'app-buttons',
  styleUrl: './buttons.scss',
  templateUrl: './buttons.html',
})
export class Buttons {
  srv=inject(GameManeger)

  timer = signal(60)
start(){
this.srv.addGift()
let val = setInterval(()=>{
    this.timer.update(x => x - 1)
  },1000)
  if(val<=0){
    alert("Time over!!!")
  }
}
}
