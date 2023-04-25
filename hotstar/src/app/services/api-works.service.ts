import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiWorksService {

  constructor(private http:HttpClient) { }
  
  public ApiCheck(input:any){

    let url="https://localhost:44310/Video/InsertVideo"
   
    return this.http.post(url,input)

  }

}
