import { Component, OnInit } from '@angular/core';
import { PhotoService } from './service/photoservice';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { Photo } from './domain/photodomain';

@Component({
  selector: 'app-controlled-galleria',
  standalone: true,
  imports: [GalleriaModule, ButtonModule],
  providers: [PhotoService],
  templateUrl: './controlled-galleria.html',
  styleUrl: './controlled-galleria.css',
})
export class ControlledGalleria implements OnInit {
  images: Photo[] = [];
  _activeIndex: number = 0;

  get activeIndex(): number {
    return this._activeIndex;
  }

  set activeIndex(newValue: number) {
    if (this.images && newValue >= 0 && newValue < this.images.length) {
      this._activeIndex = newValue;
    }
  }

  responsiveOptions = [
    {
      breakpoint: '1300px',
      numVisible: 4,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
    },
  ];

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.getImages().then((images) => {
      this.images = images;
    });
  }

  next() {
    this.activeIndex++;
  }

  prev() {
    this.activeIndex--;
  }
}
