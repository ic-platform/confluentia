import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { LessonComponent } from './lesson/lesson.component';



@NgModule({
  declarations: [
    MainComponent,
    ProfileComponent,
    MyCoursesComponent,
    LessonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PrivateModule { }
