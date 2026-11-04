import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Books } from './pages/books/books';
import { AddBook } from './pages/add-book/add-book';
import { BookDetail } from './pages/book-detail/book-detail';

export const routes: Routes = [
  {
    path: "",
    component: Home
  },
  {
    path: "books",
    component: Books
  },
  {
    path: "books/add",
    component: AddBook
  },
  {
    path: "book/:id",
    component: BookDetail
  }
];
