import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
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
          ],
          videoLink: 'https://youtu.be/FPfQMVf4vwQ?si=sj2CgSlph54RZw1i',
          resourceLink: 'https://example.com/resource1.pdf'
        },
        {
          title: 'Aula 2: Manipulação de Dados',
          description: [
            'Inserção, exclusão e edição de células',
            'Formatação de células',
            'Gerenciamento de linhas e colunas'
          ],
          videoLink: 'https://www.example.com/video2.mp4',
          resourceLink: 'https://example.com/resource2.pdf'
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
          ],
          videoLink: 'https://www.example.com/video3.mp4',
          resourceLink: 'https://example.com/resource3.pdf'
        }
      ]
    }
  ];

  currentLesson: Lesson;
  currentModuleIndex = 0;
  currentLessonIndex = 0;
  safeVideoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.currentLesson = this.modules[this.currentModuleIndex].lessons[this.currentLessonIndex];
    this.safeVideoUrl = this.sanitizeUrl(this.currentLesson.videoLink);
  }

  ngOnInit(): void {}

  setLesson(lesson: Lesson): void {
    this.currentLesson = lesson;
    this.safeVideoUrl = this.sanitizeUrl(lesson.videoLink);
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  isFirstLesson(): boolean {
    return this.currentLessonIndex === 0 && this.currentModuleIndex === 0;
  }

  isLastLesson(): boolean {
    return this.currentModuleIndex === this.modules.length - 1 &&
           this.currentLessonIndex === this.modules[this.currentModuleIndex].lessons.length - 1;
  }

  prevLesson(): void {
    if (this.currentLessonIndex > 0) {
      this.currentLessonIndex--;
    } else if (this.currentModuleIndex > 0) {
      this.currentModuleIndex--;
      this.currentLessonIndex = this.modules[this.currentModuleIndex].lessons.length - 1;
    }
    this.setLesson(this.modules[this.currentModuleIndex].lessons[this.currentLessonIndex]);
  }

  nextLesson(): void {
    if (this.currentLessonIndex < this.modules[this.currentModuleIndex].lessons.length - 1) {
      this.currentLessonIndex++;
    } else if (this.currentModuleIndex < this.modules.length - 1) {
      this.currentModuleIndex++;
      this.currentLessonIndex = 0;
    }
    this.setLesson(this.modules[this.currentModuleIndex].lessons[this.currentLessonIndex]);
  }

  downloadResource(): void {
    const link = document.createElement('a');
    link.href = this.currentLesson.resourceLink;
    link.download = this.currentLesson.resourceLink.split('/').pop()!;
    link.click();
  }
}

interface Lesson {
  title: string;
  description: string[];
  videoLink: string;
  resourceLink: string;
}

interface Module {
  title: string;
  lessons: Lesson[];
}
