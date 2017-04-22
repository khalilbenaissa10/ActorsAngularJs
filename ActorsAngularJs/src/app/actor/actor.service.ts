import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ActorService {

  endpoint_url:string = "https://blooming-reef-37299.herokuapp.com/actors";

  constructor(private http:Http) { }


    getActors(){
       console.log("message from service actor");
       return this.http.get(this.endpoint_url).map(res => res.json());
    }
}
