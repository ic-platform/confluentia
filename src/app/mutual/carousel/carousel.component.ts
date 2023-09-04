import { Component, Input } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  public slides = [
    {
      id: 0,
      title: "Título do Destaque 0",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies orci vel eros ornare pellentesque. Praesent sodales a mi quis dapibus. "
    },
    {
      id: 1,
      title: "Título do Destaque 1",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies orci vel eros ornare pellentesque. Praesent sodales a mi quis dapibus. "
    },
    {
      id: 2,
      title: "Título do Destaque 2",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies orci vel eros ornare pellentesque. Praesent sodales a mi quis dapibus. "
    },

  ]

  public index1 = 0;
  public index2 = 1;
  public index3 = 2;


}
