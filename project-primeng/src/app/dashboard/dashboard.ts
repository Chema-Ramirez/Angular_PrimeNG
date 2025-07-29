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
    'products' | 'dashboard' | 'messages'
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
        label: 'Contact',
        root: true,
        command: () => this.viewChange.emit('messages'),
      },
    ];
  }
}
