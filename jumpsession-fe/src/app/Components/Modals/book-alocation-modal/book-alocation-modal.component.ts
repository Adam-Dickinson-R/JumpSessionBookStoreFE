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


  // vars for modal parent
  // selectedProfile: Profile | null = null;  // Track the selected profile
  // isModalVisible: boolean = false;  // Control the visibility of the modal

  assignBook(bookId: string) {
    // Implement the logic to assign the book to the user
    console.log(`Assigning book ID: ${bookId} to user: ${this.selectedProfile!.name}`);
    this.close.emit();  // Close the modal after assignment (optional)
  }

  closeModal() {
    this.close.emit();
  }

  // Modals for parent 
  // onRowClick(profile: Profile): void {
  //   this.selectedProfile = profile;  // Set the selected profile
  //   this.isModalVisible = true;  // Show the modal
  // }

  // closeModal(): void {
  //   this.isModalVisible = false;  // Hide the modal
  // }

}
