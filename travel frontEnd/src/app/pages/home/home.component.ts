import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GetdataService } from 'src/app/serveces/getdata.service';


declare let $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser:any;
  currentUserName:any=''
  isLogin:boolean =false




  // owl slider
  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: true,
    navSpeed: 100,
    dots:false,
    margin:8,
    navText: ['perv', 'next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

places:any;
  constructor(private _GetdataService:GetdataService ) {
    

   }

  ngOnInit(): void {

  }
  // header video
videoSrc:any="assets/image/vid-1.mp4"
isActvie=false
  getActive(data:any){
this.videoSrc=data.target.getAttribute("data-src")
$(data.target).addClass('active')
$(data.target).addClass('min-color')
$(data.target).siblings().removeClass('active').removeClass('min-color')


  }

}
