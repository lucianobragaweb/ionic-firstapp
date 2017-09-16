import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public userName:string = "Luciano";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public sumNums(n1:number, n2:number): void{
    alert(n1 + n2)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    // this.sumNums(5, 10);
  }

}
