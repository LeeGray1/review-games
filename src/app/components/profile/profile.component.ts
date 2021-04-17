import { Component, OnInit } from '@angular/core';
import { NgAuthService } from "../../ng-auth.service";
import * as firebase from 'firebase';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public ngAuthService: NgAuthService) { }

  ngOnInit(): void {
  }

  addAdmin(email) {
    let addRole = firebase.functions().httpsCallable('addAdminRole');
    console.log(email.value)
    addRole({ email: email.value })
      .then((result) => {
        // Read result of the Cloud Function.
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
    return false;
  }

  removeAdmin(email) {
    let removeRole = firebase.functions().httpsCallable('removeAdminRole');
    removeRole({ email: email.value })
      .then((result) => {
        // Read result of the Cloud Function.
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
    return false;
  }
}
