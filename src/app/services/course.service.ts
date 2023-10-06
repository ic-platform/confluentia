import { Injectable } from '@angular/core';
import { CourseData } from '../models/course-data.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public cursos: Array<CourseData> = [
    {
      id: 0,
      name: "Título do Curso",
      desc: "Lorem ipsum dolor sit amet consectetur. Nibh dis nisi mattis nec neque. "
    },
    {
      id: 1,
      name: "Título do Curso",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies orci vel eros ornare pellentesque. Praesent sodales a mi quis dapibus. "
    },

    {
      id: 2,
      name: "Título do Curso",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies orci vel eros ornare pellentesque. Praesent sodales a mi quis dapibus. "
    },

    {
      id: 3,
      name: "Título do Curso",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies orci vel eros ornare pellentesque. Praesent sodales a mi quis dapibus. "
    },
    {
      id: 4,
      name: "Título do Curso",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies orci vel eros ornare pellentesque. Praesent sodales a mi quis dapibus. "
    },
    {
      id: 5,
      name: "Título do Curso",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies orci vel eros ornare pellentesque. Praesent sodales a mi quis dapibus. "
    },
    {
      id: 6,
      name: "Título do Curso",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies orci vel eros ornare pellentesque. Praesent sodales a mi quis dapibus. "
    },
    {
      id: 7,
      name: "Título do Curso",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies orci vel eros ornare pellentesque. Praesent sodales a mi quis dapibus. "
    },

  ]

  constructor() { }

  public getAllCourses(){
    return this.cursos;
  }

  public getCourse(id :number){

    return this.cursos[id];

  }



}
