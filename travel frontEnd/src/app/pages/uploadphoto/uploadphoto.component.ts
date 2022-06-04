import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetdataService } from 'src/app/serveces/getdata.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-uploadphoto',
  templateUrl: './uploadphoto.component.html',
  styleUrls: ['./uploadphoto.component.scss']
})
export class UploadphotoComponent implements OnInit {
  file:any = null
  modal:any={}
  constructor(private _GetdataService:GetdataService ,private _Router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  handleImg(ev : any){
    console.log(ev)
    this.file = ev.target.files
  }
  iconClasses = {
    error: 'toast-error',
    info: 'toast-info',
    success: 'toast-success',
    warning: 'toast-warning',
  };
  userId:any = localStorage.getItem("IDuser")
  handleSubmit(){
    if(this.file != null){
      let formData = new FormData()
      formData.append("image" , this.file[0])

      this._GetdataService.uploadPhoto(formData).subscribe(res=>{
        console.log(res.data.image)

        localStorage.setItem("image",res.data.image);
        this.toastr.warning('image uploded!', 'success!');
        // this._Router.navigateByUrl("home")
        window.location.href = "home"


      })

    }
  }


}
