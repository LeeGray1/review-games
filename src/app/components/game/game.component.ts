import { Component, OnInit } from '@angular/core';
import { RAWGApiService } from 'src/app/services/rawg-api.service';
import { FormControl, Validators } from "@angular/forms";
import { GameCollection, Game } from 'src/app/interfaces/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  searchText = new FormControl('', Validators.required);
  games: Game[];
  gameImageWidth: number = 300;
  gameImageHeight: number = 150;
  constructor(private RawgApiService: RAWGApiService) { }

  ngOnInit(): void {
  }
  searchForGames() {
    this.RawgApiService.getGamesFromString(this.searchText.value).subscribe((result: GameCollection) => {
      this.games = result.results;
      return this.games;
    });
  }

}
