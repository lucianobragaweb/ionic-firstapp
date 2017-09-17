import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfigProvider {

  private config = {
    showSlide: false
  }

  constructor() {
    console.log('Hello ConfigProvider Provider');
  }

  getConfig(): any{

    return localStorage.getItem('config');

  }

  setConfig(showSlide?: boolean): any{
    let config = {
      showSlide: false
    };

    if(showSlide){
      config.showSlide = showSlide;
    }

    localStorage.setItem('config', JSON.stringify(config));
  }

}
