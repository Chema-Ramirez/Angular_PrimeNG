import {
  Component,
  OnDestroy,
  OnInit,
  Inject,
  ChangeDetectorRef,
  ViewChild,
  PLATFORM_ID,
} from '@angular/core';
import { Galleria } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { PhotoService } from './service/photoservice';
import { Photo } from './domain/photodomain';

@Component({
  selector: 'app-template-galleria',
  templateUrl: './template-galleria.html',
  styleUrls: ['./template-galleria.css'],
  styles: [
    `
      :host ::ng-deep {
        .custom-galleria {
          &.p-galleria {
            &.fullscreen {
              display: flex;
              flex-direction: column;

              .p-galleria-content {
                flex-grow: 1;
                justify-content: center;
              }
            }
          }
        }
      }
    `,
  ],
  standalone: true,
  imports: [ButtonModule, GalleriaModule],
  providers: [PhotoService],
})
export class TemplateGalleria implements OnInit, OnDestroy {
  images: Photo[] = [];

  showThumbnails: boolean = false;

  fullscreen: boolean = false;

  activeIndex: number = 0;

  isAutoPlay: boolean = true;

  onFullScreenListener: any;

  @ViewChild('galleria') galleria: Galleria | undefined;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private photoService: PhotoService,
    private cd: ChangeDetectorRef
  ) {}

  responsiveOptions: any[] = [
    {
      breakpoint: '1300px',
      numVisible: 4,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
    },
  ];

  ngOnInit() {
    this.photoService
      .getImages('template')
      .then((images) => (this.images = images));
    this.bindDocumentListeners();
  }

  onThumbnailButtonClick() {
    this.showThumbnails = !this.showThumbnails;
  }

  toggleAutoSlide() {
    this.isAutoPlay = !this.isAutoPlay;
  }

  toggleFullScreen() {
    if (this.fullscreen) {
      this.closePreviewFullScreen();
    } else {
      this.openPreviewFullScreen();
    }

    this.cd.detach();
  }

  openPreviewFullScreen() {
    let elem =
      this.galleria?.element.nativeElement.querySelector('.p-galleria');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem['mozRequestFullScreen']) {
      elem['mozRequestFullScreen']();
    } else if (elem['webkitRequestFullscreen']) {
      elem['webkitRequestFullscreen']();
    } else if (elem['msRequestFullscreen']) {
      elem['msRequestFullscreen']();
    }
  }

  onFullScreenChange() {
    this.fullscreen = !this.fullscreen;
    this.cd.detectChanges();
    this.cd.reattach();
  }

  closePreviewFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).mozCancelFullScreen) {
      (document as any).mozCancelFullScreen();
    } else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen();
    } else if ((document as any).msExitFullscreen) {
      (document as any).msExitFullscreen();
    }
  }

  bindDocumentListeners() {
    this.onFullScreenListener = this.onFullScreenChange.bind(this);
    document.addEventListener('fullscreenchange', this.onFullScreenListener);
    document.addEventListener('mozfullscreenchange', this.onFullScreenListener);
    document.addEventListener(
      'webkitfullscreenchange',
      this.onFullScreenListener
    );
    document.addEventListener('msfullscreenchange', this.onFullScreenListener);
  }

  unbindDocumentListeners() {
    document.removeEventListener('fullscreenchange', this.onFullScreenListener);
    document.removeEventListener(
      'mozfullscreenchange',
      this.onFullScreenListener
    );
    document.removeEventListener(
      'webkitfullscreenchange',
      this.onFullScreenListener
    );
    document.removeEventListener(
      'msfullscreenchange',
      this.onFullScreenListener
    );
    this.onFullScreenListener = null;
  }

  ngOnDestroy() {
    this.unbindDocumentListeners();
  }

  galleriaClass() {
    return `custom-galleria ${this.fullscreen ? 'fullscreen' : ''}`;
  }

  slideButtonIcon() {
    return this.isAutoPlay ? 'pi pi-pause' : 'pi pi-play';
  }

  fullScreenIcon() {
    return `pi ${
      this.fullscreen ? 'pi-window-minimize' : 'pi-window-maximize'
    }`;
  }
}
