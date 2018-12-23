import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent  {
  userDetails : any;

  constructor(private UserAuthservice: UserAuthService) { }

  allUserData(){
    console.log('allUserData block is working');
    this.UserAuthservice.userManagement()
    .subscribe(
      response => {
       this.userDetails = response;
        console.log('response', this.userDetails);
      }
    )
  }

}
