import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TournamentListComponent } from './tournament-list/tournament-list.component';
import { NewTournamentComponent } from './new-tournament/new-tournament.component';

@NgModule({
    declarations:[
        AppComponent, TournamentListComponent, NewTournamentComponent
    ]