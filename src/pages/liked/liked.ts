import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Video } from '../../models/video-model';
import { FakeData3 } from '../../models/fake-data/fake-data3';

@Component({
  selector: 'page-liked',
  templateUrl: 'liked.html'
})
export class LikedPage {

    videos:Array<Video>
  constructor(public navCtrl: NavController) {
    var fakedata3 = new FakeData3();
    this.videos = fakedata3.init();
  }

}
