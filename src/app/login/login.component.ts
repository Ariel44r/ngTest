import { Component, OnInit } from '@angular/core';
import { Language } from '../Models/Language';
import { Observable } from 'rxjs';
import * as C from '../Models/Utils/Constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  langObserver;
  lang = Language.getInstance();
  constructor() { }

  ngOnInit() {
    this.langObserver = Observable.of(localStorage.getItem(C.KEY_LANG))
    .subscribe( data => {
        this.lang = Language.getInstance();
    })
  }

}
