import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { ContactusService } from 'src/app/services/contactus.service';
import jwt_decode from "jwt-decode";
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var $:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactMethods;
  contactIdHolder;
  token;
  decoded;
  clientMessages;
  constructor(public _Router : Router , private _contactusService:ContactusService) {
    this.getContactMethods();
    this.getClientsMessages();
    try {
      this.token = localStorage.getItem("TOKEN");
      this.decoded = jwt_decode(this.token);
    } catch (error) {
      localStorage.clear();
    }
   }
  getContactMethods(){
    this._contactusService.getContact().subscribe(res=>{
      this.contactMethods=res.Methods;
    })
  }
  ngOnInit(): void {
    /*$('.location').mouseenter(()=>{
      //$(`${this} .test-location`).fadeIn('2');
      $('.location .test-location').css({"display":"inline-block"})
    })
    $('.location').mouseleave(()=>{
     // $(`${this} .test-location`).fadeOut('2');
      //$(this).find('.test-location').fadeOut('2')
      $('.location .test-location').css({"display":"none"})

    })*/
    
  }
  idHolder(id){
    this.contactIdHolder = id;
    console.log(this.contactIdHolder);
    this.updateContact.controls['contactPhone'].setValue(this.contactIdHolder.contactPhone);
    this.updateContact.controls['contactMail'].setValue(this.contactIdHolder.contactMail);
    this.updateContact.controls['contactFax'].setValue(this.contactIdHolder.contactFax);
    this.updateContact.controls['contactMobile'].setValue(this.contactIdHolder.contactMobile);
    }
  updateContact = new FormGroup({
    contactPhone:new FormControl('',[Validators.required]),
    contactMail:new FormControl('',[Validators.required]),
    contactFax:new FormControl('',[Validators.required]),
    contactMobile:new FormControl('',[Validators.required]),
  });
  updateContactMethods(id){
    let data = {
      token : this.token,
      contactPhone:this.updateContact.value.contactPhone,
      contactMail:this.updateContact.value.contactMail,
      contactFax :this.updateContact.value.contactFax,
      contactMobile : this.updateContact.value.contactMobile
    }
    this._contactusService.editContactMethods(id,data).subscribe(res=>{
      console.log(res);
      if(res.message=="Contact Methods updated" || res.message=="Contact Phone and contactFax updated"||
        res.message=="Contact Phone and Contact Mail updated"||
        res.message=="Contact Fax and Contact Mail updated"||res.message=="Contact Phone updated"||
        res.message=="Contact Fax updated"||res.message=="Contact Mail updated"){
          this.getContactMethods();
      }
      else if(res.message=="NOthing updated"){
        alert("Nothing Updated are you sure ?")
      }
    })
  }
  
  clientMessage = new FormGroup({
    clientName:new FormControl('',[Validators.required]),
    clientPhone:new FormControl('',[Validators.required]),
    clientMail:new FormControl('',[Validators.required]),
    clientMessage:new FormControl('',[Validators.required])
  })
  sendMessage(){
    let data = {
      token : this.token,
      clientName: this.clientMessage.value.clientName,
      clientPhone : this.clientMessage.value.clientPhone,
      clientMail : this.clientMessage.value.clientMail,
      clientMessage:this.clientMessage.value.clientMessage, 
    }
    this._contactusService.sendMessage(data).subscribe(res=>{
      console.log(res);
      if(res.message == "your message sent succesfully"){
        alert(res.message);
        this.getClientsMessages();
      }
      else{
        alert("enter Valid phone number")
      }
    })
  }
  getClientsMessages(){
    this._contactusService.getAllMessages().subscribe(res=>{
      this.clientMessages= res.messages;
    })
  }
  deleteAllMessages(){
    let data = {
      token : this.token
    }
    this._contactusService.deleteAllMessages(data).subscribe(res=>{
      console.log(res);
      if(res.message=="All Messages Deleted sucessfully"){
        alert(res.message);
        this.getClientsMessages();
      }
      
      
    })
  }
  deleteClientMessage(id){
    let data = {
      token :this.token
    }
    this._contactusService.deleteClientMessage(id,data).subscribe(res=>{
      console.log(res);
      if(res.message == "Client Message Deleted sucessfully"){
        this.getClientsMessages();
      }
    })
  }
   myFunction() {
    /* Get the text field */
    var copyText = `https://goo.gl/maps/ufLHcurW96cP8VG88`;
    /* Select the text field */
    /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText);
    /* Alert the copied text */
    alert('copied');  
    }
}
