import { Component } from '@angular/core';
import { from } from 'rxjs';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client-side-reviews';

  user: User;

  constructor() {

  }

  // logout() {
  //   this.userService.logout();
  // }
}
