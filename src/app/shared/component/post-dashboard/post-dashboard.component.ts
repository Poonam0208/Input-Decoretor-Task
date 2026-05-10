import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../model/post';
import { PostData } from '../../const/post';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

  postArr : Array<Ipost> = []

  constructor() { }

  ngOnInit(): void {
    //ApI Call For POSt
    this.postArr = PostData
  }

  TrackByPostId(index : number, post : Ipost){
    return post.id
  }
}
