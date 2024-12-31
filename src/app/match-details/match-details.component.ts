import { SeoService } from './../seo.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { AsyncPipe, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { MatchScore, MatchService } from '../match.service';
import { ProgressionBarComponent } from "../progression-bar/progression-bar.component";
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { queues } from '../constants';
import { DurationPipe } from '../duration.pipe';
import { GameNamePipe } from "../game-name.pipe";

@Component({
  selector: 'app-match-details',
  standalone: true,
  imports: [NgFor, NgIf, ProgressionBarComponent, AsyncPipe, RouterLink, DurationPipe, GameNamePipe],
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss'],
})
export class MatchDetailsComponent {

  matchDetails$: Observable<MatchScore> = new Observable();
  puuid: string = '';


  public gameName: string = '';
  public tagLine: string = '';
  public region: string = '';


  constructor(
    private route: ActivatedRoute,
    private matchService: MatchService,
    private seoService: SeoService,
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const matchID = params['matchId'];
      this.puuid = params['puuid'];

      this.gameName = params['gameName'];
      this.tagLine = params['tagLine'];
      this.region = params['region'];

      this.matchDetails$ = this.matchService.getMatchScore(matchID, this.puuid);
    });
  }

  findQueue(queueId: number) {
    return queues.find(queue => queue.queueId == queueId);
  }

}
