import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-age',
  templateUrl: './age.page.html',
  styleUrls: ['./age.page.scss'],
})
export class AgePage implements OnInit {
  name: string = '';
  age: number = 0;
  ageCategory: string = '';
  imageSource: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  detectAge() {
    this.http.get(`https://api.agify.io/?name=${this.name}`).subscribe((data: any) => {
      this.age = data.age;
      if (this.age < 15) {
        this.ageCategory = 'Joven';
        this.imageSource = '../../assets/img/Young.png';
      } else if (this.age >= 15 && this.age < 18) {
        this.ageCategory = 'Adolescente';
        this.imageSource = '../../assets/img/Teen.png';
      } else if (this.age >= 18 && this.age < 65) {
        this.ageCategory = 'Adulto';
        this.imageSource = '../../assets/img/Adult.png';
      }else {
        this.ageCategory = 'Anciano';
        this.imageSource = '../../assets/img/Old.png';
      }
    });
  }
}
