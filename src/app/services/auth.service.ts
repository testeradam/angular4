import { Injectable } from '@angular/core';
import { CookieService } from './cookie.service';
declare var _:any;

@Injectable()
export class AuthService {
	private user:any;

  constructor(private cookie:CookieService) { }


  getUser(){
  	return this.user;
  }

  isUserLoggedIn(){
  	if(_.isEmpty(this.user) && _.isEmpty(this.cookie.get('user'))){
  		return false;
  	}
  	else if(!_.isEmpty(this.user)) return true;

  	else if(!_.isEmpty(this.cookie.get('user'))){
  		//TODO: make fetch call to get user details
  		return true;
  	}
  }

  setUser(user){
  	this.user = user;
  }

}
