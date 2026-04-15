import { ChangeDetectionStrategy, Component, signal } from "@angular/core";


@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
})

export class CounterPageComponent {

  counter: number = 10;
  counterSignal = signal(10);



  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update( currentValue => currentValue + value);
  }

  reset() {
    this.counter = 0;
    this.counterSignal.set(0)
  }

}
