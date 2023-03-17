import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ScriptCheckService } from '../services/script-check.service';

const SCRIPT_PATH = '/assets/scripts/loginscript.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  
{
  
  constructor(
    private renderer: Renderer2,
    private scriptService: ScriptCheckService,
  ) { }

  ngOnInit(): void {const scriptElement = this.scriptService.loadJsScript(this.renderer, SCRIPT_PATH); }

loginForm: FormGroup = new FormGroup({

  username : new  FormControl((''),[Validators.required,Validators.email]),
  password : new  FormControl((''),Validators.required)

  
})


}
