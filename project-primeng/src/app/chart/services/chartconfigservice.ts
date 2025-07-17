import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private transitionDone = signal(false);

  constructor() {
    setTimeout(() => this.transitionDone.set(true), 500);
  }

  transitionComplete() {
    return this.transitionDone();
  }
}
