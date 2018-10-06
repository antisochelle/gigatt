import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF } from "ngx-image-gallery";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  photos = [[],[],[],[]];
  allPhotos = [];

  displayModal: boolean;
  modalImg: string;

  constructor() { }

  ngOnInit() {
    for (var file = 1; file <= 84; file++) {
      var fileName = 'assets/gallery/gallery(' + file + ').jpg';
      if (file % 4 === 1) { this.photos[0].push(fileName); }
      else if (file % 4 === 2) { this.photos[1].push(fileName); }
      else if (file % 4 === 3) { this.photos[2].push(fileName); }
      else { this.photos[3].push(fileName); }
      this.allPhotos.push(fileName);
    }
    // console.log(this.photos);
    // console.log(this.allPhotos);
  }

  active(photo) {
    if (photo === this.modalImg) {
      console.log(photo);
      return true;
    }
    return false;
  }

  showImage(photo) {
    this.modalImg = photo;
    // console.log(this.modalImg);
  }

  closeImage() {
    this.displayModal = false;
  }

  printIndex(i, j) {
    console.log(4 * j + i);
  }
}