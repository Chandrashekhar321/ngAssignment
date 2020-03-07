import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


public isLoggedIn = localStorage.getItem('isLoggedIn');

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('access_token');
    localStorage.setItem('isLoggedIn',"false");
  }


}
