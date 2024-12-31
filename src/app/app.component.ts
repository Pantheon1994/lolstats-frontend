import { Component } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { initializeApp } from "firebase/app";
import { SeoService } from './seo.service';
import { filter } from 'rxjs';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
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

  constructor(private router: Router, private seo: SeoService) { }

  ngOnInit() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        const route = this.router.routerState.snapshot.root;
        let title = this.getTitle(route);
        let description = this.getDescription(route);
        if (title) {
          this.seo.updateTitle(title);
        }
        if (description) {
          this.seo.updateDescription(description);
        }
      });
  }

  private getTitle(route: any): string | undefined {
    let data = route.data['title'];
    while (route.firstChild) {
      route = route.firstChild;
      data = route.data['title'] || data;
    }
    return data;
  }

  private getDescription(route: any): string | undefined {
    let data = route.data['description'];
    while (route.firstChild) {
      route = route.firstChild;
      data = route.data['description'] || data;
    }
    return data;
  }
}
