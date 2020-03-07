import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
  constructor(public jwtHelper: JwtHelperService) { }
  // ...
  public isAuthenticated(): boolean {
    localStorage.setItem('access_token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");

    var token;

    if (localStorage.getItem('isLoggedIn') == "true") {
        token = localStorage.getItem('access_token');
    }  else {
        token = null;
    }
    
    // Check whether the token is expired and return
    // true or false

    return !this.jwtHelper.isTokenExpired(token);
  }
}