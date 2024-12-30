import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { initializeApp } from "firebase/app";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lolstats.gg';

  firebaseConfig = {
    apiKey: "AIzaSyCa_6WXpU6jt-ShMc_aqLEtz2P-r_GRsE4",
    authDomain: "lolstats-a90c0.firebaseapp.com",
    projectId: "lolstats-a90c0",
    storageBucket: "lolstats-a90c0.firebasestorage.app",
    messagingSenderId: "662660039308",
    appId: "1:662660039308:web:bbf29d3e33a4d8d80031a9",
    measurementId: "G-XWB7B4PNVD"
  };
  
  app = initializeApp(this.firebaseConfig);
}
