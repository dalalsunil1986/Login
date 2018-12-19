import { Component } from '@angular/core';

import { User } from './user';

import { UserAuthService } from './user-auth.service';



@Component({
  selector: 'app-root',
 
 templateUrl: './app.component.html',
  
styleUrls: ['./app.component.css']
})


export class AppComponent {
 
  userModel = new User('','');

onSubmit()
{
  console.log(this.userModel);
}
errStr: string;
  userName: string;
  passWord: string;
  
 
 constructor(private UserAuthservice: UserAuthService ){}

  userAuth(userName, passWord)
{
    this.errStr = '';
//    console.log('user name', userName);

      console.log(userName,passWord);
  
  this.UserAuthservice.userAuth(userName,passWord).subscribe(
     
 response => {
        console.log('response', response);
      },
    
  error => {
        this.errStr = error;
      })
  }

}
