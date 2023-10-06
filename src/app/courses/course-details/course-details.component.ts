import { Component } from '@angular/core';
import { CourseData, courseData } from 'src/app/models/course-data.model';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {

  public course: CourseData = courseData();

  constructor(private router: ActivatedRoute, private courseSrv: CourseService) { 

  }

  ngOnInit() {
    this.navCrtl();
  }

  public async navCrtl(): Promise<void> {
    const aux: string = this.router.snapshot.paramMap.get('id') || ''
    try{
      const id = parseInt(aux);
      this.course = this.courseSrv.getCourse(id);
    } catch(erro){
      console.log(erro)
    }
    



    
  }

}
