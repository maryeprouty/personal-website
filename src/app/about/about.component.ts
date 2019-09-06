import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow/src/app/modules/slideshow/IImage';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public imagesUrl: IImage[];

  constructor() { }

  ngOnInit() {
    this.imagesUrl = [
      {url: '../assets/coffee.jpg', caption: 'Modeling attack tactics with a cup a joe'},
      {url: '../assets/pounce.png', caption: 'Level one of my Gameboy game Pounce!'},
      {url: '../assets/running.jpg', caption: 'Racing for GT at the Roy Griak Invitational'}
    ];
  }

}
