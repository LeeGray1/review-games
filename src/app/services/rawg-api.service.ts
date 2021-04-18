import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { GameCollection } from 'src/app/interfaces/game'


@Injectable({
  providedIn: 'root'
})
export class RAWGApiService {

  private readonly allGamesUrl;
  private readonly searchGameUrl


  constructor(private _http: HttpClient) {
    this.allGamesUrl = 'https://api.rawg.io/api/games?key=3b175269f391429c90d752b37844f3c7';
    this.searchGameUrl = 'https://api.rawg.io/api/games?key=3b175269f391429c90d752b37844f3c7&page_size=1S&search=';
  }
  public getAllGames(): Observable<GameCollection[]> {
    return this._http.get<GameCollection[]>(this.allGamesUrl);
  }

  public getGamesFromString(name: string): Observable<GameCollection> {
    return this._http.get<GameCollection>(this.searchGameUrl + name);
  }

}
