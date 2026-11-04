import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  books = [
    { title: 'Кобзар', author: 'Тарас Шевченко', pages: 400 },
    { title: '1984', author: 'Джордж Орвелл', pages: 320 },
    { title: 'Гобіт', author: 'Дж. Р. Р. Толкін', pages: 300 }
  ];
  title: string = "";
  author: string = "";
  pages: number = 0;
  booksLength: number = this.books.length;

  clearInput() {
    const bookToAdd = {
      title: this.title,
      author: this.author,
      pages: this.pages
    };

    this.books = [...this.books, bookToAdd];

    this.booksLength = this.books.length;

    this.title = "";
    this.author = "";
    this.pages = 0;
  }

  deleteBook(bookTitle: string) {
    this.books = this.books.filter((item) => item.title !== bookTitle);
    
    this.booksLength = this.books.length;
  }
}
