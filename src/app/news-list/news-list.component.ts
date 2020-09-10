import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent implements OnInit {
  newsList: any = {};
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient
      .get<any>(
        'https://newsapi.org/v2/everything?q=bitcoin&from=2020-09-09&sortBy=publishedAt&apiKey=1848b5465b1449d78d10c2991b1bea98'
      )
      .subscribe((list) => {
        this.newsList = list.articles;
        console.log('log: ', this.newsList);
        // console.log('log: ', this.newsList.articles[0]);
        // console.log('publishedAt: ', this.newsList.articles[0].publishedAt);
      });
  }
}
