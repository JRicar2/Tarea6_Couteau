import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-university',
  templateUrl: './university.page.html',
  styleUrls: ['./university.page.scss'],
})
export class UniversityPage implements OnInit {
  country: string = '';
  universities: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  searchUniversities() {
    const apiUrl = `https://api.adamix.net/itla/universidades/?pais=${encodeURIComponent(this.country)}`;

    this.http.get(apiUrl).subscribe((data: any) => {
      this.universities = data;
    });
  }
}
