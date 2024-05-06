import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.scss'
})
export class ErrorPageComponent {
  parameters: Observable<Params>;

  constructor(private activeRoute: ActivatedRoute) {
    this.parameters = of({});
  };

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(params => {
      console.log(params); // Output: { code: '404' }
      const code = params['code']; // Access specific query param value
      console.log(code); // Output: '404'
    });

  }
}
