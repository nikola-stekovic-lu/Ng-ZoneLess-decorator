import { Component } from '@angular/core';
import { Observed } from './observer.decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent  {
	counter: number = 0;

	@Observed()
  increment(): void {
    this.counter++;
  }
}
