import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { AsyncPipe, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { MatchScore, MatchService } from '../match.service';
import { ProgressionBarComponent } from "../progression-bar/progression-bar.component";
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { queues } from '../constants';

@Component({
  selector: 'app-match-details',
  standalone: true,
  imports: [NgFor, NgIf, ProgressionBarComponent, AsyncPipe],
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss'],
})
export class MatchDetailsComponent {

  matchDetails$: Observable<MatchScore> = new Observable();
  puuid: string = '';

  constructor(
    private route: ActivatedRoute,
    private matchService: MatchService
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const matchID = params['matchId'];
      this.puuid = params['puuid'];
      this.matchDetails$ = this.matchService.getMatchScore(matchID, this.puuid);
    });
  }

  findQueue(queueId: number) {
    return queues.find(queue => queue.queueId == queueId);
  }

}
