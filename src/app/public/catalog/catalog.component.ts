import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  param = {
    buttonText: '',
    router: ''
  }

  constructor() {}

  isUserLoggedIn(): boolean {
    return true;
  }

  getButton(): void {
    if(this.isUserLoggedIn()) {
      this.param.buttonText = 'Menu';
      this.param.router = '/main';
    } else {
      this.param.buttonText = 'Login';
      this.param.router = '/sign-in';
    }
  }

  ngOnInit() {
    this.getButton();
  }
}
