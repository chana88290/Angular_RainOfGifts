import { signal } from "@angular/core";

export class Gifts {
    x!: number;
    y = signal<number>(0);
    color!: string;
    size!: number;
}
