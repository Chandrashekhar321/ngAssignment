import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {


  }


  login(userData:any) {
    if (userData.controls.username.value != '' && userData.controls.password.value != '') {
      localStorage.setItem('username', userData.controls.username.value);
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigateByUrl('/home');
    }
  }


}
