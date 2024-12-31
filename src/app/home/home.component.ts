import { MatchService, Regions } from './../match.service';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { catchError, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  gameName: string = '';

  regions: string[] = [];
  regionQuery: string = 'EUW1';

  isLoading = false;
  showError = false;


  constructor(
    private router: Router,
    private matchService: MatchService
  ) {
    Object.values(Regions).forEach(region => {
      this.regions.push(region);
    });
  }

  updateQuery() {
    this.showError = false;
  }
  

  async search() {
    if (this.gameName.length == 0)
      return;

    try {
      const query = this.gameName.trim().split('#');
      const name = query[0].toLocaleLowerCase();
      const tagLine = query[1].toLocaleLowerCase();
      const region = this.regionQuery;
      this.isLoading = true;
      this.matchService.matchHistory = await lastValueFrom(this.matchService.GetLastMatches(name, tagLine, region))
      this.router.navigateByUrl(`match-history/${name}/${tagLine}/${region}`);
      this.isLoading = false;
    } catch (error) {
      this.isLoading = false;
      this.showError = true;
    }

  }
}
