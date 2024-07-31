import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss'
})
export class LessonComponent {

  param = {
    buttonText: 'Menu',
    router: '/main'
  };

  courseTitle = 'Excel Básico';
  progress = 33; // 33% completo

  modules: Module[] = [
    {
      title: 'Módulo 1 - Introdução ao Excel',
      lessons: [
        {
          title: 'Aula 1: Interface do Excel',
          description: [
            'Navegação pela interface',
            'Barras de ferramentas e guias',
            'Personalização da faixa de opções'
          ]
        },
        {
          title: 'Aula 2: Manipulação de Dados',
          description: [
            'Inserção, exclusão e edição de células',
            'Formatação de células',
            'Gerenciamento de linhas e colunas'
          ]
        }
      ]
    },
    {
      title: 'Módulo 2 - Fórmulas e Funções Básicas',
      lessons: [
        {
          title: 'Aula 1: Fórmulas Essenciais',
          description: [
            'Sintaxe básica das fórmulas',
            'Operadores matemáticos e lógicos',
            'Referências de células'
          ]
        }
      ]
    }
  ];

  currentLesson: Lesson = this.modules[0].lessons[0];

  constructor() { }

  ngOnInit(): void {
  }

  setLesson(lesson: Lesson): void {
    this.currentLesson = lesson;
  }
}

interface Lesson {
  title: string;
  description: string[];
}

interface Module {
  title: string;
  lessons: Lesson[];
}
