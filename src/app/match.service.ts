import { HttpClient } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface PlayerScore {
  summonerName: string;
  puuid: string;
  championName: string;
  score: number;
  isSummoner: boolean;
  position: Position;
  champLevel: number;
  region: string;
  tagLine: string;
  gameName: string;
}

export interface MatchScore {
  blueScore: PlayerScore[],
  redTeamScore: PlayerScore[],
  queueId: number;
  matchId: string;
  winner: "RED" | "BLUE"
  gameStartTimestamp: number;
  gameEndTimestamp: number;
  currentPlayer?: PlayerScore;
  isWinner?: boolean;
}

export type Position = "" | "Invalid" | "TOP" | "JUNGLE" | "MIDDLE" | "BOTTOM" | "UTILITY";

export enum Regions {
  BRAZIL = "BR1",
  EU_EAST = "EUN1",
  EU_WEST = "EUW1",
  KOREA = "KR",
  LAT_NORTH = "LA1",
  LAT_SOUTH = "LA2",
  AMERICA_NORTH = "NA1",
  OCEANIA = "OC1",
  TURKEY = "TR1",
  RUSSIA = "RU",
  JAPAN = "JP1",
  VIETNAM = "VN2",
  TAIWAN = "TW2",
  THAILAND = "TH2",
  SINGAPORE = "SG2",
  PHILIPPINES = "PH2",
  MIDDLE_EAST = "ME1",
  PBE = "PBE1"
}

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  apiUrl = 'https://app.lolstats.gg'
  private httpClient = inject(HttpClient);
  matchHistory: MatchScore[] = []

  constructor() { }

  getMatchScore(matchId: string, puuid: string): Observable<MatchScore> {
    return this.httpClient.get<MatchScore>(`${this.apiUrl}/match?matchId=${matchId}&puuid=${puuid}`)
  }

  GetLastMatches(gameName: string, tagLine: string, region: string): Observable<MatchScore[]> {
    return this.httpClient.get<MatchScore[]>(`${this.apiUrl}/last-matches?gameName=${gameName}&tagLine=${tagLine}&region=${region}`)
  }
}
