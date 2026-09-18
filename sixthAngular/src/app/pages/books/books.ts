import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../services/book';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-books',
  imports: [CommonModule, RouterLink],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
  constructor(private book: Book) { }
  
  getBooks() {
    return this.book.getBooks()
  }
}
