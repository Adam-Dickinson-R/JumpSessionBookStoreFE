import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Profile } from 'src/app/Models/profile';

@Component({
  selector: 'app-book-alocation-modal',
  templateUrl: './book-alocation-modal.component.html',
  styleUrls: ['./book-alocation-modal.component.css']
})
export class BookAlocationModalComponent {
  @Input() selectedProfile: Profile | null = null;
  @Output() close = new EventEmitter<void>();

  assignBook(bookId: string) {
    // Implement the logic to assign the book to the user
    console.log(`Assigning book ID: ${bookId} to user: ${this.selectedProfile!.name}`);
    this.close.emit();  // Close the modal after assignment (optional)
  }

  closeModal() {
    this.close.emit();
  }
}
