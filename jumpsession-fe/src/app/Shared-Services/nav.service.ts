import { Injectable } from '@angular/core';
import { Profile } from '../Models/profile';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  // public showNav = true;
  public selectedProfile : Profile | null = null;
  public showNav = false;

  constructor() { }

  public toggleNav() { this.showNav = !this.showNav}
}
