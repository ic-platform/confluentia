import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FumecFooterComponent } from '../../components/fumec-footer/fumec-footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FumecFooterComponent , RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  param = {
    buttonText: 'Entrar',
    router: '/login'
  };
}