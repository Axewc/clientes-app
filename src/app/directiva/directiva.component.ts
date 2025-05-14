import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class DirectivaComponent {
  listaCurso : string[] = ['TypeScript', 'JavaScript', 'Java', 'C#', 'PHP'];

  habilitar: boolean = true;

  constructor() {}
}