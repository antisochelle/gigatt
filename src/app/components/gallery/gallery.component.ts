import { Component,  OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  photos = [[], [], [], []];
  allPhotos = [];

  modal;
  modalImg: string;

  constructor() { }

  ngOnInit() {
    const numberOfPhotos = 109;
    for (let file = 1; file <= numberOfPhotos; file++) {
      const fileName = 'assets/gallery/gallery(' + file + ').jpg';
      if (file % 4 === 1) {
        this.photos[0].push(fileName);
      } else if (file % 4 === 2) {
       this.photos[1].push(fileName);
      } else if (file % 4 === 3) {
        this.photos[2].push(fileName);
      } else {
        this.photos[3].push(fileName);
      }
      this.allPhotos.push(fileName);
    }
    // console.log(this.photos);
    // console.log(this.allPhotos);

    this.modal = document.getElementById('myModal');
  }

  active(photo) {
    // console.log(this.modal);

    if (photo === this.modalImg) {
      // console.log('Active', photo);
      return true;
    }
    return false;
  }

  closeModal() {
    const active = document.getElementsByClassName('active')[0];
    active.classList.remove('active');
    this.modalImg = '';
  }

  printIndex(i, j) {
    console.log(4 * j + i);
  }

  showImage(photo) {
    this.modalImg = photo;
    this.modal.click(); // Open modal
  }
}
