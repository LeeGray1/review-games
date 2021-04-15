import { Component } from '@angular/core';
import { from } from 'rxjs';
import { NgAuthService } from "./ng-auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client-side-reviews';

  constructor(public ngAuthService: NgAuthService) {

  }

  // logout() {
  //   this.userService.logout();
  // }
}
