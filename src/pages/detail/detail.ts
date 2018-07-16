import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  id;
  title;
  viewCount;
  constructor(private navParams: NavParams) {
    
    this.id = navParams.get('id');
    this.title = navParams.get('title');
    this.viewCount = navParams.get('viewCount');
 }

}