import { Component } from '@angular/core';
import { CourseData } from '../models/course-data.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public courses: Array<CourseData> = []

  constructor( private courseSrv: CourseService) {


  }

  ngOnInit(): void {
    this.courses = this.courseSrv.getAllCourses()
  }

  
}
