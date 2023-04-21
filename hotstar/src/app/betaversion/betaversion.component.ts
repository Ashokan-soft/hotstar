import { Component, OnInit, Renderer2 } from '@angular/core';
import { ScriptCheckService } from '../services/script-check.service';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';
import { ApiWorksService } from '../services/api-works.service';

const SCRIPT_PATH = '/assets/scripts/betascript.js';

@Component({
  selector: 'app-betaversion',
  templateUrl: './betaversion.component.html',
  styleUrls: ['./betaversion.component.scss']
})

export class BetaversionComponent implements OnInit {

  languageList:any=["Tamil","English","kannada","Hindi"]
  categoryList:any=["Action","Horror","Funny","Crime:","Love","Historical","Thriller","Drama","Romance",]


  videoForm:FormGroup=new FormGroup({
    Title:new FormControl('',[(Validators.required)]),
    Desc:new FormControl('',[(Validators.required)]),
    videoLanguage:new FormControl('',[(Validators.required)]),
    VideoCatogry:new FormControl('',[(Validators.required)]),
    videoUrl:new FormControl('',[(Validators.required)]),
    BannerURL:new FormControl('',[(Validators.required)]),
    ReleaseDate:new FormControl('',[(Validators.required)]),
    Duration:new FormControl('',[(Validators.required)]),
  })

  constructor(
    private renderer: Renderer2,
    private scriptService: ScriptCheckService,
    private service:ApiWorksService,
  ) { }
  
  ngOnInit(): void {const scriptElement = this.scriptService.loadJsScript(this.renderer, SCRIPT_PATH);

  }

  LanguageSelect(x:any){
    if(x.target.value){
      this.videoForm.controls["videoLanguage"].setValue(x.target.value);
      console.log(JSON.stringify(this.videoForm.controls["videoLanguage"].value))
      // alert(this.videoForm.controls["videoLanguage"])
      }
      else{
        console.log("Language NOT selected")
      }
  }
    CategorySelect(x:any){
    if(x.target.value){
      this.videoForm.controls["VideoCatogry"].setValue(x.target.value);
      console.log(JSON.stringify(this.videoForm.controls["VideoCatogry"].value))
      // alert(this.videoForm.controls["videoLanguage"])
      }
      else{
        console.log("Catogry NOT selected")
      }
  }


// --------------\\\

ApiTestData:any
submitted:boolean=false

ApiCheck(){
  
let input  = {
  "videoTitle":this.videoForm.controls['Title'].value,
  "videoDescription":this.videoForm.controls['Desc'].value,
  "videoLanguage":this.videoForm.controls['videoLanguage'].value,
  "VideoCatogry":this.videoForm.controls['VideoCatogry'].value,
  "videoUrl":this.videoForm.controls['videoUrl'].value,
  "bannerUrl":this.videoForm.controls['BannerURL'].value,
  "ReleaseDate":this.videoForm.controls['ReleaseDate'].value,
  "Duration":this.videoForm.controls['Duration'].value,
}
alert(this.videoForm.controls['Title'].value)
alert(JSON.stringify(input))
  this.service.ApiCheck(input).subscribe((data:any)=>{
    alert(data)
     alert("DataGet")
  this.ApiTestData=data.videos;

  alert(JSON.stringify(this.ApiTestData))

  })

}

// BtnSubmit(){
//   this.submitted=true
//   alert("hi")

//     this.ApiCheck()

// }
submit(){

  
  if(this.videoForm.valid){

    alert(JSON.stringify(this.videoForm.value))
  }
  else(
    alert("some fields are empty......")
  )

}
}
