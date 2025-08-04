import { Component, OnInit, signal } from '@angular/core';
import { PhotoService } from './service/photoservice';
import { GalleriaModule } from 'primeng/galleria';
import { CommonModule } from '@angular/common';
import { Photo } from './domain/photodomain';

@Component({
  selector: 'app-hoverevent-galleria',
  standalone: true,
  imports: [CommonModule, GalleriaModule],
  providers: [PhotoService],
  templateUrl: './hoverevent-galleria.html',
  styleUrl: './hoverevent-galleria.css',
})
export class HovereventGalleria implements OnInit {
  images = signal<Photo[]>([]);

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.getImages().then((data) => {
      this.images.set(data);
    });
  }
}
