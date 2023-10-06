import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { CourseData } from 'src/app/models/course-data.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public cursos: Array<CourseData>;
  constructor( private courseSrv:CourseService) {
    this.cursos = [];

  }

  ngOnInit(): void {
    this.cursos = this.courseSrv.getAllCourses();
  }





}
