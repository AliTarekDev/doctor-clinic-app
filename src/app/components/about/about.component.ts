import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  services:any= [
    {title: 'عن اطلب دكتور', anchor: 'الصفحه الرئيسية', content: 'عن اطلب دكتور'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
