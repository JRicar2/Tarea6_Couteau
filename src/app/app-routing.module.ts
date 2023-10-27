import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'weathermodal',
    loadChildren: () => import('./weathermodal/weathermodal.module').then( m => m.WeathermodalPageModule)
  },
  {
    path: 'weather-rd',
    loadChildren: () => import('./weather-rd/weather-rd.module').then( m => m.WeatherRDPageModule)
  },
  {
    path: 'wordpress',
    loadChildren: () => import('./wordpress/wordpress.module').then( m => m.WordpressPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'age',
    loadChildren: () => import('./age/age.module').then( m => m.AgePageModule)
  },
  {
    path: 'gender',
    loadChildren: () => import('./gender/gender.module').then( m => m.GenderPageModule)
  },
  {
    path: 'university',
    loadChildren: () => import('./university/university.module').then( m => m.UniversityPageModule)
  },
  {
    path: 'aboutme',
    loadChildren: () => import('./aboutme/aboutme.module').then( m => m.AboutmePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
