import { CommonModule } from '@angular/common';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenu } from 'primeng/megamenu';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-dashboard',
  imports: [MegaMenu, ButtonModule, CommonModule, AvatarModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  standalone: true,
})
export class Dashboard implements OnInit {
  @Output() viewChange = new EventEmitter<
    | 'products'
    | 'dashboard'
    | 'messages'
    | 'chart'
    | 'filter'
    | 'buttons'
    | 'data'
    | 'overlay'
    | 'media'
    | 'panel'
    | 'form'
  >();

  items: MegaMenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'All Components',
        root: true,
        command: () => this.viewChange.emit('dashboard'),
      },
      {
        label: 'Products',
        root: true,
        command: () => this.viewChange.emit('products'),
      },
      {
        label: 'Buttons',
        root: true,
        command: () => this.viewChange.emit('buttons'),
      },
      {
        label: 'Messages',
        root: true,
        command: () => this.viewChange.emit('messages'),
      },
      {
        label: 'Chart',
        root: true,
        command: () => this.viewChange.emit('chart'),
      },
      {
        label: 'Filter',
        root: true,
        command: () => this.viewChange.emit('filter'),
      },
      {
        label: 'Data',
        root: true,
        command: () => this.viewChange.emit('data'),
      },
      {
        label: 'Overlay',
        root: true,
        command: () => this.viewChange.emit('overlay'),
      },
      {
        label: 'Media',
        root: true,
        command: () => this.viewChange.emit('media'),
      },
      {
        label: 'Panel',
        root: true,
        command: () => this.viewChange.emit('panel'),
      },
      {
        label: 'Form',
        root: true,
        command: () => this.viewChange.emit('form'),
      },
    ];
  }
}
