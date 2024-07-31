import { Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { MeetUsComponent } from './public/meet-us/meet-us.component';
import { CatalogComponent } from './public/catalog/catalog.component';
import { CertificateComponent } from './public/certificate/certificate.component';
import { SignInComponent } from './public/sign-in/sign-in.component';
import { SignUpComponent } from './public/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './public/forget-password/forget-password.component';
import { UpdatePasswordComponent } from './private/update-password/update-password.component';
import { TermsComponent } from './public/terms/terms.component';
import { ContactComponent } from './public/contact/contact.component';
import { MainComponent } from './private/main/main.component';
import { ProfileComponent } from './private/profile/profile.component';
import { MyCoursesComponent } from './private/my-courses/my-courses.component';
import { CourseDetailsComponent } from './public/course-details/course-details.component';
import { LessonComponent } from './private/lesson/lesson.component';
import { ManagerRegisterComponent } from './private/manager-pages/manager-register/manager-register.component';
import { CourseRegisterComponent } from './private/manager-pages/course-register/course-register.component';
import { ManageSiteComponent } from './private/manager-pages/manage-site/manage-site.component';
import { ErrorPageComponent } from './public/error-page/error-page.component';
import { ManageComponent } from './private/manager-pages/manage/manage.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'meet-us', component: MeetUsComponent },
    { path: 'catalog', component: CatalogComponent },
    { path: 'certificate', component: CertificateComponent },
    { path: 'login', component: SignInComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'forget-password', component: ForgetPasswordComponent  },
    { path: 'update-password', component: UpdatePasswordComponent },
    { path: 'terms', component: TermsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'main', component: MainComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'my-courses', component: MyCoursesComponent },
    { path: 'course-details/:id', component: CourseDetailsComponent },
    { path: 'lesson/:id', component: LessonComponent },
    { path: 'manage', component: ManageComponent },
    { path: 'manager-register', component: ManagerRegisterComponent },
    { path: 'course-register', component: CourseRegisterComponent },
    { path: 'manage-site', component: ManageSiteComponent },
    { path: 'error', component: ErrorPageComponent },
    { path: '**', redirectTo: 'error?code=404' }
];
