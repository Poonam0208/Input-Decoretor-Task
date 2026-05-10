import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostDashboardComponent } from './shared/component/post-dashboard/post-dashboard.component';
import { PostCardComponent } from './shared/component/post-card/post-card.component';
import { MobileDashboardComponent } from './shared/component/mobile-dashboard/mobile-dashboard.component';
import { MobileCardComponent } from './shared/component/mobile-card/mobile-card.component';
import { MovieDashboardComponent } from './shared/component/movie-dashboard/movie-dashboard.component';
import { MovieCardComponent } from './shared/component/movie-card/movie-card.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
    PostDashboardComponent,
    PostCardComponent,
    MobileDashboardComponent,
    MobileCardComponent,
    MovieDashboardComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
