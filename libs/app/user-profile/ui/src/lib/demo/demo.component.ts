import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@mp/app/user-profile/ui';
import { PostsContainerComponent } from '@mp/app/user-profile/ui';
import { TimeBarComponent } from '@mp/global-ui';

@Component({
  selector: 'mp-demo',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TimeBarComponent, PostsContainerComponent],
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent {}
