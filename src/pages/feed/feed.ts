import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public userName:string = "Luciano";

  public objFeed = {
    name: "Luciano Braga",
    date: '07 de Setembro, 2017',
    description: "Meu post de Notícia",
    img: "",
    likes: 50,
    comments: 4
  }

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
