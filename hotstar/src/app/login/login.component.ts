import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { ScriptCheckService } from '../services/script-check.service';

const SCRIPT_PATH = '/assets/scripts/loginscript.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  
{
  submitted: boolean = false



  constructor(
    private renderer: Renderer2,
    private scriptService: ScriptCheckService,
  ) { }

  ngOnInit(): void {const scriptElement = this.scriptService.loadJsScript(this.renderer, SCRIPT_PATH); }

loginForm: FormGroup = new FormGroup({

  username : new  FormControl((''),[Validators.required,Validators.email]),
  password : new  FormControl((''),[Validators.required,Validators.minLength(6)])
  

  
})

// king:boolean=false
// submitted: boolean = true

submit(){
  this.submitted = true
  // this.king=true

  if(this.loginForm.valid){
    // alert("submitted")
    alert(JSON.stringify(this.loginForm.value))
    console.log("submitted Clicked success")
    alert("Submit is success")
  }
}


}
  



