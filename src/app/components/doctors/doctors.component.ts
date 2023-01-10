import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ClinicaService } from 'src/app/clinica.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  imagePrefix= "http://otlobdoctoradmin.otlobdoctor-eg.com/attach/";
  customOptions: OwlOptions = {
    rtl: true,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin: 30,
    navText: ["<i class='fa fa-chevron-right'></i>","<i class='fa fa-chevron-left'></i>"],
    responsive: {
      0: {
        items: 1
      },
      
      400: {
        items: 1
      },
      600:{
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  slidesImg:any = [
  
  ]
  constructor(private _clinicaService: ClinicaService) { }

  ngOnInit(): void {
    this._clinicaService.getDoctors();
    this._clinicaService.getDoctorsData().subscribe(data=> {
      this.slidesImg=data;
    })
  }

}
