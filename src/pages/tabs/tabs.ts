import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { VisitedPage } from '../visited/visited';
import { LikedPage } from '../liked/liked';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = VisitedPage;
  tab3Root = LikedPage;

  constructor() {

  }
}
