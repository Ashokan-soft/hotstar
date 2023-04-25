import { Component, OnInit, Renderer2 } from '@angular/core';
import { ScriptCheckService } from '../services/script-check.service';
import { ApiWorksService } from '../services/api-works.service';

const SCRIPT_PATH = '/assets/scripts/dashboard.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    private scriptService: ScriptCheckService,
    private service:ApiWorksService,
  ) { }
  ngOnInit(): void {const scriptElement = this.scriptService.loadJsScript(this.renderer, SCRIPT_PATH);

  }
}
