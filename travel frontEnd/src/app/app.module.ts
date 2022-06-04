import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './sharepages/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { PlacedetailsComponent } from './pages/placedetails/placedetails.component';
import { FooterComponent } from './sharepages/footer/footer.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AuthinterceptorInterceptor } from './interceptor/authinterceptor.interceptor';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddhotelComponent } from './addhotel/addhotel.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UploadphotoComponent } from './pages/uploadphoto/uploadphoto.component';


import { ToastrModule } from 'ngx-toastr';
import { EdituserComponent } from './edituser/edituser.component';
import { EditpasswordComponent } from './pages/editpassword/editpassword.component';
import { PhotohotelComponent } from './pages/photohotel/photohotel.component';
import { NgxPaginationModule } from 'ngx-pagination';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PlacedetailsComponent,
    FooterComponent,
    GalleryComponent,
    ProfileComponent,
    AddhotelComponent,
    LoginComponent,
    RegisterComponent,
    UploadphotoComponent,
    EdituserComponent,
    EditpasswordComponent,
    PhotohotelComponent,










  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule

  ],
  providers: [
    {
      provide :HTTP_INTERCEPTORS,
      useClass : AuthinterceptorInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
