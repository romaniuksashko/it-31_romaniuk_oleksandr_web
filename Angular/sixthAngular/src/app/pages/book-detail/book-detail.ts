import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../services/book';

@Component({
  selector: 'app-book-detail',
  imports: [CommonModule],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css',
})
export class BookDetail {
  bookId!: number
  bookDetails: any

  constructor(private route: ActivatedRoute, private book: Book) {
    this.route.params.subscribe(params => this.bookId = Number(params['id']))

    this.bookDetails = this.book.getBookById(this.bookId)
  }
}
