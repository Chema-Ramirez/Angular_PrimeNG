import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { CommonModule } from '@angular/common';
import { PhotoService } from './service/photoservice';
import { Photo } from './domain/photodomain';

@Component({
  selector: 'app-customcontent-galleria',
  standalone: true,
  imports: [GalleriaModule, CommonModule],
  providers: [PhotoService],
  templateUrl: './customcontent-galleria.html',
  styleUrl: './customcontent-galleria.css',
})
export class CustomcontentGalleria implements OnInit {
  displayCustom: boolean = false;
  activeIndex: number = 0;

  images: Photo[] = [];

  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 5 },
    { breakpoint: '768px', numVisible: 3 },
    { breakpoint: '560px', numVisible: 1 },
  ];

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.getImages().then((images) => {
      this.images = images;
    });
  }

  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }
}
