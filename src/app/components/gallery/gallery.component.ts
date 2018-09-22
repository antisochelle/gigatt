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

  displayModal: boolean;
  imgIndex: number;
  modalImg: string;

  constructor() { }

  ngOnInit() {
    // generate photos for each list
    // this.generatePhotos(this.poolPhotos, 'pool', 10);
    // this.generatePhotos(this.roomPhotos, 'room', 26)
    // console.log(this.poolPhotos);

    for (var i = 1; i <= 10; i++) {
      this.poolPhotos.push('assets/pool/pool(' + i + ').jpg');
    }
    for (var i = 1; i <= 13; i++) {
      this.eventPhotos.push('assets/event/event(' + i + ').jpg');
    }
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

  showImage(photo) {
    this.modalImg = photo;
    // this.imgIndex = index;
    // console.log(this.modalImg);
    // console.log(this.imgIndex);
  }

  closeImage() {
    this.displayModal = false;
  }
}