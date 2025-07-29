import { Injectable } from '@angular/core';
import { Photo } from '../domain/photodomain';

@Injectable()
export class PhotoService {
  constructor() {}

  getImages(): Promise<Photo[]> {
    return Promise.resolve([
      {
        itemImageSrc:
          'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&h=800&q=80',
        thumbnailImageSrc:
          'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&h=200&q=60',
        alt: 'Mountain landscape at sunset',
        title: 'Sunset Mountains',
      },
      {
        itemImageSrc:
          'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&h=800&q=80',
        thumbnailImageSrc:
          'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=300&h=200&q=60',
        alt: 'Forest with sun rays',
        title: 'Sunlight in Forest',
      },
      {
        itemImageSrc:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=800&q=80',
        thumbnailImageSrc:
          'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&h=200&q=60',
        alt: 'Beach at sunrise',
        title: 'Beach Sunrise',
      },
      {
        itemImageSrc:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&h=800&q=80',
        thumbnailImageSrc:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&h=200&q=60',
        alt: 'Lake in the forest',
        title: 'Forest Lake',
      },
      {
        itemImageSrc:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&h=800&q=80',
        thumbnailImageSrc:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=300&h=200&q=60',
        alt: 'Cliffs over the ocean',
        title: 'Cliffside Coast',
      },
    ]);
  }
}
