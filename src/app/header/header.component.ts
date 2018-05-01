import { Component, OnInit } from '@angular/core';
import { Language } from '../Models/Language';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  lang = Language.getInstance();
  constructor() { }

  ngOnInit() {
  }

  console(event) {
    console.log(event)
    //alert("hola mamá!")
  }

  setLang() {
    localStorage.setItem("langCVFranklin", localStorage.getItem("langCVFranklin") == "Spanish" ? "English" : "Spanish");
    this.lang = Language.getInstance();
  }
}
