import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './Components/users/users.component';
import { BooksComponent } from './Components/books/books.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AssignComponent } from './Components/assign/assign.component';
import { BookAlocationModalComponent } from './Components/Modals/book-alocation-modal/book-alocation-modal.component';
import { CreateUserModalComponent } from './Components/Modals/create-user-modal/create-user-modal.component';
import { ConfirmAssignComponent } from './Components/confirm-assign/confirm-assign.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    BooksComponent,
    NavbarComponent,
    AssignComponent,
    BookAlocationModalComponent,
    CreateUserModalComponent,
    ConfirmAssignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
