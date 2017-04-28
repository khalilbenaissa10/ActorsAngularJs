import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import {Movie} from './movie';

@Injectable()
export class MovieService {

  endpoint_url:string = "https://blooming-reef-37299.herokuapp.com/movies";
  private headers = new Headers({'Content-Type': 'application/json'});



    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  constructor(private http:Http) { }



    getMovies(){
       return this.http.get(this.endpoint_url).map(res => res.json());
    }

    addMovie (body: Object): Promise<Movie> {
        return  this.http
              .post(this.endpoint_url, JSON.stringify(body), {headers: this.headers})
              .toPromise()
              .then(res => res.json().data)
              .catch(this.handleError);
    }   

    deleteMovie(id: number): Promise<void> {
  const url = `${this.endpoint_url}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}
}
