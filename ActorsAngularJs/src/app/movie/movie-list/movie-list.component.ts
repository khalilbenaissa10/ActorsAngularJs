import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import {MovieService} from '../movie.service';  

@Component({
  selector: 'rb-movie-list',
  templateUrl: './movie-list.component.html'
})
export class MovieListComponent implements OnInit {

  

movies:Movie[];

  constructor(private movieService:MovieService) { }

  ngOnInit() {
    console.log("message from ngoninit");
    
    this.movies = [];
        this.movieService.getMovies()
         .subscribe(
            data => {this.movies = data ;
                  }
         );
        

         
        
  }





  public doSomething() {
       console.log("hello from dosomething");
        location.reload();
    }

}
