import { Component, OnInit } from '@angular/core';
import { ClinicaService } from 'src/app/clinica.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  services:any= [
  ]

  Time:string= "";
  Date: string= "";

 
  constructor(private _clinicaService: ClinicaService) {
   }

 /* bookForm= new FormGroup({
    "PatientName": new FormControl(null ,[Validators.required]),
    "ServiceID": new FormControl(null, [Validators.required]),
    "Phone": new FormControl(null, [Validators.required]),
    "Date": new FormControl(null, [Validators.required]),
    "Time": new FormControl(null, [Validators.required]),
    "Address": new FormControl(null, [Validators.required]),
    "MedicalCase": new FormControl(null, [Validators.required])
    
  });*/


  ngOnInit(): void {
    this._clinicaService.getClientsService();
    this._clinicaService.getServiceData().subscribe(data=>{
      this.services= data;
    });
  };

  getTime(time: any) {
    console.log(time.target.value);
    this.Time= time.target.value;
  }

  getDate(date: any) {
    console.log(date.target.value);
    
    this.Date= date.target.value;
  }

  bookNow(bookData:any): void{   
     
    if(bookData.invalid) {
      console.log("Invalid");
      return
    }

   /* const bookFormData= {
      PatientName: bookData.value.PatientName,
      ServiceID: parseInt(bookData.value.ServiceID),
      Phone: bookData.value.Phone,
      Date: bookData.value.Date,
      Time: bookData.value.Time,
      Address: bookData.value.Address,
      MedicalCase: bookData.value.MedicalCase
      
    };*/
    this._clinicaService.bookNow(bookData.value.PatientName, bookData.value.ServiceID, bookData.value.Phone,
      this.Date, this.Time, bookData.value.Address,bookData.value.MedicalCase)
  
  }

}
