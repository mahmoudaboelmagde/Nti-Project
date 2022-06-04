import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddhotelComponent } from './addhotel/addhotel.component';
import { EdituserComponent } from './edituser/edituser.component';
import { GuirdGuard } from './guird.guard';
import { EditpasswordComponent } from './pages/editpassword/editpassword.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PhotohotelComponent } from './pages/photohotel/photohotel.component';
import { PlacedetailsComponent } from './pages/placedetails/placedetails.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { UploadphotoComponent } from './pages/uploadphoto/uploadphoto.component';
import { FooterComponent } from './sharepages/footer/footer.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
{path:'',redirectTo:'home', pathMatch:'full'},
{path:'placedetails/:id',component:PlacedetailsComponent},
{path:'gallery',component:GalleryComponent},
{path:'profile/:userid',component:ProfileComponent},
{path:'addhotel',component:AddhotelComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'uploadphoto',component:UploadphotoComponent},
{path:'edituser',component:EdituserComponent},
{path:'editpassword',component:EditpasswordComponent},
{path:'photohotel/:id',component:PhotohotelComponent},
{path:'footer',component:FooterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
