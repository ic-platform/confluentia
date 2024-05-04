import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MeetUsComponent } from './meet-us/meet-us.component';
import { CertificateComponent } from './certificate/certificate.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TermsComponent } from './terms/terms.component';
import { ContactComponent } from './contact/contact.component';
import { CourseDetailsComponent } from './course-details/course-details.component';



@NgModule({
  declarations: [
    HomeComponent,
    MeetUsComponent,
    CertificateComponent,
    CatalogComponent,
    SignInComponent,
    SignUpComponent,
    TermsComponent,
    ContactComponent,
    CourseDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
