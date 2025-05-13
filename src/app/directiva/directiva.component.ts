import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css'],
  imports: [CommonModule]
})
export class DirectivaComponent {
  listaCurso : string[] = ['TypeScript', 'JavaScript', 'Java', 'C#', 'PHP'];

  habilitar: boolean = true;

  constructor() {}

}
