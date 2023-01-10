import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
id:any= 1;
services= [
  {title: 'علاج طبيعي ', content: '', link: '/article/1'},
  {title: 'باطنة', content: '', link: '/article/2'},
  {title: 'انف واذن', content: '',  link: '/article/3'},
  {title: 'كلي', content: '', link: '/article/4'},
  {title: 'كبد', content: '', link: '/article/5'},
  {title: 'اوعية دموية', content: '', link: '/article/6'},
  {title: 'مخ واعصاب', content: '', link: '/article/7'},
  {title: 'عظام', content: '', link: '/article/8'},
  {title: 'صدر و جهاز تنفسي', content: '', link: '/article/9'},
  {title: 'جراحة عامة', content: '', link: '/article/10'},
  {title: 'مسالك بوليه', content: '', link: '/article/11'},
  {title: 'جلدية', content: '', link: '/article/12'},
  {title: 'اطفال و حديثي الولادة', content: '', link: '/article/13'},
  {title: 'قلب اوعية دموية', content: '', link: '/article/14'},
  {title: 'نساء و ولادة و عقم', content: '', link: '/article/15'},
  {title: 'اورام', content: '', link: '/article/16'},
  {title: 'طبيب اسره', content: '', link: '/article/17'},
  {title: 'تغذية علاجية', content: '', link: '/article/18'},
  {title: 'طبيب_عام', content: '', link: '/article/19'},
  {title: 'مساعدين تمريض', content: '',link: '/article/20'},

  
]


  constructor(private router: Router) { 
    
  }
  

  ngOnInit(): void {
    
  }

 
}
