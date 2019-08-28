import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public imagesUrl;

  constructor() { }

  ngOnInit() {
    this.imagesUrl = [
      '../assets/coffee.jpg', '../assets/pounce.png',
      '../assets/running.jpg'
    ];
  }

}
