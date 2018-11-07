import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})

export class AboutPage {

  items = [

  ];

  constructor(private navCtrl: NavController) {
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  newNote(){
    this.navCtrl.parent.select(0);
  }

}
