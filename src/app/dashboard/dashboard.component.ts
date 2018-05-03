import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  rForm: FormGroup;
  post: any;
  description: string;
  name: string;
  titleAlert:string = 'This field is required';

  constructor(private fBuilder: FormBuilder) { 

    this.rForm = fBuilder.group({
      'name': [
        null,
        Validators.required
      ],
      'description': [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20)
        ]),
      ],
      'validate': ''
    })

  }

  ngOnInit() {
    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = "You need to specify at least 3 characters";
        } else {
          this.rForm.get('name').setValidators(Validators.required);
        }
        this.rForm.get('name').updateValueAndValidity();
      }
    )
  }

  addPost(post) {
    this.description = post.description;
    this.name = post.name;
  }
}
