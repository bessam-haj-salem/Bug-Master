import { Component } from '@angular/core';
import firebase from 'firebase/app';
// import Firebase Authentication (optional)
import '@firebase/auth';

// import Firebase Realtime Database (optional)
import '@firebase/database';

// import Cloud Firestore (optional)
import '@firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyCRrZfG_5zCBsVobiHJn_g-mhlIXJDk0lA",
      authDomain: "bugs-master.firebaseapp.com",
      databaseURL: "https://bugs-master.firebaseio.com",
      projectId: "bugs-master",
      storageBucket: "bugs-master.appspot.com",
      messagingSenderId: "402533385068",
      appId: "1:402533385068:web:cacbbe3243b733ac632949"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
