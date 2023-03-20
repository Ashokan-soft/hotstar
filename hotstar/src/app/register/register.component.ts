import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  
  // E164PhoneNumber = "1213233"
  phoneForm : FormGroup = new FormGroup({
    phone : new FormControl( ['',Validators.required])
  })











  keyPressNumbers(event: any) {
    // alert(JSON.stringify(event.keyCode))
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

}


