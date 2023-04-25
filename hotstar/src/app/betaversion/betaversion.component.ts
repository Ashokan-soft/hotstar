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
      
  ApiTestData:any
  submitted:boolean=false

  languageList:any=
  [
    {languageId:1,language:"Tamil"},
    {languageId:2,language:"English"},
    {languageId:3,language:"Kannada"},
    {languageId:4,language:"Telugu"},
    {languageId:5,language:"Malayalam"},
    {languageId:6,language:"Hindi"},

  ]
 
  categoryList:any=
  [
    {categoryId:1,categoryName:"Action",},
    {categoryId:2,categoryName:"Horror",},
    {categoryId:3,categoryName:"Funny",},
    {categoryId:4,categoryName:"Crime",},
    {categoryId:5,categoryName:"Historical",},
    {categoryId:6,categoryName:"Thriller",},
    {categoryId:7,categoryName:"Drama",},
    {categoryId:8,categoryName:"Romance",},
 ]


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
    // alert(JSON.stringify(x))
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
    

ApiCheck(){
  
let input  = {
  "videoTitle":this.videoForm.controls['Title'].value,
  "videoDescription":this.videoForm.controls['Desc'].value,
  "videoLanguage":this.videoForm.controls['videoLanguage'].value,
  "videovideoCatogry":this.videoForm.controls['VideoCatogry'].value,
  "videoUrl":this.videoForm.controls['videoUrl'].value,
  "bannerUrl":this.videoForm.controls['BannerURL'].value,
  "releaseDate":this.videoForm.controls['ReleaseDate'].value,
  "duration":this.videoForm.controls['Duration'].value,
}
// alert(this.videoForm.controls['Title'].value)
alert(JSON.stringify(input))
  this.service.ApiCheck(input).subscribe((data:any)=>{
   if(data.success)
   {
alert("inserted successfully")
this.videoForm.reset();
   }
   else
   {
    alert("not inserted");
   }

  })

}

// BtnSubmit(){
//   this.submitted=true
//   alert("hi")

//     this.ApiCheck()

// }\



submit(): void{

this.submitted=true
  if(this.videoForm.valid){
  
this.ApiCheck()
    // alert(JSON.stringify(this.videoForm.value))
  }
  else(
    alert("some fields are empty......")
  )

}
}
