import { Component, OnInit } from '@angular/core';

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

  modalImg: string;
  displayModal: boolean;

  constructor() { }

  ngOnInit() {
    // generate photos for each list
    this.generatePhotos(this.poolPhotos, 'pool', 24);
    this.generatePhotos(this.roomPhotos, 'room', 26)
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

  showImage(image) {
    this.modalImg = image;
  }

  closeImage() {
    this.displayModal = false;
  }

}
