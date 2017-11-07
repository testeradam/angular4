import { Component, OnInit } from '@angular/core';
import { CookieService } from '../../services/cookie.service';
import  { Helpers }  from '../../classes/helpers';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	user:any = {username:"", password:""};
  constructor(private cookie:CookieService, private helpers:Helpers, private auth:AuthService, private router:Router) { }

  ngOnInit() {
    
    if(this.auth.isUserLoggedIn()){

        return this.router.navigate(['/']);
    }
  	
  }

  loginBtnClicked(event){
  	event.preventDefault();
  	event.stopPropagation();
  	//TODO: validation
  	this.onLoginSuccess();
  }

  onLoginSuccess(){
  	this.cookie.set("user", this.helpers.random_string());
    this.router.navigate(['/']);
  }

}
