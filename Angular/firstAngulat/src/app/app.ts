import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header-component/header-component';
import { NewsComponent } from './news-component/news-component';
import { FooterComponent } from './footer-component/footer-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, NewsComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('firstAngulat');
}
