import { Component } from '@angular/core';
import { HeaderJustLogoComponent } from '../../components/header-just-logo/header-just-logo.component';
import { MenuButtonsComponent } from '../../components/menu-buttons/menu-buttons.component';
import { FumecFooterComponent } from '../../components/fumec-footer/fumec-footer.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderJustLogoComponent, MenuButtonsComponent, FumecFooterComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(private router: Router, private authService: AuthenticationService) { }

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
      { iconPath: '/icons/catalogIcon.svg', buttonName: 'Catálogo', link: '/catalog' },
      { iconPath: '/icons/certificateIcon.svg', buttonName: 'Certificados', link: '/certificate' },
      { iconPath: '/icons/myCoursesIcon.svg', buttonName: 'Meus Cursos', link: '/my-courses' }
    ]

    // Second Row:
      this.buttonsSecondRow = [
        { iconPath: '/icons/profileIcon.svg', buttonName: 'Editar Perfil', link: '/profile' },
        { iconPath: '/icons/contactIcon.svg', buttonName: 'Fale Conosco', link: '/contact' }
      ]

      if (!this.isUserStudent) {
        this.buttonsSecondRow.unshift(
          { iconPath: '/icons/manageIcon.svg', buttonName: 'Gerenciar', link: '/manage' },
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
