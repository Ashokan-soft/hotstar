import { Component, OnInit, Renderer2 } from '@angular/core';
import { ScriptCheckService } from '../services/script-check.service';



const SCRIPT_PATH = '/assets/scripts/navbar.js';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  

  constructor(
    private renderer: Renderer2,
    private scriptService: ScriptCheckService,
  ) { }

  ngOnInit(): void {const scriptElement = this.scriptService.loadJsScript(this.renderer, SCRIPT_PATH); 
    
   

  }

}
