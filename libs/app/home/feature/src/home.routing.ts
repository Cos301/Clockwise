import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
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
        redirectTo: '/home/posts',
      },
      {
        path: 'posts',
        loadChildren: () =>
          import('@mp/app/posts/feature').then((m) => m.PostsModule),
      },
      {
        path: 'chat',
        loadChildren: () =>
          import('@mp/app/chat/feature').then((m) => m.ChatModule),
      }
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home/posts',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRouting { }
