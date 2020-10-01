import { Component } from '@angular/core';
import { BuygearComponent } from './components/buygear/buygear.component'
import { DonategearComponent } from './components/donategear/donategear.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'collegeGear';
  homeTab = true;
  findTab = false;
  donateTab = false;

  switchTab(str){
    if(str == 'home'){
      this.findTab = false;
      this.donateTab = false;
      this.homeTab = true;

    } else if(str == 'find'){
      this.findTab = true;
      this.donateTab = false;
      this.homeTab = false;

    } else if(str == 'donate'){
      this.findTab = false;
      this.donateTab = true;
      this.homeTab = false;
    }
  }

}
