import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Video } from '../../models/video-model';
import { DetailPage } from '../../pages/detail/detail';

@Component({
    selector: 'video-item',
    templateUrl: 'video-item.component.html'
  })

  export class VideoItem {
      @Input()
      item: Video;
      constructor(public navCtrl: NavController){
          
      }
      pushPage(){
        this.navCtrl.push(DetailPage, {
        id: this.item.id,
        title: this.item.title,
        viewCount: this.item.viewCount
        });
      }
  }