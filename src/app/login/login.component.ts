import { Component, OnInit } from '@angular/core';
import { Language } from '../Models/Language';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  langObs;
  lang = Language.getInstance();
  constructor() { }

  ngOnInit() {
    this.langObs = Observable.of(localStorage.getItem('langCVFranklin'))
    .subscribe( data => {
        this.lang = Language.getInstance();
    })
  }

}
