import { TestBed } from '@angular/core/testing';
import { GameManeger } from './game-maneger';

describe('GameManeger', () => {
  let service: GameManeger;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameManeger);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
