import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { GetdataService } from 'src/app/serveces/getdata.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  page:any=''
  pageSize =9
  p = 1
  total:any

  addHotel2:FormGroup = new FormGroup({
    name:new FormControl(null,[Validators.maxLength(10),Validators.minLength(3),Validators.required]),
    city:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    phoneHotel:new FormControl(null,[ Validators.required]),
    price:new FormControl(null,[ Validators.required]),
  })
  hotel:any;
  imgHotel:any;
  constructor(public _GetdataService:GetdataService) {
    this._GetdataService.getHotelData().subscribe(res=>{
      console.log(res.data);
      this.hotel=res.data
      this.imgHotel=res.data.image
    })
   }

  ngOnInit(): void {
  }
  pageChanged(page:any){
    let num =page
    this.getPage(num)
    this.p = page
  }
  getPage(num:any){
    this._GetdataService.getHotelData().subscribe(res=>{
      console.log(res.data);
      this.hotel=res.data
      this.imgHotel=res.data.image
    })

  }

}
