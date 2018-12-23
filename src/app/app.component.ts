import { Component } from '@angular/core';
import { User } from './user';
import { UserAuthService } from './user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  userModel = new User('', '');

  errStr: any;
  userName: string;
  passWord: string;
  showData: boolean;
  data: string;
  userDetails : any;
  //logInData: boolean;


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

  onSubmit(user) {
    console.log(user);
   // this.logInData = true;
    let username: string;
    let pass: string;
    username = user.value.userName;
    pass = user.value.password;
    console.log(username, pass)
    this.UserAuthservice.userAuth(username, pass)
      .subscribe(
        response => {
          if(response.statusCode !== 404 ) {
            this.showData = true;
//this.logInData = false;
            this.errStr= false;
            this.data = 'Succesfully loggedIn';
            this.allUserData();
            console.log('if block response', response);
           }
        },
        error => {
          this.showData = false;
          this.errStr = 'Error connecting to server';
        })
  }
}




