import { Component } from '@angular/core';
import { Movie } from './services/movie';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title: string = ""
  year: number = 0
  rating: number = 0

  constructor(private movie: Movie) { }

  getMovies() {
    return this.movie.getMovies()
  }

  deleteMovies(id: number) {
    this.movie.removeMovie(id)
  }

  addMovie() {
    this.movie.addMovie(this.title, this.year, this.rating)

    this.title = '';
    this.year = 0;
    this.rating = 0;
  }
}
