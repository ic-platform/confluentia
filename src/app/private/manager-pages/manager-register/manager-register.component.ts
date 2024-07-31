
import { ComponentsModule } from '../../../components/components.module';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-manager-register',
  standalone: true,
  imports: [CommonModule, ComponentsModule, RouterModule],
  templateUrl: './manager-register.component.html',
  styleUrl: './manager-register.component.scss'
})
export class ManagerRegisterComponent {
  type: any = {
    colorful: true,
    white: false,
  }
  @Input() param: any = {
    heading: '',
    subHeading: '',
    firstInputName: '',
    firstInputType: '',
    secondInputName: '',
    secondInputType: '',
    aTagText: '',
    aTagLink: '',
    leftButtonText: '',
    leftButtonLink: '',
    rightButtonText: '',
    rightButtonLink: ''
  }

  @Output() login = new EventEmitter<{ email: string; password: string }>();

  // Method to emit the credentials
  emitLoginCredentials(email: string, password: string) {
    this.login.emit({ email, password });
  }

  constructor() {
    this.param = {
      heading: 'Registro de Administrador',
      subHeading: 'Basta preencher os campos abaixo👇',
      firstInputName: 'Nome',
      firstInputType: 'text',
      secondInputName: 'Email',
      secondInputType: 'email',
      aTagText: '*uma senha será gerada automaticamente e enviada no email informado',
      ButtonText: 'Registrar Administrador',
      ButtonFunc: () => console.log('Button Clicked')
    }
  }

  onLeftButtonClick(): void {
    this.param.leftButtonLink();
  }

  onRightButtonClick(): void {
    this.param.rightButtonLink();
  }
}
