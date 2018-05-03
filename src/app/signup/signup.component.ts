import { Component, OnInit } from '@angular/core';
import { Language } from '../Models/Language';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  lang = Language.getInstance();
  constructor() { }

  ngOnInit() {
    
  }

}
