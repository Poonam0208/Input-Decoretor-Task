import { Component, OnInit } from '@angular/core';
import { Imobile } from '../../model/mobile';
import { mobileData } from '../../const/mobile';

@Component({
  selector: 'app-mobile-dashboard',
  templateUrl: './mobile-dashboard.component.html',
  styleUrls: ['./mobile-dashboard.component.scss']
})
export class MobileDashboardComponent implements OnInit {

  mobileArr : Array<Imobile> = []

  constructor() { }

  ngOnInit(): void {
    //API CALL MOBILE 
    this.mobileArr = mobileData
  }
 
  TrackById(index : number, mobile: Imobile){
    return mobile.id
  }
}
