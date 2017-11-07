import { Component, OnInit } from '@angular/core';
import { CookieService } from '../../services/cookie.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private cookie:CookieService,  private router:Router) { }

  ngOnInit() {
  }


  onLogout(){
  	this.cookie.remove('user');
  	return this.router.navigate(['/login']);
  }

}
