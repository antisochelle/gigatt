import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  video;
  modalImg: string;
  displayModal: boolean;

  constructor() {
  }

  ngOnInit() {
  	this.video = document.getElementById('avp');
  }

  showControls() {
  	this.video.controls = true;
  }

  hideControls() {
  	this.video.controls = false;
  }

  showImage(image) {
    this.modalImg = image;
  }
}
