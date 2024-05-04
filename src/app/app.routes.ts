import { Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { SignInComponent } from './public/sign-in/sign-in.component';
import { MeetUsComponent } from './public/meet-us/meet-us.component';
import { CertificateComponent } from './public/certificate/certificate.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: SignInComponent },
    { path: 'meet-us', component: MeetUsComponent },
    { path: 'certificate', component: CertificateComponent }
];
