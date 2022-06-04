import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetdataService } from 'src/app/serveces/getdata.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-placedetails',
  templateUrl: './placedetails.component.html',
  styleUrls: ['./placedetails.component.scss']
})
export class PlacedetailsComponent implements OnInit {

  Hotel:any;
  hotelId:any
  HotelName:any = ""
  phoneHotel:any;
  city:any;
  image:any
  userID:any = localStorage.getItem("IDuser")
  constructor(public _GetdataService:GetdataService ,private _Ruter:Router,private _ActivatedRoute:ActivatedRoute,private toastr: ToastrService) {
    this.hotelId = this._ActivatedRoute.snapshot.params['id']
    console.log(this.hotelId);
    this._GetdataService.getSingleHotel(this.hotelId).subscribe(res=>{
      console.log(res);
      this.Hotel = res.data

    })


    }


  ngOnInit(): void {
  }
  BookingHotel(){
  let  obj = {
    name:this.Hotel.name,
    city:this.Hotel.city,
    phoneHotel:this.Hotel.phoneHotel,
    image:this.Hotel.image,
    }
    this._GetdataService.bookHotel(obj).subscribe(res=>{


    })
    this._Ruter.navigateByUrl(`/profile/${this.userID}`)
    this.toastr.success('booked!', 'success book')
  }
}
