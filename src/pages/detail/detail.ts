import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  id;
  constructor(private navParams: NavParams) {
    
    this.id = navParams.get('id');

 }

}