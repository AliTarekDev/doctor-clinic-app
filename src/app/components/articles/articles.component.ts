import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  services:any= [
    {title: 'Articles', anchor: 'الصفحه الرئيسية', content: 'مقالات طبيه'}
  ]
  constructor() { 
 
  }

  ngOnInit(): void {
   
  }

}
