import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  signupForm:any;
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      "lastName" :new FormControl(null,[Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      "firstName" :new FormControl(null,[Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      "sid" : new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')])
    });
  }


submitData(){
  console.log(this.signupForm.value);

  if (this.signupForm.valid){
    alert("Thank you for signing up"+this.signupForm.value.firstName);
    
  }
}

get lastName() {
  return this.signupForm.get('lastName');
}

get firstName() {
  return this.signupForm.get('firstName');
}

get sid() {
  return this.signupForm.get('sid');
}
}
