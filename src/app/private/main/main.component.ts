import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { CommonModule } from '@angular/common';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, ComponentsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  buttonsFirstRow: Array<any> = [
    { iconPath: '../../../assets/icons/catalogIcon.svg', buttonName: 'Catálogo', link: '/catalog' },
    { iconPath: '../../../assets/icons/certificateIcon.svg', buttonName: 'Certificados', link: '/certificate' },
    { iconPath: '../../../assets/icons/myCoursesIcon.svg', buttonName: 'Meus Cursos', link: '/my-courses' }
  ]

  buttonsSecondRow: Array<any> = [
    { iconPath: '../../../assets/icons/manageIcon.svg', buttonName: 'Gerenciar', link: '/manage' },
    { iconPath: '../../../assets/icons/profileIcon.svg', buttonName: 'Editar Perfil', link: '/profile' },
    { iconPath: '../../../assets/icons/contactIcon.svg', buttonName: 'Fale Conosco', link: '/contact' }
  ]
}
