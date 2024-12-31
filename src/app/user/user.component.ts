import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { MatchService, MatchScore } from './../match.service';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { ProgressionBarComponent } from "../progression-bar/progression-bar.component";
import { queues } from '../constants';
import { SeoService } from '../seo.service';
import { TimeAgoPipe } from '../time-ago.pipe';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgFor, AsyncPipe, NgIf, ProgressionBarComponent, NgClass, RouterLink, TimeAgoPipe],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  public gameName: string = '';
  public tagLine: string = '';
  public region: string = '';
  average: number = 0;

  matchHistory$: Observable<MatchScore[]> = new Observable();

  constructor(private route: ActivatedRoute, private matchService: MatchService, private seoService: SeoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.gameName = params['gameName'];
      this.tagLine = params['tagLine'];
      this.region = params['region'];

      this.seoService.updateTitle(`Recent Games ${this.gameName}#${this.tagLine}-${this.region} `);
      this.seoService.updateDescription(`Recent Games  ${this.gameName}#${this.tagLine}-${this.region}`);

      this.average = 0;
      let totalScore = 0;
      let playerCount = 0;

      this.matchHistory$ = this.matchService.GetLastMatches(this.gameName, this.tagLine, this.region).pipe(
        map(matches => {
          return matches.map(match => {
            const player = match.blueScore.find(hero => hero.isSummoner) || match.redTeamScore.find(hero => hero.isSummoner);

            match.isWinner = (match.winner === 'RED' && match.redTeamScore.filter(hero => hero.isSummoner).length > 0) ||
              (match.winner === 'BLUE' && match.blueScore.filter(hero => hero.isSummoner).length > 0);

            match.currentPlayer = player;
            if (player) {
              totalScore += player.score || 0;
              playerCount++;
            }
            return match;
          });
        }),
        tap(() => {
          if (playerCount > 0) {
            this.average = totalScore / playerCount;
          }
          console.log(this.average);
        })
      );
    });
  }

  getValueByScore(score: number) {
    if (score >= 9) return 'high';
    if (score >= 7.5) return 'good';
    if (score >= 6) return 'normal';
    if (score >= 4.5) return 'low';
    return 'verylow';
  }

  findQueue(queueId: number) {
    return queues.find(queue => queue.queueId == queueId);
  }

}
