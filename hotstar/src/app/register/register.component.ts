import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  
  // E164PhoneNumber = "1213233"
  // phoneForm : FormGroup = new FormGroup({
  //   phone : new FormControl( ['',Validators.required])
  // })
 // keyPressNumbers(event: any) {
  //   // alert(JSON.stringify(event.keyCode))
  //   var charCode = (event.which) ? event.which : event.keyCode;
  //   // Only Numbers 0-9
  //   if ((charCode < 48 || charCode > 57)) {
  //     event.preventDefault();
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
// ----------------------------------------------------------------------------------------------


submitted: boolean = false
  

address: any

skillArry: any = []
Gender: any = ["Male", "Female"]

gendervar: any





ngOnInit(): void { }

sub() {

  this.submitted = true

  if (this.rform.valid) {

    // if(this.rform.controls['Password'].value == this.rform.controls['CPassword'].value ){

      alert(JSON.stringify(this.rform.value))
      console.log("submitted Clicked success")
      alert("Submit is success")
      // }
    // else
    // { alert("Password not Match submit unsucess")
    //       }
  }
  else {
    console.log("submit is unsuccess")
  }



 

}


rform: FormGroup = new FormGroup({

  fname: new FormControl('', [Validators.required, Validators.minLength(3)]),
  lname: new FormControl(''),
  // (JSON.stringify(this.rform.controls['address']))
  address: new FormControl('', [Validators.required, Validators.minLength(10)]),

  gender: new FormControl('', [Validators.required]),
  qualification: new FormControl('', [Validators.required]),
  specialization: new FormControl('', [Validators.required]),
  skills: new FormControl(''),
  Email: new FormControl('', [Validators.required, Validators.email]),
  phoneNum: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]),

  Password: new FormControl('', [Validators.required,Validators.minLength(6)]),
  CPassword: new FormControl('', [Validators.required,Validators.minLength(6)]),


})

gchenge(z: any) {

  if (z.target.checked) {
    this.gendervar = z.target.value
   
  }
  console.log("Gender is : " + this.rform.controls['gender'].value)
}


// if(z.target.checked){
//   alert(z.target.value)
//   this.genderArray.push(z.target.value);
//   console.log(this.genderArray)
// }
// else{
//   let gindex=this.genderArray.indexOf(z.target.value)
//   this.genderArray.splice(gindex,1)
//   console.log(this.genderArray)
// }

// if(z.target.value=="Male"){


// console.log(this.gendervar)

// }else{
// z.targer.value=="Female"
// this.gendervar=z.targer.value
// console.log(this.gendervar)

// }
qselect(q: any) {

  if (q.target.value) {

    this.rform.controls["qualification"].setValue(q.target.value);


    console.log(JSON.stringify(this.rform.controls["qualification"].value))

  }
  else {
    console.log("qualification not Selected")
  }
  // console.log(this.qulalifivar)
}

Sselect(s: any) {

  if (s.target.value) {

    this.rform.controls["specialization"].setValue(s.target.value);

    console.log(JSON.stringify(this.rform.controls["specialization"].value))

  } else {

    console.log("specialzition not selected ")
  }
}




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


// controlOnChange(e: any) {
//   if (e.target.checked) {
//     alert(e.target.value);
//     this.selList.push(e.target.value);
//   }
//   else {
//     let index = this.selList.indexOf(e.target.value);
//     alert(index);
//     this.selList.splice(index, 1);
//   }

//   alert(this.selList)
// }


whenClick(s: any) {
  if (s.target.checked) {
    this.skillArry.push(s.target.value);

    console.log(this.skillArry)

  }
  else {
    let Arrayindex = this.skillArry.indexOf(s.target.value)

    this.skillArry.splice(Arrayindex, 1);

    console.log(this.skillArry)
  }
  this.rform.controls["skills"].setValue(this.skillArry);
}

}



