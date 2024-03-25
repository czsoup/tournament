import { Component } from '@angular/core';
import {TodoService} from "../todo.service";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";
import { TournamentService } from '../tournament.service';
import { TournamentModel } from '../TournamentModel';

@Component({
  selector: 'app-tournament-list',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './tournament-list.component.html',
})
export class TournamentListComponent {
  constructor(public tournamentService: TournamentService) {
  }
  tournaments: TournamentModel[]=[];
  


}
