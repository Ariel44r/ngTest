import { Component, OnInit } from '@angular/core';
import { Language } from '../Models/Language';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  lang = Language.getInstance();
  constructor() { }

  ngOnInit() {
    
  }

}
