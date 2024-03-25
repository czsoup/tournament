import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export interface Tournament {
  id: number;
  name: string;
}

export class TournamentService {


  constructor(private httpClient: HttpClient) {
    console.log('TodoService.constructor()');
    console.log('Calling http GET/api/tournament ... subscribe to async response');
    this.httpClient.get('/api/tournament').subscribe(resp=>{
      console.log('Finished http GET /api/tournament', resp);
    }, err => {
      console.log('Failed http GET /api/tournament', err);
    }
   )};

  findAll(){
    return null;
  }
  saveNew(src: ){

  }

}
