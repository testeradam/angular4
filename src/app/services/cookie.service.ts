/*
* Cookie service is used to store data locally on the browser. It can be localstorage or cookie storage.
* Currently localstorage was used. 
*
**/


import { Injectable } from '@angular/core';

declare var _:any;

@Injectable()
export class CookieService {

  constructor() { }

  private values = {};

  set(key, value){
  	if(!_.isString(value)){
  		value = JSON.stringify(value);
  	}
  	localStorage.setItem(key, value);
  }

  get(key){
  	let value = localStorage.getItem(key);
  	if(_.isEmpty(value)) return null;
  	try{
  		value = JSON.parse(value);
  	}catch(e){

  	}
  	return value;
  }

  remove(key){
  	localStorage.removeItem(key);
  }







}
