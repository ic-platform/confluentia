import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { CommonModule } from '@angular/common';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentitcation/authentication.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, ComponentsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(private router: Router, private authService: AuthenticationService) {

  }

  type: any = {
    colorful: true,
    white: false,
  }

  buttonsFirstRow: Array<any> = [];

  buttonsSecondRow: Array<any> = [];

  isUserStudent: boolean = false;

  defineButtons(): void {
    // First Row:
     this.buttonsFirstRow = [
      { iconPath: '../../../assets/icons/catalogIcon.svg', buttonName: 'Catálogo', link: '/catalog' },
      { iconPath: '../../../assets/icons/certificateIcon.svg', buttonName: 'Certificados', link: '/certificate' },
      { iconPath: '../../../assets/icons/myCoursesIcon.svg', buttonName: 'Meus Cursos', link: '/my-courses' }
    ]

    // Second Row:
      this.buttonsSecondRow = [
        { iconPath: '../../../assets/icons/profileIcon.svg', buttonName: 'Editar Perfil', link: '/profile' },
        { iconPath: '../../../assets/icons/contactIcon.svg', buttonName: 'Fale Conosco', link: '/contact' }
      ]

      if (!this.isUserStudent) {
        this.buttonsSecondRow.unshift(
          { iconPath: '../../../assets/icons/manageIcon.svg', buttonName: 'Gerenciar', link: '/manage' },
        )
      }
  }

  logoutUser() {
    const result = this.authService.logout();
    console.log(result);
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.defineButtons();
  }
}
