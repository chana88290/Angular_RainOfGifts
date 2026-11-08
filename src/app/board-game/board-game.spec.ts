import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoardGame } from './board-game';

describe('BoardGame', () => {
  let component: BoardGame;
  let fixture: ComponentFixture<BoardGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardGame],
    }).compileComponents();

    fixture = TestBed.createComponent(BoardGame);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
