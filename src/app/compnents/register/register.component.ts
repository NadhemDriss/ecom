import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms"
import { HttpClient } from "@angular/common/http"
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup
 
  constructor(fb: FormBuilder, 
    private http:HttpClient,
    private as : AuthService,
    private router:Router
    ) {
    let registerFormControls=
    {name : new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.pattern("[A-Za-z .'-]+")
    ]),
    email: new FormControl('',[
Validators.required,
Validators.email

    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(8)
      
          ]),
          repassword: new FormControl('',[
            Validators.required, 
                ])
  }
  
  this.registerForm= fb.group(registerFormControls)
  }
  
  get myusername(){return this.registerForm.get('name')}
  get myemail(){return this.registerForm.get('email')}
  get mypassword(){return this.registerForm.get('password')}
  get myrepassword(){return this.registerForm.get('repassword')}
  ngOnInit(): void {
  }
  registerUser(){

  

    let data = this.registerForm.value
  
    let user = new User(null,data.name,data.username,data.password)

    console.log(data);

    //envoi data vers API
   this.as.registerUser(data).subscribe(
      (result) => {
        console.log(result);
        this.router.navigateByUrl('/login')
      }
      ,
      (error) => {
        console.log(error);
      }
    )
  
   
  }
}
