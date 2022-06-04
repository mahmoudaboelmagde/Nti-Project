import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetdataService } from 'src/app/serveces/getdata.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.maxLength(100),Validators.minLength(3),Validators.required]),
    password:new FormControl(null,[Validators.maxLength(10),Validators.minLength(3),Validators.required]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    age:new FormControl(null,[Validators.max(70),Validators.min(10), Validators.required]),
    phone:new FormControl(null,[ Validators.required]),
    gender:new FormControl(null,[ Validators.required]),
    role:new FormControl(null,[ Validators.required]),
  })
    constructor( private _Router:Router ,private _GetdataService:GetdataService ,private toastr: ToastrService) { }

    ngOnInit(): void {
    }
    errMessage:string=''
    submitForm(dataInfo:any){
  console.log(dataInfo.value);
  this._GetdataService.signupForm(dataInfo.value).subscribe(
    (res)=>{
      this.toastr.success('registed!', 'success registed')

      console.log(res);
      if(res.message == 'succsess'){
        this._Router.navigateByUrl("login")
      }else{
        this.errMessage = res.message
      }


    },
    ()=>{},
    ()=>{},
  )

    }

}
