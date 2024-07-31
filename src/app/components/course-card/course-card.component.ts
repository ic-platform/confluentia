import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  @Input() id: number = 0;
  @Input() title: string = 'Empty Course';
  @Input() rating: number = 0.0;
  @Input() duration: string = '0 hours';

  constructor(private router: Router) {}

  learnMore() {
    this.router.navigate(['/course-details', this.id]);
  }

}
