import { Component, OnInit } from '@angular/core';
import { ClinicaService } from './clinica.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'clinic';
  clients= [];

  ngOnInit() {
    var top= document.querySelector('.top');
    var navbar= document.querySelector('.navbar');
   /* window.onscroll= function() {
      window.scrollY > 600?  top?.classList.add('active') : top?.classList.remove('active');
    }*/

    top?.addEventListener('click', ()=> {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    });
    /* End of scroll to top button */

    window.onscroll= function() {
      if(window.scrollY >= 150) {
        navbar?.classList.add('fixed-top');
      }
      else {
        navbar?.classList.remove('fixed-top');
      }
     if(window.scrollY > 600) {
        top?.classList.add('active')
      }
      else {
        top?.classList.remove('active')
      }
    
    }

  }

  constructor(private _clinicaService: ClinicaService) {
    this._clinicaService.getClients();
       this._clinicaService.getClientsData().subscribe(data=> {
         console.log(data); 
       });
  }

}
