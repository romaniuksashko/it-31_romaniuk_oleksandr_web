import { Component, signal } from '@angular/core';
import { ItemFormComponent } from './item-form-component/item-form-component';

@Component({
  selector: 'app-root',
  imports: [ItemFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fifthAngular');
}
