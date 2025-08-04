import { Injectable } from '@angular/core';
import { Photo } from '../domain/photodomain';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor() {}

  getImages(context: 'custom' | 'hover' | 'responsive'): Promise<Photo[]> {
    switch (context) {
      case 'custom':
        return Promise.resolve([
          {
            itemImageSrc: 'https://picsum.photos/id/1015/800/600',
            thumbnailImageSrc: 'https://picsum.photos/id/1015/150/100',
            alt: 'Image 1',
            title: 'Image 1 Title',
          },
          {
            itemImageSrc: 'https://picsum.photos/id/1016/800/600',
            thumbnailImageSrc: 'https://picsum.photos/id/1016/150/100',
            alt: 'Image 2',
            title: 'Image 2 Title',
          },
          {
            itemImageSrc: 'https://picsum.photos/id/1018/800/600',
            thumbnailImageSrc: 'https://picsum.photos/id/1018/150/100',
            alt: 'Image 3',
            title: 'Image 3 Title',
          },
          {
            itemImageSrc: 'https://picsum.photos/id/1019/800/600',
            thumbnailImageSrc: 'https://picsum.photos/id/1019/150/100',
            alt: 'Image 4',
            title: 'Image 4 Title',
          },
        ]);
      case 'hover':
        return Promise.resolve([
          {
            itemImageSrc: 'https://picsum.photos/id/1024/800/600',
            thumbnailImageSrc: 'https://picsum.photos/id/1024/150/100',
            alt: 'Beach',
            title: 'Relaxing Beach',
          },
          {
            itemImageSrc: 'https://picsum.photos/id/1035/800/600',
            thumbnailImageSrc: 'https://picsum.photos/id/1035/150/100',
            alt: 'City',
            title: 'City Lights',
          },
          {
            itemImageSrc: 'https://picsum.photos/id/1043/800/600',
            thumbnailImageSrc: 'https://picsum.photos/id/1043/150/100',
            alt: 'Forest',
            title: 'Winter Forest',
          },
        ]);
      case 'responsive':
        return Promise.resolve([
          {
            itemImageSrc: 'https://picsum.photos/id/110/800/600',
            thumbnailImageSrc: 'https://picsum.photos/id/110/150/100',
            alt: 'Old Bridge',
            title: 'Historic Bridge',
          },
          {
            itemImageSrc: 'https://picsum.photos/id/111/800/600',
            thumbnailImageSrc: 'https://picsum.photos/id/111/150/100',
            alt: 'Downtown',
            title: 'City Center',
          },
          {
            itemImageSrc: 'https://picsum.photos/id/112/800/600',
            thumbnailImageSrc: 'https://picsum.photos/id/112/150/100',
            alt: 'Calm Lake',
            title: 'Lake Reflection',
          },
          {
            itemImageSrc: 'https://picsum.photos/id/113/800/600',
            thumbnailImageSrc: 'https://picsum.photos/id/113/150/100',
            alt: 'Countryside road',
            title: 'Country Path',
          },
        ]);
      default:
        return Promise.resolve([]);
    }
  }
}
