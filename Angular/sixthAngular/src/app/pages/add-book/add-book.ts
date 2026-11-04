import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Book } from '../../services/book';

@Component({
  selector: 'app-add-book',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-book.html',
  styleUrl: './add-book.css',
})
export class AddBook {
  newBook = {
    title: '',
    author: '',
    description: ''
  }

  submitted = false

  constructor(private book: Book) {}

  addBook(form: any) {
    this.submitted = true

    if (form.invalid) {
      return
    }

    this.book.addBook(this.newBook)    

    form.resetForm()
    this.submitted = false


  }  
}
