import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.page.html',
  styleUrls: ['./wordpress.page.scss'],
})
export class WordpressPage implements OnInit {
  newsData: any[] = [];
  apiUrl: string = 'https://mynintendonews.com/wp-json/wp/v2/posts?per_page=3';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.apiUrl).subscribe((data: any) => {
      this.newsData = data;
    });
  }

  openLink(url: string) {
    window.open(url, '_system');
  }
}
