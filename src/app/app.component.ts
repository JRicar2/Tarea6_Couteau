import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'home', icon: 'home' },
    { title: 'Genero', url: 'gender', icon: 'male-female' },
    { title: 'Edad', url: 'age', icon: 'hourglass' },
    { title: 'Universidades', url: 'university', icon: 'school' },
    { title: 'Clima', url: 'weather-rd', icon: 'cloud' },
    { title: 'Wordpress', url: 'wordpress', icon: 'logo-wordpress' },
    { title: 'Acerca de', url: 'aboutme', icon: 'briefcase' }
  ];
  constructor() {}
}
