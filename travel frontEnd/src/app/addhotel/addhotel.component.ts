import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetdataService } from '../serveces/getdata.service';

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.scss']
})
export class AddhotelComponent implements OnInit {

hoteldata:any;
hotelImage:any;



  addHotel2:FormGroup = new FormGroup({
    name:new FormControl(null,[Validators.required]),
    city:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    phoneHotel:new FormControl(null,[ Validators.required]),
    price:new FormControl(null,[ Validators.required]),
    image:new FormControl(null,[ Validators.required]),
  })
  constructor(private _GetdataService:GetdataService,private _Router:Router) { }
hotelId:any = null
isConfirm:boolean = false
  ngOnInit(): void {
  }
  errMessage:string=''
  submitForm(dataInfo:any){
// this._GetdataService.addHotel(dataInfo.value).subscribe(
//   (res)=>{
//     console.log(res.data.hotelgData._id);
// localStorage.setItem("idHotel",res.data.hotelgData._id)
//     this.hotelId = res.data.hotelgData._id
//   if(this.hotelId != null){
//     this.isConfirm =true
//   }


//   },
//   ()=>{},
//   ()=>{},
// )

  }
  alldata:any;
file:any;
model:any={}
  handelimage(e:any){
this.file = e.target.files
// console.log(this.file);

  }
  handelSubmit(){
if(this.file != null){
  let formData = new FormData()

  formData.append("name",this.addHotel2.controls['name'].value)
  formData.append("email",this.addHotel2.controls['email'].value)
  formData.append("city",this.addHotel2.controls['city'].value)
  formData.append("phoneHotel",this.addHotel2.controls['phoneHotel'].value)
  formData.append("price",this.addHotel2.controls['price'].value)
  formData.append("image",this.file[0])

  this._GetdataService.addHotelPhoto(formData).subscribe(res=>{
    console.log(res);
this.alldata = res.data


  })
}
this._Router.navigateByUrl("/gallery")

  }

}
