import { Injectable } from '@angular/core';
import { Photo } from '../domain/photodomain';

@Injectable()
export class PhotoService {
  private carsImages: Photo[] = [
    {
      itemImageSrc: 'https://example.com/images/cars/car1-large.jpg',
      thumbnailImageSrc: 'https://example.com/images/cars/car1-thumb.jpg',
      alt: 'Coche deportivo rojo',
      title: 'Deportivo rojo',
    },
    {
      itemImageSrc: 'https://example.com/images/cars/car2-large.jpg',
      thumbnailImageSrc: 'https://example.com/images/cars/car2-thumb.jpg',
      alt: 'Coche clásico azul',
      title: 'Clásico azul',
    },
    {
      itemImageSrc: 'https://example.com/images/cars/car3-large.jpg',
      thumbnailImageSrc: 'https://example.com/images/cars/car3-thumb.jpg',
      alt: 'SUV negro moderno',
      title: 'SUV negro',
    },
    {
      itemImageSrc: 'https://example.com/images/cars/car4-large.jpg',
      thumbnailImageSrc: 'https://example.com/images/cars/car4-thumb.jpg',
      alt: 'Coche eléctrico blanco',
      title: 'Eléctrico blanco',
    },
    {
      itemImageSrc: 'https://example.com/images/cars/car5-large.jpg',
      thumbnailImageSrc: 'https://example.com/images/cars/car5-thumb.jpg',
      alt: 'Convertible amarillo brillante',
      title: 'Convertible amarillo',
    },
  ];

  private natureImages: Photo[] = [];

  getImages(context?: string): Promise<Photo[]> {
    return new Promise((resolve) => {
      switch (context) {
        case 'template':
          resolve(this.carsImages);
          break;
        default:
          resolve(this.carsImages);
          break;
      }
    });
  }
}
