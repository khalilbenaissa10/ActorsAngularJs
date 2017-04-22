import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService {

  endpoint_url:string = "https://blooming-reef-37299.herokuapp.com/movies";

  constructor(private http:Http) { }


    getMovies(){
       console.log("message from service");
       return this.http.get(this.endpoint_url).map(res => res.json());
    }
}
