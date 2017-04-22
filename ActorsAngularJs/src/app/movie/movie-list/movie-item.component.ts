import { Component, Input,OnInit } from '@angular/core';

import {Movie} from '../movie';
import {MovieDetailComponent} from '../movie-detail/movie-detail.component';

@Component({
  selector: 'rb-movie-item',
  templateUrl: './movie-item.component.html',
  styles: [`imagess src `]
})
export class MovieItemComponent implements OnInit {

    @Input()  movie:Movie ;

    selectedMovie : Movie ;   

    @Input() detail:MovieDetailComponent;
     

  constructor() { }

  ngOnInit() {
  }



  cliquer(movie : Movie){
    console.log("cliquer !!");
    this.selectedMovie = movie;
    this.detail.ClickButton(this.selectedMovie);
    
  }

  
}
