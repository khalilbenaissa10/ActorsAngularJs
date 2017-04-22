import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {PopupModule} from 'ng2-opd-popup';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movie/movies.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieItemComponent } from './movie/movie-list/movie-item.component';
import { ActorsComponent } from './actor/actors.component';
import { ActorListComponent } from './actor/actor-list/actor-list.component';
import { ActorItemComponent } from './actor/actor-list/actor-item.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    MoviesComponent,
    MovieListComponent,
    MovieItemComponent,
    ActorsComponent,
    ActorListComponent,
    ActorItemComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PopupModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
