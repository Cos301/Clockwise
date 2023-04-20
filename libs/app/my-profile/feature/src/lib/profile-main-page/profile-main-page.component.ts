import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import {TimeBarComponent} from '@mp/app/global-ui'
import { ImageContainerComponent } from '../image-container/image-container.component';
import { NavbarComponent } from '@mp/app/global-ui';

@Component({
  selector: 'mp-profile-main-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TimeBarComponent, ImageContainerComponent, NavbarComponent],
  templateUrl: './profile-main-page.component.html',
  styleUrls: ['./profile-main-page.component.scss'],
})
export class ProfileMainPageComponent {}
