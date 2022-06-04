import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class GetdataService {
  public isLogin: boolean = false;
  imageBase: string = 'http://localhost:3000/';
  imageHotel:any = localStorage.getItem("imagHotel")
  baseURL: string = `http://localhost:3000/user/`;
  defaultImage: any =
    'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg';
  imageUser: any = 'http://localhost:3000/' + localStorage.getItem('image');
  userId:any = localStorage.getItem("IDuser")

  constructor(private _HttpClient: HttpClient) {

    if (localStorage.getItem('image') == 'undefined') {
      this.imageUser = this.defaultImage;
    }
  }


//user data
  signupForm(body: any): Observable<any> {
    console.log(body);

    return this._HttpClient.post(`http://localhost:3000/user/register`, body);
  }
  loginForm(body: any): Observable<any> {
    console.log(body);

    return this._HttpClient.post(`http://localhost:3000/user/login`, body);
  }
  LogOUTForm(body: any): Observable<any> {
    console.log(body);

    return this._HttpClient.post(`http://localhost:3000/user/logout`, body);
  }
  getSingelUser(body: any): Observable<any> {
    console.log(body);

    return this._HttpClient.get(`http://localhost:3000/user/singel/${body}`);
  }
  editData(body: any): Observable<any> {
    console.log(body);

    return this._HttpClient.patch(`http://localhost:3000/user/editUser`, body);
  }
  editPass(body: any): Observable<any> {
    console.log(body);

    return this._HttpClient.patch(`http://localhost:3000/user/editPass`, body);
  }

  uploadPhoto(body: any): Observable<any> {
    return this._HttpClient.patch('http://localhost:3000/user/uploadimage', body);
  }



  //hotel data
  addHotel(body: any): Observable<any> {
    return this._HttpClient.post('http://localhost:3000/hotel/addhotel', body);
  }
  addHotelPhoto(body: any): Observable<any> {
    console.log(body);

    return this._HttpClient.post('http://localhost:3000/hotel/uploadimagehotel', body);
  }
  getHotelData(): Observable<any> {
    return this._HttpClient.get('http://localhost:3000/hotel/allhotel');
  }

  getSingleHotel(id: any): Observable <any> {
    console.log(id);

    return this._HttpClient.get(`http://localhost:3000/hotel/singelhotel/${id}`);
  }


  //booking
  bookHotel(body: any): Observable <any> {


    return this._HttpClient.post(`http://localhost:3000/book/addbook`,body);
  }
  Reservation(): Observable <any> {


    return this._HttpClient.get(`http://localhost:3000/book/mybooking`);
  }
  cansel(id:any): Observable <any> {


    return this._HttpClient.delete(`http://localhost:3000/book/cancelbooking/${id}`);
  }


}
