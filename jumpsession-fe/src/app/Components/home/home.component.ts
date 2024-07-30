import { Component } from '@angular/core';
import { Profile } from 'src/app/Models/profile';
import { ProfileService } from 'src/app/Services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  profiles: Profile[] = [];
  filteredUsers: Profile[] = [];
  searchTerm: string = '';
  errorMessage: string = '';

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getUsers().subscribe(
      (data: Profile[]) => {
        this.profiles = data;
        this.filteredUsers = this.profiles;
      },
      error => {
        this.errorMessage = 'An error occurred while fetching the user list';
      }
    );
  }

  filterUsers() {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.profiles.filter(profile =>
      profile.name.toLowerCase().includes(term) ||
      profile.surname.toLowerCase().includes(term) ||
      profile.email.toLowerCase().includes(term) ||
      profile.phoneNumber.toLowerCase().includes(term)
    );
  }
}
