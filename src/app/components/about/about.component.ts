import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutusService } from 'src/app/services/aboutus.service';
import { FormGroup, FormControl , Validators } from '@angular/forms';
import jwt_decode from "jwt-decode";
declare var $:any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about ;
  aboutHeader;
  token;
  decoded;
  aboutIdHolder;
  constructor(public _Router:Router , private _about:AboutusService) { 

    this.getAbout();
    this.getAboutHeader();
    try {
      this.token = localStorage.getItem("TOKEN");
      this.decoded = jwt_decode(this.token);
    } catch (error) {
      localStorage.clear();
    }
  }
  UpdateAboutData = new FormGroup({
    aboutTitle:new FormControl('',[Validators.required]),
    aboutContent:new FormControl('',[Validators.required])
  })
  updateAboutHeaderContent = new FormGroup({
    aboutHeaderContent : new FormControl('',[Validators.required]),
  })
  getAbout(){
    this._about.getAbout().subscribe(res=>{
      this.about =res.about;
    })
  }
  getAboutHeader(){
    this._about.aboutHeader().subscribe(res=>{
      this.aboutHeader=res.aboutHeader
    })
  }
  idHolder(id){
    this.aboutIdHolder = id;
    console.log(this.aboutIdHolder); 
  }
  //updateAbout with ID
  updateAboutContent(id){
    let data = {
      token : this.token,
      aboutTitle : this.UpdateAboutData.value.aboutTitle,
      aboutContent : this.UpdateAboutData.value.aboutContent
    }
    this._about.updateAboutWithId(id ,data).subscribe(res=>{
      console.log(res.message);
      if(res.message=="aboutTitle was used bs another section"){
        alert("aboutTitle was used bs another section")
      }
      else if (res.message == "nothing updated"){
        alert('nothing updated')
      }
      else if (res.message=="about updated" || res.message=="aboutContent updated" || res.message=="aboutTitle updated" ){
        $("#editAbout").modal("hide");
        this.getAbout();
      }
      
    })
  }
  updateAboutHeader(id){
    let data = {
      token:this.token,
      aboutHeaderContent : this.updateAboutHeaderContent.value.aboutHeaderContent
    }
    this._about.updateAboutHeader(id,data).subscribe(res=>{
      console.log(res);
      if(res.message=="UPDATED"){
        this.getAboutHeader();
      }
    
    })
  }
  ngOnInit(): void {
  }

}
