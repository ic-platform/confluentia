import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage/manage.component';
import { ManagerRegisterComponent } from './manager-register/manager-register.component';
import { CourseRegisterComponent } from './course-register/course-register.component';



@NgModule({
  declarations: [
    ManageComponent,
    ManagerRegisterComponent,
    CourseRegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ManagerModuleModule { }
