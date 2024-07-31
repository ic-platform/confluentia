import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent {

  param = {
    buttonText: '',
    router: ''
  }

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

  courseDetails = {
    title: 'Excel Básico',
    description: `Descubra o poder do Excel com nosso curso básico! Seja você um iniciante absoluto ou alguém que queria aprimorar suas habilidades, este curso é perfeito para você. Aprenda desde as funcionalidades fundamentais até dicas e truques úteis para otimizar seu fluxo de trabalho. Domine as planilhas, fórmulas, gráficos e muito mais em um ambiente de aprendizado acolhedor e prático. Transforme-se em um mestre do Excel e ganhe confiança para enfrentar desafios profissionais e pessoais com facilidade!`,
    rating: 4,
    time: '5 horas',
    level: 'Iniciante',
    content: `
      <ul>
        <li><strong>Módulo 1 - Introdução ao Excel</strong>
          <ul>
            <li>Aula 1: Interface do Excel
              <ul>
                <li>Navegação pela interface</li>
                <li>Barras de ferramentas e guias</li>
                <li>Personalização da faixa de opções</li>
              </ul>
            </li>
            <li>Aula 2: Manipulação de Dados
              <ul>
                <li>Inserção, exclusão e edição de células</li>
                <li>Formatação de células</li>
                <li>Gerenciamento de linhas e colunas</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>Módulo 2 - Fórmulas e Funções Básicas</strong>
          <ul>
            <li>Aula 1: Fórmulas Essenciais
              <ul>
                <li>Sintaxe básica das fórmulas</li>
                <li>Operadores matemáticos e lógicos</li>
                <li>Referências de células</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    `,
    imgUrl: 'https://via.placeholder.com/300' // Adicione o caminho da imagem
  };

  constructor() { }

  ngOnInit(): void {
    this.getButton();
  }

}
