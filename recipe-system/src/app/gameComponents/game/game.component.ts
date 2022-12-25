import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  @Input() currentNumber;
  nInterval;

  timer()
  {
    this.currentNumber = 0;
    if (!this.nInterval) {
      this.nInterval = setInterval(this.changeNumber, 1000);
    }
  }

  changeNumber()
  {
    this.currentNumber += 1;
  }
}
