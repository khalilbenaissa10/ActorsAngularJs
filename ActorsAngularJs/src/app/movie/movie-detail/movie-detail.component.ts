import { Component, ViewChild,Input } from '@angular/core';
import {Popup} from 'ng2-opd-popup';

import {Movie} from '../movie'

@Component({
  selector: 'rb-movie-detail',
  templateUrl: './movie-detail.component.html',
  styles: [`.khalil li {
              display:inline ;margin-right:5px ;
  }`]
})
export class MovieDetailComponent  {

 @ViewChild('popup1') popup1: Popup;

@Input()
 movie : Movie;

  constructor() { }


 ClickButton(movie : Movie){

    this.movie = movie ; 
     this.popup1.options = {
    header: "Details du film : ",
    color: "black", // red, blue.... 
    widthProsentage: 60, // The with of the popou measured by browser width 
    animationDuration: 1, // in seconds, 0 = no animation 
    showButtons: true, // You can hide this in case you want to use custom buttons 
    confirmBtnContent: "Delete", // The text on your confirm button 
    cancleBtnContent: "Cancel", // the text on your cancel button 
    confirmBtnClass: "btn btn-danger", // your class for styling the confirm button 
    cancleBtnClass: "btn btn-warning", // you class for styling the cancel button 
    animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
};
    
    this.popup1.show(this.popup1.options);
  }
  
}
