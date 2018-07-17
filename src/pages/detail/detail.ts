import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HTTP} from '@ionic-native/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Video } from '../../models/video-model';
import { FakeData4 } from '../../models/fake-data/fake-data4';
import { Comment } from '../../models/comment-model';
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  id;
  detail: Video = new Video();
  videocomments: Array<Comment>;
  constructor(private navParams: NavParams, private http: HttpClient) {

    this.id = navParams.get('id');
     this.http.get<Video>("/assets/data/data.json").subscribe(data => {
      this.detail = data
        //this.posts = data.data.children;
    });


    
    var fakedata = new FakeData4();
    this.videocomments = fakedata.init();
 }

}