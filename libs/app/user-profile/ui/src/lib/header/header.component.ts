import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mp-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
