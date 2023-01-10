import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {

  services:any= [
    {title: 'الخدمات الرئيسيه', anchor: 'الصفحه الرئيسية', content: 'الخدمات الرئيسيه'}
  ]
  constructor() { }

  ngOnInit(): void {
    const btn= document.querySelector('.more-services-btn');
    btn?.remove();
  }

}
