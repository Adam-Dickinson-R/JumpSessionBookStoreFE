import { Component } from '@angular/core';
import { Profile } from 'src/app/Models/profile';
import { ProfileService } from 'src/app/Services/profile.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent {
  profiles: Profile[] = [];
  filteredUsers: Profile[] = [];
  searchTerm: string = '';
  errorMessage: string = '';

  selectedProfile: Profile | null = null;
  isBookModalVisible: boolean = false;
  isCreateUserModalVisible: boolean = false;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.loadUsers();
  }
  
  loadUsers(): void {
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

  openCreateUserModal() {
    this.isCreateUserModalVisible = true;
  }

  closeCreateUserModal() {
    this.isCreateUserModalVisible = false;
  }

  goBack() {
    history.back();
  }

  onRowClick(profile: Profile): void {
    this.selectedProfile = profile;
    this.isBookModalVisible = true;
  }

  closeModal(): void {
    this.isBookModalVisible = false;
  }

  onUserCreated(newProfile: Profile): void {
    this.loadUsers();
    this.closeCreateUserModal();
  }
}