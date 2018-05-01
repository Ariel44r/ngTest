import { Component, OnInit } from '@angular/core';
import { Language } from '../Models/Language';
import * as C from '../Models/Utils/Constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  lang = Language.getInstance();
  _c = C;
  constructor() { }

  ngOnInit() {
  }

  console(event) {
    console.log(event)
    //alert("hola mamá!")
  }

  setLang() {
    localStorage.setItem(C.KEY_LANG, localStorage.getItem(C.KEY_LANG) == "Spanish" ? "English" : "Spanish");
    this.lang = Language.getInstance();
  }
}
