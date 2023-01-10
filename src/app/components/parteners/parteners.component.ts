import { Component, OnInit } from '@angular/core';
import { ClinicaService } from 'src/app/clinica.service';

@Component({
  selector: 'app-parteners',
  templateUrl: './parteners.component.html',
  styleUrls: ['./parteners.component.scss']
})
export class PartenersComponent implements OnInit {
 // imagePrefix= "http://otlobdoctoradmin.otlobdoctor-eg.com/attach/";
  images= [
    {imageUrl: './assets/clients/162228176560b20e252f46d.jpg'},
    {imageUrl: './assets/clients/162515105560ddd64fb9152.jpeg'},
    {imageUrl: './assets/clients/162628683760ef2af5c6cec.jpeg'},
  ]
  partners:any= [
  ]
  constructor(private _clinicaService: ClinicaService) { }

  ngOnInit(): void {
    this._clinicaService.getPartners();
    this._clinicaService.getPartnersData().subscribe(data=> {
      this.partners= data
    })
  }

}
