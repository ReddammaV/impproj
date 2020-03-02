import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.scss']
})
export class FlexComponent implements OnInit {
  // @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  
  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  // slideConfig = { "slidesToShow": 3, "slidesToScroll": 3, "dots": true,  "infinite": true }; 
  // slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
  slideConfig = {"slidesToShow": 2, "slidesToScroll": 1, "dots": true};

  
  constructor() { }

  ngOnInit() {
  }

  // for carousel
  // next() {
  //   this.slickModal.slickNext();
  // }
  
  // prev() {
  //   this.slickModal.slickPrev();
  // }
  // for carousel

  
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }
  

}
