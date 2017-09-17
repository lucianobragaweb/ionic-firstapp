import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseAPI = 'https://api.themoviedb.org/3';
  private apiKey = '0d3b7def99b85d02456e98cbd8113027';

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  makeURL(url){
    return this.baseAPI + url + '?api_key=' + this.apiKey
  }

  getLatestMovie(){
    return this.http.get(this.makeURL('/movie/latest'));
  }

  getLatestPopularMovies(){
    return this.http.get(this.makeURL('/movie/popular'));
  }

}
