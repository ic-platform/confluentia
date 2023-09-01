import { Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent
  implements OnInit, OnDestroy {

  timerSubs!: Subscription;

  @Input() slides: string[] = [
    "assets/images/educacao.jpg",
    "assets/images/educacao_e_tecnologia.jpg",
    "assets/images/empreender.jpg",
    "assets/images/negocios.jpg",
    "assets/images/tecnologia.jpg",
    "assets/images/empreendedorismo.jpg",

  ];
  private _activeSlideIndex: number = 0; // a variavel não é alterada diretamente pelo html

  ngOnInit(): void { // a pagina inicia o o timer do slide
    this.startTimer();
  }

  ngOnDestroy(): void { // a pagina finaliza o time do slide ao ser fechada
    this.stopTimer();
  }

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

  previousSlide(index: number) {
    ;
    index -= 1;
    this.activeSlide(index)
  }

  nextSlide(index: number) {
    index += 1;
    this.activeSlide(index);
  }


}
