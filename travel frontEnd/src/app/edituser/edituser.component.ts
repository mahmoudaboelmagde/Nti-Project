import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetdataService } from 'src/app/serveces/getdata.service';



@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {
  registerForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.maxLength(10),Validators.minLength(3),Validators.required]),
    age:new FormControl(null,[Validators.max(70),Validators.min(10), Validators.required]),
    phone:new FormControl(null,[ Validators.required]),
    gender:new FormControl(null,[ Validators.required]),
  })
    constructor( private _Router:Router ,public _GetdataService:GetdataService) { }

    ngOnInit(): void {
    }
    errMessage:string=''
    submitForm(dataInfo:any){
  console.log(dataInfo.value);
  this._GetdataService.editData(dataInfo.value).subscribe(
    (res)=>{
      console.log(res);
      if(res.message == 'succsess'){
        this._Router.navigate(["/profile",this._GetdataService.userId])
      }else{
        this.errMessage = res.message
      }


    },
    ()=>{},
    ()=>{},
  )

    }

}
