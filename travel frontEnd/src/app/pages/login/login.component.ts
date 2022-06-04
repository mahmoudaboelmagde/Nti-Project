import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetdataService } from 'src/app/serveces/getdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public _GetdataService: GetdataService, public _Router: Router) {
    if (localStorage.getItem('token')) {
      this._GetdataService.isLogin = true;
      this.currentUserName = localStorage.getItem('userName');
      this.image = 'http://localhost:3000/' + localStorage.getItem('image');
    } else {
      this._GetdataService.isLogin = false;
      this.logOut();
    }
  }

  ngOnInit(): void {}

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
  image: any;
  userData: any;

  submitFormlogin(dataInfo: any) {
    this.userData = dataInfo.value;
    console.log(dataInfo.value);
    this._GetdataService.loginForm(dataInfo.value).subscribe(
      (res) => {
        console.log(res.data.user);
        if (res.data.user.role == 'admin') {
          this._Router.navigateByUrl('/addhotel');
          window.location.href = '/addhotel';
        } else {
          this._Router.navigateByUrl('/home');
          window.location.href = '/home';
        }
        localStorage.setItem('token', res.data.token);
        localStorage.setItem("IDuser", res.data.user._id)
        localStorage.setItem('image', res.data.user.image);
        this._GetdataService.isLogin = true;

        console.log();
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

    // this._GetdataService.currentUser.next(null);
    //     this._GetdataService.LogOUTForm(this.userData).subscribe(res=>{
    // console.log(res);

    //     })
  }
}
