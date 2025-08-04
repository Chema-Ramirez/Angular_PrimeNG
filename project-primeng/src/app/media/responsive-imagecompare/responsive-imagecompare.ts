import { Component, OnInit, signal } from '@angular/core';
import { PhotoService } from './service/photoservice';
import { GalleriaModule, GalleriaResponsiveOptions } from 'primeng/galleria';
import { Photo } from './domain/photodomain';

@Component({
  selector: 'app-responsive-imagecompare',
  standalone: true,
  imports: [GalleriaModule],
  providers: [PhotoService],
  templateUrl: './responsive-imagecompare.html',
  styleUrl: './responsive-imagecompare.css',
})
export class ResponsiveImagecompare implements OnInit {
  images = signal<Photo[]>([]);

  responsiveOptions: GalleriaResponsiveOptions[] = [
    { breakpoint: '1300px', numVisible: 4 },
    { breakpoint: '575px', numVisible: 1 },
  ];

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService
      .getImages('responsive')
      .then((images) => this.images.set(images));
  }
}
