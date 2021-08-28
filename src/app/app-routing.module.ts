import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppComponent } from './app.component';

const routes: Routes = [{
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./src/app/views/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./src/app/views/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./src/app/views/about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'service',
        loadChildren: () => import('./src/app/views/pagenotfound/pagenotfound.module').then(m => m.pagenotfoundModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('./src/app/views/blog/blog.module').then(m => m.BlogModule)
      },
      {
        path: 'faq',
        loadChildren: () => import('./src/app/views/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'Contact',
        loadChildren: () => import('./src/app/views/home/home.module').then(m => m.HomeModule)
      },
      {
        path: '',
        redirectTo: 'pages',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}