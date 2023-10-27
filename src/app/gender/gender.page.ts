import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage implements OnInit {
  name: string = '';
  gender: string = '';
  color: string = '';
  textColor: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  predictGender() {
    this.http.get(`https://api.genderize.io/?name=${this.name}`).subscribe((data: any) => {
      if (data.gender === 'male') {
        this.color = 'blue';
        this.gender = 'Masculino';
        this.textColor = 'white';
      } else if (data.gender === 'female') {
        this.color = 'pink';
        this.gender = 'Femenino';
        this.textColor = 'black';
      } else {
        this.color = 'gray';
        this.gender = 'Desconocido';
        this.textColor = 'black';
      }
    });
  }
}
