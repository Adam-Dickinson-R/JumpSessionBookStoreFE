import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { NavService } from 'src/app/Shared-Services/nav.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private loginService: LoginService, private router: Router, private navService: NavService) {
  }

  //ToDo: stop users from navigating without login 

  Login() {
    // this.loginService.login(this.username, this.password).subscribe(
    //   success => {
    //     if (success) {
    //       this.router.navigateByUrl('/home');
    //     } else {
    //       this.errorMessage = 'Invalid username or password';
    //     }
    //   },
    //   error => {
    //     this.errorMessage = 'An error occurred. Please try again.';
    //   }
    // );
    this.loginService.login(this.username, this.password).subscribe({
      next: () => {
        this.router.navigateByUrl('/users');
        this.navService.toggleNav();
      },
      error: () => {
        this.errorMessage = 'An error occurred. Please try again.';
      }
    });

  }
}
