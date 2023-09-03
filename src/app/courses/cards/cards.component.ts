import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {



  public cursos = [
    {
      id: 1,
      nome: "Título do Curso",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies orci vel eros ornare pellentesque. Praesent sodales a mi quis dapibus. "
    },

    {
      id: 2,
      nome: "Título do Curso",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies orci vel eros ornare pellentesque. Praesent sodales a mi quis dapibus. "
    },

    {
      id: 3,
      nome: "Título do Curso",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies orci vel eros ornare pellentesque. Praesent sodales a mi quis dapibus. "
    },
    {
      id: 4,
      nome: "Título do Curso",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies orci vel eros ornare pellentesque. Praesent sodales a mi quis dapibus. "
    },
    {
      id: 5,
      nome: "Título do Curso",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies orci vel eros ornare pellentesque. Praesent sodales a mi quis dapibus. "
    },
    {
      id: 6,
      nome: "Título do Curso",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies orci vel eros ornare pellentesque. Praesent sodales a mi quis dapibus. "
    },
    {
      id: 7,
      nome: "Título do Curso",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies orci vel eros ornare pellentesque. Praesent sodales a mi quis dapibus. "
    },
    {
      id: 8,
      nome: "Título do Curso",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies orci vel eros ornare pellentesque. Praesent sodales a mi quis dapibus. "
    }
  ]

  constructor() {


  }

  ngOnInit(): void {

  }





}
