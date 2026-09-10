import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { RouterLink } from '@angular/router';

export const AppConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fourthAngular');
}
