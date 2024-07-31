import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  @Input() dataObj = {
    title: 'Empty Course',
    rating: '0.0',
    duration: '0'
  }

  learnMore() {
    console.log('Learn more about:', this.dataObj.title);
  }

}
