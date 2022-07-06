import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/services/signin.service';
import jwt_decode from "jwt-decode";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  token;
  decoded;
  constructor(public _Router:Router , private _Signin:SigninService) {
    try {
      this.token = localStorage.getItem("TOKEN");
      this.decoded = jwt_decode(this.token);
    } catch (error) {
      localStorage.clear();
      this._Router.navigate(["/admin"]);
    }
    if (!localStorage.getItem("TOKEN")) {
      this._Router.navigate(["/admin"]);
    }
  }

  ngOnInit(): void {
  }

}
