import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Book {
  private books = signal([
    {
      id: 1,
      title: '1984',
      author: 'Джордж Орвелл',
      description: 'Антиутопічний роман'
    },
    {
      id: 2,
      title: "Атомні звички",
      author: "Джеймс Клір",
      description: "Саморозвиток"
    }, {
      id: 3,
      title: "Сад кісток",
      author: "Тесс Ґеррітсен",
      description: "Детектив, Бостон"
    }
  ]);

  getBooks() {
    return this.books;
  }

  getBookById(id: number) {
    return this.books().find((item) => item.id === id)
  }

  addBook(book: any) {
    let n = 4;

    const newBook = {
      id: n,
      ...book
    }

    this.books.update((books) => [...books, newBook])

    n = n + 1
  }
}
