import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClinicaService } from 'src/app/clinica.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  constructor(public _clinicaService: ClinicaService) {
    
   }

  
  /*services:any= [
    {option: 'اختار الخدمه', disabled: true},
    {option: 'دكتور'},
    {option: 'تمريض'},
    {option: 'تحاليل'},
    {option: 'اشعه'}
  ];*/

  services:any= [];
  errorFile= "";


  form= new FormGroup({
    'Name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'Mail': new FormControl(null, [Validators.required, Validators.email]),
    'ServiceID': new FormControl(null, [Validators.required]),
    'Phone': new FormControl(null, [Validators.required, Validators.pattern("[0-9 ]{11}")]),
    'Address': new FormControl(null, [Validators.required]),
    'Skills': new FormControl(null, [Validators.required]),
    'CV': new FormControl(null, [Validators.required, RxwebValidators.extension({extensions:["pdf"]})]),
    'SyndicateID': new FormControl(null, [Validators.required]),
    'NationalID':new FormControl(null, [Validators.required,
      RxwebValidators.extension({extensions:["jpeg", "jpg", "png"]})])

  });


  getCv(event: any) {
    if (event.target.files) {




      const file = event.target.files[0];
      console.log(Math.round(file.size / 1024));
      if(Math.round(file.size / 1024) > 800) {
        console.error(this.errorFile)
        this.errorFile= "حجم الملف كبير!";
       alert(this.errorFile);
       event.target.value= "";
      }

      this.form.get('CV')?.patchValue(file, {emitModelToViewChange: false});

      this.form.get('CV')?.updateValueAndValidity()
    }

  }

  // getCv(event: any) {
  //   const reader = new FileReader();
  //   if(event.target.files && event.target.files.length) {
  //     const [file] = event.target.files;
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       this.form.patchValue({
  //         CV: reader.result
  //       });
  //       this.form.get('CV')?.updateValueAndValidity();
  //     };
  //   }     
  // }

  getCard(event: any) {
    if (event.target.files) {




      const file = event.target.files[0];
      if(Math.round(file.size / 1024) > 800) {
        console.error(this.errorFile)
        this.errorFile= "حجم الملف كبير!";
       alert(this.errorFile);
       event.target.value= "";
      }

      this.form.get('SyndicateID')?.patchValue(file, {emitModelToViewChange: false});

      this.form.get('SyndicateID')?.updateValueAndValidity()
    }

  
  }

  getNational(event: any) {
     if (event.target.files) {




      const file = event.target.files[0];
      if(Math.round(file.size / 1024) > 800) {
        console.error(this.errorFile)
        this.errorFile= "حجم الملف كبير!";
       alert(this.errorFile);
       event.target.value= "";
      }

      this.form.get('NationalID')?.patchValue(file, {emitModelToViewChange: false});

      this.form.get('NationalID')?.updateValueAndValidity()
    }
  }

  joinUs() {
    
    if(this.form.invalid) 
    {      
      this.errorFile= "يجب ادخال جميع الحقول"
      return      
    }

    this._clinicaService.joinOurTeam(
      this.form.value.Name,
      this.form.value.Mail,
      this.form.value.ServiceID,
      this.form.value.Phone,
      this.form.value.Address,
      this.form.value.Skills,
      this.form.value.CV,
      this.form.value.SyndicateID,
      this.form.value.NationalID
    )
  };

  checkValidForm() {
    if(this.form.invalid) {
      console.log("invalid");
      return
    }
  }
  ngOnInit(): void {

    this._clinicaService.getClientsService();
    this._clinicaService.getServiceData().subscribe(serviceData=> {
      this.services= serviceData;
    })

  }

}
