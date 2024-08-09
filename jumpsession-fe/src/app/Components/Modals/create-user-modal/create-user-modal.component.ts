import { Component, EventEmitter, Output } from '@angular/core';
import { Profile } from 'src/app/Models/profile';
import { ProfileService } from 'src/app/Services/profile.service';

@Component({
  selector: 'app-create-user-modal',
  templateUrl: './create-user-modal.component.html',
  styleUrls: ['./create-user-modal.component.css']
})
export class CreateUserModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() userCreated = new EventEmitter<Profile>();

  profile: Omit<Profile, 'id'> = {
    name: '',
    surname: '',
    email: '',
    phoneNumber: ''
  };

  constructor(private profileService: ProfileService) { }

  saveProfile() {
    this.profileService.createUser(this.profile).subscribe(
      (createdProfile: Profile) => {
        console.log('User created successfully:', createdProfile);
        this.userCreated.emit(createdProfile); // Emit the userCreated event
        this.closeModal();
      },
      error => {
        console.error('Error creating user:', error);
      }
    );
  }

  closeModal() {
    this.close.emit();
  }
}
