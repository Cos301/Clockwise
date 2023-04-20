import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ProfileMainPageComponent } from '@mp/app/my-profile/feature'
import { ChatsDemoComponent } from '@mp/chats';

const routes: Routes = [
  {
    path: '',
    component: ProfileMainPageComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('@mp/app/dashboard/feature').then((m) => m.DashboardModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('@mp/app/profile/feature').then((m) => m.ProfileModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home/dashboard',
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home/dashboard',
  },
  {
    path: 'user-profile', 
    pathMatch: 'full',
    component: ProfileMainPageComponent
  }, 
  {
    path: 'chats', 
    component: ChatsDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRouting {}
