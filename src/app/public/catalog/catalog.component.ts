import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [HeaderComponent, CarouselComponent, FormsModule, CommonModule, CourseCardComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  param = {
    buttonText: '',
    router: ''
  }

  courseToSearch: string = '';

  dataObj = [
    {
      title: 'Novo Curso Disponível',
      secondHeading: 'Excel Básico',
      description: 'Descubra o poder do Excel com nosso curso básico! Seja você um iniciante absoluto ou alguém que queira aprimorar suas habilidades, este curso é perfeito para você.',
      imgLink: 'https://via.placeholder.com/150'
    },
    {
      title: 'Aprenda JavaScript',
      secondHeading: 'JavaScript Avançado',
      description: 'Domine a linguagem de programação mais popular do mundo com nosso curso avançado de JavaScript.',
      imgLink: 'https://via.placeholder.com/150/0000FF/808080'
    },
    {
      title: 'Desenvolvimento Web',
      secondHeading: 'HTML e CSS',
      description: 'Crie páginas web impressionantes com nosso curso de HTML e CSS. Perfeito para iniciantes e desenvolvedores experientes.',
      imgLink: 'https://via.placeholder.com/150/FF0000/FFFFFF'
    }
  ];

  courses = [
    { id: 1, title: 'Excel Básico', rating: 4, duration: '5 horas' },
    { id: 2, title: 'Excel Avançado', rating: 5, duration: '8 horas' },
    { id: 3, title: 'Introdução ao Power BI', rating: 4.5, duration: '6 horas' },
    { id: 4, title: 'Análise de Dados com Python', rating: 5, duration: '10 horas' },
    { id: 5, title: 'Fundamentos de SQL', rating: 4, duration: '7 horas' },
    { id: 6, title: 'Desenvolvimento Web com Angular', rating: 5, duration: '12 horas' },
    { id: 7, title: 'Machine Learning Básico', rating: 4.5, duration: '9 horas' },
    { id: 8, title: 'Visualização de Dados com Tableau', rating: 4, duration: '6 horas' },
    { id: 9, title: 'Estatística para Ciência de Dados', rating: 4.5, duration: '8 horas' },
    { id: 10, title: 'JavaScript Avançado', rating: 5, duration: '11 horas' }
  ];

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

  searchCourse(courseToSearch: string): void {
    console.log('Searching for course:', this.courseToSearch);
  }

  ngOnInit() {
    this.getButton();
  }
}
