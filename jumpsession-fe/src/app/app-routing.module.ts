import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { UsersComponent } from './Components/users/users.component';
import { BooksComponent } from './Components/books/books.component';
import { AssignComponent } from './Components/assign/assign.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'users', component: UsersComponent},
  {path: 'books', component: BooksComponent},
  {path: 'assign-to-user', component: AssignComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
