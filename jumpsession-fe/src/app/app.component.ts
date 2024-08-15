import { Component } from '@angular/core';
import { NavService } from './Shared-Services/nav.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jumpsession-fe';

  constructor(public navService : NavService){}
}
