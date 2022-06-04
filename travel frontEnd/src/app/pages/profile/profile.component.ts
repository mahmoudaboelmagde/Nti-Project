import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetdataService } from 'src/app/serveces/getdata.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
imageUser:any
userId:any = localStorage.getItem("IDuser")
UserData:any ;
isAdmin:boolean =false

  constructor(public _GetdataService:GetdataService,public _Router:Router,private toastr: ToastrService) {
    if(this.UserData?.role == "admin"){
      this.isAdmin = true
      }

    this.imageUser = localStorage.getItem("image")
    _GetdataService.getSingelUser(this.userId).subscribe(res=>{
      localStorage.setItem("image",res.data.image);
      localStorage.setItem("userName" , res.data.name)
      localStorage.setItem("IDuser" , res.data._id)
      this.UserData = res.data
      console.log(this.UserData.book);



    })
  }
  booking:any;
  bookID:any;
  Reservation(){
    this._GetdataService.Reservation().subscribe(res=>{


      this.booking = res.data.booking
      for (let index = 0; index < this.booking.length; index++) {
              console.log(this.booking[index]._id);
        this.bookID =this.booking[index]._id
      }

    })
  }

  cansel(){
    this._GetdataService.cansel(this.bookID).subscribe(res=>{
      console.log(res);

    })
    this._Router.navigateByUrl(`home`)
    this.toastr.warning('canceled!', 'success cancel')
  }
  ngOnInit(): void {

    this.Reservation()
  }
  logOut(){
    localStorage.removeItem("IDuser")
    localStorage.removeItem('image');
    localStorage.removeItem('token');
  localStorage.removeItem('userName');
  this._Router.navigateByUrl("/home")
  this._GetdataService.isLogin = false
}
}
