import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isAuth: boolean;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
    });
  }
  onSignout() {
    this.authService.signOutUser();
    this.router.navigate(['/home']);
  }
}
