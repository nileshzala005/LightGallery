import { Component, OnInit } from '@angular/core';
declare var lightGallery: any;

@Component({
  selector: 'app-lightgallery',
  templateUrl: './lightgallery.component.html',
  styleUrls: ['./lightgallery.component.css']
})
export class LightgalleryComponent implements OnInit {
  lg: any;

  constructor() { }

  ngOnInit(): void {
  }
  showSlideShow() {
    this.lg = lightGallery(document.getElementById('lightgallery'), {
      dynamic: true,
      download: true,
      fullScreen: true,
      autoplay: false,
      dynamicEl: [{
        src: "https://dummyimage.com/16:9x1080/"
      }, {
        src: "https://dummyimage.com/16:9x800/"
      }, {
        src: "https://dummyimage.com/16:9x1080/"
      }, {
        href: "https://www.youtube.com/watch?v=meBbDqAXago"
      }]
    });
  }
  destroy() {

    this.lg.destroy(true);
  }
}
