import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css','./../../../assets/sb-admin-2.css']
})
export class TopbarComponent implements OnInit {
  public isLoggedIn:Boolean
  constructor(private as: AuthService, private router : Router) { }

  ngOnInit(): void {
    this.isLoggedIn=this.as.isLoggedIn();
  }
  logout(){

    localStorage.removeItem("mytoken");
    this.isLoggedIn=this.as.isLoggedIn();
    this.router.navigateByUrl('/')

  }
}
