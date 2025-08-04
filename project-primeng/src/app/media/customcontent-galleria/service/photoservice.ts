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
      {
        itemImageSrc: 'https://picsum.photos/id/1020/800/600',
        thumbnailImageSrc: 'https://picsum.photos/id/1020/150/100',
        alt: 'Image 5',
        title: 'Image 5 Title',
      },
    ]);
  }
}
