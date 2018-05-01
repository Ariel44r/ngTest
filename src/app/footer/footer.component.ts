import { Component, OnInit } from '@angular/core';
import * as C from '../Models/Utils/Constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  _c = C;
  constructor() { }

  ngOnInit() {
  }

}
