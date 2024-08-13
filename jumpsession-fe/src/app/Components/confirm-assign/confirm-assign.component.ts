import { Component, EventEmitter, Input, Output } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Book } from 'src/app/Models/book';
import { ProfileService } from 'src/app/Services/profile.service';
import { CheckOut } from '../../Models/checkOut';
import { NavService } from 'src/app/Shared-Services/nav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-assign',
  templateUrl: './confirm-assign.component.html',
  styleUrls: ['./confirm-assign.component.css']
})
export class ConfirmAssignComponent {
  @Input() selectedBooks: Book[] = [];
  @Output() hideConfirmComp: EventEmitter<boolean> = new EventEmitter();

  constructor(private profileService : ProfileService, public navService: NavService,
    private router: Router
  ) {}

  assignBooks() {
    var newCheckouts: CheckOut[] = [];
    this.selectedBooks.forEach(book => {
      newCheckouts.push({
        id: 0,
        bookId: book.id,
        userId: this.navService.selectedProfile?.id as number
      });
    });
    
    const assignments = newCheckouts.map(checkout => this.profileService.assignBooks(checkout));
    
    forkJoin(assignments).subscribe({
      next: () => console.log('All books assigned successfully!'),
      error: (error) => console.error('Error during book assignment:', error),
      complete: () => console.log('Assignment process completed.')
    });
  }

  goBackToAssign() {
    this.hideConfirmComp.emit(false);
  }
}
