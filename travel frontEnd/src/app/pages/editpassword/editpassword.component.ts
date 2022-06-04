import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetdataService } from 'src/app/serveces/getdata.service';


@Component({
  selector: 'app-editpassword',
  templateUrl: './editpassword.component.html',
  styleUrls: ['./editpassword.component.scss']
})
export class EditpasswordComponent implements OnInit {

  registerForm:FormGroup=new FormGroup({
    password:new FormControl(null,[Validators.maxLength(10),Validators.minLength(3),Validators.required]),
    newPassword:new FormControl(null,[Validators.maxLength(10),Validators.minLength(3),Validators.required]),

  })
    constructor( private _Router:Router ,private _GetdataService:GetdataService) { }

    ngOnInit(): void {
    }
    errMessage:string=''
    submitForm(dataInfo:any){
  console.log(dataInfo.value);
  this._GetdataService.editPass(dataInfo.value).subscribe(
    (res)=>{
      console.log(res);
      if(res.message == 'updated password'){
        this._Router.navigateByUrl("login")
        localStorage.removeItem("IDuser")
        localStorage.removeItem('image');
        localStorage.removeItem('token');

      }else{
        this.errMessage = res.message
      }


    },
    ()=>{},
    ()=>{},
  )

    }


}
