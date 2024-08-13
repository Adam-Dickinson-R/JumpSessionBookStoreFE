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
  showAssign: boolean = false;

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
    if(!this.selectedBooks.includes(book)) {
      this.selectedBooks.push(book)
    }
  }

  removeSelectedBook(index: number) {
    this.selectedBooks.splice(index, 1);
  }

  hasBeenSelected(book: Book): boolean {
    return this.selectedBooks.includes(book);
  }

  goBack() {
    history.back();
  }

  assignBooks() {
    this.showAssign = true;
  }

  hideConfirm(event: boolean) {
    this.showAssign = event;
  }
}
