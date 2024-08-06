import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  public showNav = false;

  constructor() { }

  public toggleNav() { this.showNav = !this.showNav}
}
