import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF } from "ngx-image-gallery";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  poolPhotos = [];
  roomPhotos = [];
  eventPhotos = [];
  leisurePhotos = [];
  activityPhotos = [];

  // titles = ['Pools & Cottages',
  //   'Rooms',
  //   'Event Areas',
  //   'Leisure Park & Mini Zoo',
  //   'Activity Areas'  
  // ]

  displayModal: boolean;
  imgIndex: number;
  modalImg: string;

  constructor() { }

  ngOnInit() {
    // generate photos for each list
    this.generatePhotos(this.poolPhotos, 'pool', 6);
    this.generatePhotos(this.roomPhotos, 'room', 26)
    console.log(this.poolPhotos);
  }

  generatePhotos(photoList, folder, total) {
    var arr: string[] = [];
    for (var i = 1; i <= total; i++) {
      arr.push('assets/' + folder + '/' + folder + '(' + String(i) + ').JPG');
      if (i % 6 === 0) {
        photoList.push(arr);
        arr = [];
      }
    }
  }

  showImage(photo, index) {
    this.modalImg = photo;
    this.imgIndex = index;
    console.log(this.modalImg);
    console.log(this.imgIndex);
  }

  closeImage() {
    this.displayModal = false;
  }
}