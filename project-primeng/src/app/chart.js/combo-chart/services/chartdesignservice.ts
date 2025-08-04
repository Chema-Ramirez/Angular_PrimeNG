import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DesignerService {
  private currentPreset = signal(true);

  constructor() {}

  preset() {
    return this.currentPreset();
  }
}
