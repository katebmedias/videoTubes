import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Video } from '../../models/video-model';
import { FakeData1 } from '../../models/fake-data/fake-data1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  videos: Array<Video>
  pageTitle: string = "صفحه اصلی"
  constructor(public navCtrl: NavController) {

    var fakedata = new FakeData1();
    this.videos = fakedata.init();

  }

}
