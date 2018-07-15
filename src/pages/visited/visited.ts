import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Video } from '../../models/video-model';
import { FakeData2 } from '../../models/fake-data/fake-data2';

@Component({
  selector: 'page-visited',
  templateUrl: 'visited.html'
})
export class VisitedPage {

  videos: Array<Video>
  pageTitle: string = "پربازدیدترین ها";
  constructor(public navCtrl: NavController) {
    var fakedata2 = new FakeData2();
    this.videos = fakedata2.init();
  }

}
