import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetdataService } from 'src/app/serveces/getdata.service';

@Component({
  selector: 'app-photohotel',
  templateUrl: './photohotel.component.html',
  styleUrls: ['./photohotel.component.scss']
})
export class PhotohotelComponent implements OnInit {

  constructor(private _GetdataService:GetdataService,private _ActivatedRoute:ActivatedRoute ) {

  }

  ngOnInit(): void {
  }

  hoteldata:any;
  hotelImage:any;
  file:any;
  hotelId:any=localStorage.getItem("idHotel")
  handelimage(e:any){
this.file = e.target.files
console.log(this.file);

  }
  handelSubmit(){
if(this.file != null){
  let formData = new FormData()
  formData.append("image",this.file[0])
  formData.append("idhotel",this.hotelId)


  this._GetdataService.addHotelPhoto(formData).subscribe(res=>{
    console.log(res);
this.hotelImage = res.data
localStorage.setItem("imagHotel",res.data)
console.log(this.hotelImage);

  })
}
  }

}
