import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetdataService } from 'src/app/serveces/getdata.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
userId:any = localStorage.getItem("IDuser")


defaultImage:any="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
constructor(public _GetdataService: GetdataService, public _Router:Router) {
    console.log(this.userId);



    if (localStorage.getItem('token')) {
      this._GetdataService.isLogin = true;
      this.currentUserName = localStorage.getItem("userName")
    }
    else{
      this._GetdataService.isLogin = false;
      this.logOut()

    }

  }
  disPlayCloseIcon: boolean = false;
  ngOnInit(): void {







    //  menue bar
    let menuBar = document.getElementById('mnue-bar');
    let navMenue = document.querySelector('nav');
    menuBar?.addEventListener('click', () => {
      navMenue?.classList.toggle('d-block');
    });
  }

  // logIn form
  // isLogin: boolean = false;
  currentUserName: any = '';
  currentUser: any;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.maxLength(10),
      Validators.minLength(3),
      Validators.required,
    ]),
  });

  // submit loginFrom
  messgaeSuccess: any;
  messgaeFiled: any;
image:any;
  userData:any;

  submitFormlogin(dataInfo: any) {
    this.userData = dataInfo.value
    console.log(dataInfo.value);
    this._GetdataService.loginForm(dataInfo.value).subscribe(
      (res) => {
        console.log(res.data.user.role);
        if(res.data.user.role == "admin"){
          this._Router.navigateByUrl("/addhotel")
          window.location.href ="/addhotel"
        }
        else{
          this._Router.navigateByUrl("/home")
          window.location.href ="/home"
        }
        localStorage.setItem('token', res.data.token);
        this._GetdataService.isLogin = true;
        // this.currentUserName = res.data.user.name;
       this.image = localStorage.setItem("image",res.data.user.image);
        console.log(this.image);

       this.currentUserName = localStorage.setItem("userName" , res.data.user.name)
      },
      (err) => {},
      () => {}
      );
    }
    // log out
  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('image');
    this._GetdataService.isLogin = false;


  }
}
