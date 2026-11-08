import { Service, signal, Signal, WritableSignal } from '@angular/core';
import { Gifts } from '../models/gifts';

@Service()
export class GameManeger {
    gifts: WritableSignal<Gifts[]> = signal([])

    colors = ["red", "yellow", "purple", "pink", "green"]

    score = signal(0)

    randomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    addGift(){
        const size = this.randomInt(2, 6)
        const gift = new Gifts()
        gift.x = this.randomInt(0,(70 - size))
        gift.color = this.colors[this.randomInt(0, 4)]
        gift.size = size
        this.gifts.update(x => [...x, gift])
        console.log(this.gifts);
    }

    remove(){
        this.gifts.update(x => [])
    }
}
