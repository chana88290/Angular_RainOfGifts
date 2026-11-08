import { Component, EventEmitter, Input, Output, signal, inject} from '@angular/core';
import { Gifts } from '../models/gifts';
import { GameManeger } from '../services/game-maneger';

@Component({
  imports: [],
  selector: 'app-gift',
  styleUrl: './gift.scss',
  templateUrl: './gift.html',
})
export class Gift {
  @Input()
  myGift!:Gifts 

  ngOnInit(){
    let interval = setInterval(() => {
      this.myGift.y.update(x => (x + 1))
      if(this.myGift.y() >= (69.6 - this.myGift.size))
      {
        clearInterval(interval)
        this.srv.remove()
        this.srv.addGift()
      }

    }, 50)
  }

  srv = inject(GameManeger)


  click(){
    this.srv.score.update(x=> x + 10 - this.myGift.size)
    this.srv.remove()
    this.srv.addGift()
  }
  // timer = signal(((69.6 - this.myGift.size) * 30) / 100)
  // val = setInterval(()=>{
  //   this.timer.update(x => x - 1)
  // },(((69.6 - this.myGift.size) * 30) / 100))
}
