import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor( 
    private loginService: LoginService,
    private router: Router) {
  }
//ToDo: stop users from navigating without login 

  Login() {
    this.loginService.login(this.username, this.password).subscribe(
      success => {
        if (success) {
          this.router.navigateByUrl('/home'); 
        } else {
          this.errorMessage = 'Invalid username or password';
        }
      },
      error => {
        this.errorMessage = 'An error occurred. Please try again.';
      }
    );
    
  }
}
