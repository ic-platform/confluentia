import { Component, Input } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

   @Input() slides: string[] = [
    "",
    "",
    "",
    ""
  ];
  private _activeSlideIndex: number = 0; // a variavel não é alterada diretamente pelo html
  timerSubs: any;
  
  get activeSlideIndex() { // metodo de leitura acessado diretamente pelo html
    return this._activeSlideIndex;
  }

  set activeSlideIndex(value: number) { // metodo de escrita acessado diretamente pelo html
    if (value < 0) {
      this._activeSlideIndex = this.slides.length - 1;
    } else if (value >= this.slides.length) {
      this.activeSlideIndex = 0;
    } else {
      this._activeSlideIndex = value;
    } 

  }
  

  ngOnInit(): void { // a pagina inicia o o timer do slide
    this.startTimer();
  }

  ngOnDestroy(): void { // a pagina finaliza o time do slide ao ser fechada
    this.stopTimer();
  }

  

  startTimer(): void {
    this.timerSubs = timer(5000).subscribe(() => {
      this.activeSlide(this.activeSlideIndex + 1);
    });
  }

  stopTimer(): void {
    this.timerSubs?.unsubscribe();
  }

  activeSlide(index: number): void { //metodo chamado a cada X seg para atualizar o slide;
    this.activeSlideIndex = index;
    this.startTimer();
  }
 
}
