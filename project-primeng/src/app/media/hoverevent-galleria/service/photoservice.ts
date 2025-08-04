import { Injectable } from '@angular/core';
import { Photo } from '../domain/photodomain';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor() {}

  getImages(): Promise<Photo[]> {
    return Promise.resolve([
      {
        itemImageSrc: 'https://picsum.photos/id/1024/800/600',
        thumbnailImageSrc: 'https://picsum.photos/id/1024/150/100',
        alt: 'Beach landscape',
        title: 'Relaxing Beach',
      },
      {
        itemImageSrc: 'https://picsum.photos/id/1035/800/600',
        thumbnailImageSrc: 'https://picsum.photos/id/1035/150/100',
        alt: 'City skyline',
        title: 'City Lights',
      },
      {
        itemImageSrc: 'https://picsum.photos/id/1043/800/600',
        thumbnailImageSrc: 'https://picsum.photos/id/1043/150/100',
        alt: 'Snowy forest',
        title: 'Winter Forest',
      },
      {
        itemImageSrc: 'https://picsum.photos/id/1052/800/600',
        thumbnailImageSrc: 'https://picsum.photos/id/1052/150/100',
        alt: 'Desert sunset',
        title: 'Desert Dusk',
      },
      {
        itemImageSrc: 'https://picsum.photos/id/1069/800/600',
        thumbnailImageSrc: 'https://picsum.photos/id/1069/150/100',
        alt: 'Mountain trail',
        title: 'Hiking Path',
      },
      {
        itemImageSrc: 'https://picsum.photos/id/1084/800/600',
        thumbnailImageSrc: 'https://picsum.photos/id/1084/150/100',
        alt: 'Ocean cliff',
        title: 'Cliffside Ocean',
      },
      {
        itemImageSrc: 'https://picsum.photos/id/1081/800/600',
        thumbnailImageSrc: 'https://picsum.photos/id/1081/150/100',
        alt: 'Rainy street',
        title: 'Urban Rain',
      },
    ]);
  }
}
