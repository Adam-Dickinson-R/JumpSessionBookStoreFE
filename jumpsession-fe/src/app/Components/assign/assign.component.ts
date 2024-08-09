import { Component } from '@angular/core';
import { Book } from 'src/app/Models/book';
import { BooksService } from 'src/app/Services/books.service';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent {

  books: Book[] = [];
  filteredBooks: Book[] = [];
  searchTerm: string = "";
  selectedBooks: Book[] = [];

  constructor(private bookService : BooksService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe({
      next: books => {
        this.books = books;
        this.filteredBooks = this.books;
      }, 
      error: err => {
        console.log('Failed to fetch books: ', err)
      }
    })
  }

  filterBooks() {
    const term = this.searchTerm.toLowerCase();
    this.filteredBooks = this.books.filter(book =>
      book.book_name.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term)
    );
  }

  addSelectedBook(book: Book) {
    // Add to the list
    if(!this.selectedBooks.includes(book)) { // test if this works
      this.selectedBooks.push(book)
    } else {
      // book already selected
    }
  }

  removeSelectedBook(index: number) {
    // Remove from the list
    this.selectedBooks.splice(index, 1);
  }
}
