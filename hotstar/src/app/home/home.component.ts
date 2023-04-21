import { Component, OnInit, Renderer2 } from '@angular/core';
import { ScriptCheckService } from '../services/script-check.service';

const SCRIPT_PATH = '/assets/scripts/homePageScript.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  a:any[]=['a','b','c']

width:any='150'

  constructor(
    private renderer: Renderer2,
    private scriptService: ScriptCheckService,
  ) { }



  ngOnInit(): void {const scriptElement = this.scriptService.loadJsScript(this.renderer, SCRIPT_PATH);

}


}
