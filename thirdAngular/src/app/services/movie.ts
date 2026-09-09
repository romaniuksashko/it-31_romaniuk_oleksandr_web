import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Movie {
  private movies = signal([
    {
      id: 1,
      title: 'Interstellar',
      year: 2014,
      rating: 9,
    },
    {
      id: 2,
      title: 'Avatar',
      year: 2009,
      rating: 8,
    },
    {
      id: 3,
      title: 'Titanic',
      year: 1997,
      rating: 7,
    },
  ]);

  getMovies() {
    return this.movies;
  }

  addMovie(title: string, year: number, rating: number) {
    let n = 4;

    const newMovie = {
      id: n,
      title: title,
      year: year,
      rating: rating,
    };

    this.movies.update((movies) => [...movies, newMovie]);

    n = n + 1;
  }

  removeMovie(id: number) {
    this.movies.update((movies) => movies.filter(item => item.id !== id))
  }
}
