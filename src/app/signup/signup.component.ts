import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from '../Models/Language';
import * as C from '../Models/Utils/Constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  langObserver;
  lang = Language.getInstance();
  _c = C;
  constructor() { }

  ngOnInit() {
    this.langObserver = Observable.of(localStorage.getItem(C.KEY_LANG))
      .subscribe( data => {

      })
  }

}
