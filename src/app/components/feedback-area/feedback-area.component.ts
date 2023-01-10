import { Component, OnInit } from '@angular/core';
import { ClinicaService } from 'src/app/clinica.service';

@Component({
  selector: 'app-feedback-area',
  templateUrl: './feedback-area.component.html',
  styleUrls: ['./feedback-area.component.scss']
})
export class FeedbackAreaComponent implements OnInit {
 

  clients:any= [];
  
  imagePrefix= "http://otlobdoctoradmin.otlobdoctor-eg.com/attach/";
  

  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1,"rtl": true, "speed": 100, 
  "autoplay": true,
  infinite: true,
  cssEase: 'linear',
  centerMode: true,
  fede: true,
 };
  constructor(private _clinicaService: ClinicaService) {
    this._clinicaService.getClients();
    this._clinicaService.getClientsData().subscribe(data=> {
      this.clients= data;
    })
   }

  ngOnInit(): void{

  }

}
