import { Routes } from '@angular/router';
import {TodoListComponent} from "./todo-list/todo-list.component";
import {TodoDetailComponent} from "./todo-detail/todo-detail.component";
import {TodoNewComponent} from "./todo-new/todo-new.component";
import { NewTournamentComponent } from './new-tournament/new-tournament.component';
import { TournamentListComponent } from './tournament-list/tournament-list.component';

export const routes: Routes = [
  {path:'list', component: TodoListComponent},
  {path:'new', component: TodoNewComponent},
  {path:'todo-detail/:id', component: TodoDetailComponent},
  {path:'new-tournament', component: NewTournamentComponent},
  {path:'tournamentList', component: TournamentListComponent}
];
