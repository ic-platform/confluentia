import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input() dataObj = [
    {
      title: 'Novo Curso Disponível',
      secondHeading: 'Excel Básico',
      description: 'Descubra o poder do Excel com nosso curso básico! Seja você um iniciante absoluto ou alguém que queira aprimorar suas habilidades, este curso é perfeito para você.',
      imgLink: 'path_to_your_image_1.png'
    },
    // Add more objects as needed
  ];

  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.dataObj.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.dataObj.length) % this.dataObj.length;
  }
}
