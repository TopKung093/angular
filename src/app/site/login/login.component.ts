import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
declare const $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = ''; 
  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    }      
    login(): void {
      $('#loginModal').modal('hide');
    //this.loginService.getLogin(this.username, this.password)
    this.loginService.postlogin(this.username, this.password)
      .subscribe(result => {
        if(result.status=="ผู้ดูแลระบบ"){
          this.router.navigate(['/admin']);
        }else if(result.status=="ผู้ใช้งานระบบ"){
          this.router.navigate(['/user']);
        }else{
          alert(result.status);
        }
    });  
  }
}
