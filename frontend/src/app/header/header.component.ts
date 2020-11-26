import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase';
import { AuthService } from '../services/auth.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean;
  constructor(private authService: AuthService, private router: Router) {}

  // $("#fix1").hover(
  //   function() {
  //     $(this).addClass("fa fa-home w3-xxlarge");
  //   },
  //   function() {
  //     $(this).removeClass("w3-xxlarge w3-spin fa fa-home");
  //   }
  // );
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
   
    setTimeout(function() {
      document.location.reload();
    }, 0); // document.location.reload()
  }
}
